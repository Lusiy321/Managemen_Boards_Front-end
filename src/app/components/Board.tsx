import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Column from "./Column";
import CreateCardButton from "./CreateCardButton";
import styles from "@/styles/board.module.css";

export interface iCards {
  title: string;
  cards: iTask[];
  moveCard: (title: string, state: iTask) => void;
  children: React.ReactNode;
}

export interface iTask {
  _id: string;
  title: string;
  description: string;
  state: string;
}

export interface Props {
  board: { _id: string; name: string };
}

const Board: React.FC<Props> = ({ board }) => {
  const [data, setData] = useState<iTask[]>([]);

  const handlerFetchData = (data: React.SetStateAction<any>) => {
    setData(data);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://managemen-boards.onrender.com/cards/${board._id}`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const moveCard = async (title: string, state: iTask) => {
    if (title === "To Do") {
      try {
        await fetch(
          `https://managemen-boards.onrender.com/update-card/${state._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ state: "do" }),
          }
        );
      } catch (error) {
        console.error("Error updating card state:", error);
      }
    }
    if (title === "In Progress") {
      try {
        await fetch(
          `https://managemen-boards.onrender.com/update-card/${state._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ state: "progress" }),
          }
        );
      } catch (error) {
        console.error("Error updating card state:", error);
      }
    }
    if (title === "Done") {
      try {
        await fetch(
          `https://managemen-boards.onrender.com/update-card/${state._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ state: "done" }),
          }
        );
      } catch (error) {
        console.error("Error updating card state:", error);
      }
    }

    async function fetchData() {
      try {
        const response = await fetch(
          `https://managemen-boards.onrender.com/cards/${board._id}`
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
    <div className={styles.container}>
      <div className={styles.head}>
        <h1 className={styles.title}>{board.name}</h1>
      </div>
      <div className={styles.column}>
        <DndProvider backend={HTML5Backend}>
          <Column
            title="To Do"
            cards={data.filter((task) => task.state === "do")}
            moveCard={moveCard}
          >
            <CreateCardButton board={board} onFetch={handlerFetchData} />
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
      </div>
    </div>
  );
};

export default Board;
