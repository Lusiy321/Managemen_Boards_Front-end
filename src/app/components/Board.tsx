import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Column from "./Column";
import CreateCardButton from "./CreateCardButton";

export interface iCards {
  title: string;
  cards: iTask[];
  moveCard: (dragIndex: number, hoverIndex: number, state: string) => void;
  children: React.ReactNode;
}

export interface iTask {
  _id: string;
  title: string;
  description: string;
  state: string;
}

export interface Props {
  boardId: string;
}

const Board: React.FC<Props> = ({ boardId }) => {
  const [data, setData] = useState<iTask[]>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://managemen-boards.onrender.com/cards/${boardId}`
        );
        const data = await response.json();

        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const moveCard = async (
    dragIndex: number,
    hoverIndex: number,
    state: string
  ) => {
    const dragCard = data[dragIndex];
    const newCards = [...data];
    newCards.splice(dragIndex, 1);
    newCards.splice(hoverIndex, 0, dragCard);

    setData(newCards);

    console.log(state, dragIndex, hoverIndex);

    try {
      await fetch(
        `https://managemen-boards.onrender.com/update-card/${dragCard._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ state }),
        }
      );
    } catch (error) {
      console.error("Error updating card state:", error);
    }

    async function fetchData() {
      try {
        const response = await fetch(
          `https://managemen-boards.onrender.com/cards/${boardId}`
        );
        const data = await response.json();

        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  };

  return (
    <div className="container">
      <h1></h1>
      <DndProvider backend={HTML5Backend}>
        <Column
          title="To Do"
          cards={data.filter((task) => task.state === "do")}
          moveCard={moveCard}
        >
          <CreateCardButton />
        </Column>
        <Column
          title="In Progress"
          cards={data.filter((task) => task.state === "progress")}
          moveCard={moveCard}
        >
          {""}
        </Column>
        <Column
          title="Done"
          cards={data.filter((task) => task.state === "done")}
          moveCard={moveCard}
        >
          {""}
        </Column>
      </DndProvider>
      <style jsx>{`
        .container {
          display: flex;
          margin: 0 auto;
          max-width: 1200px;
        }

        .column {
          background-color: #f0f0f0;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 10px;
          margin: 20px;
        }

        h2 {
          font-size: 18px;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default Board;
