import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Column from "./Column";
import CreateCardButton from "./CreateCardButton";
import styles from "@/styles/board.module.css";
import DeleteBoardButton from "./DeleteBoardButton";

export interface iCards {
  title: string;
  cards: iTask[];
  moveCard: (title: string, state: iTask) => void;
  children: React.ReactNode;
  onFetch: (data: iTask) => void;
}

export interface iTask {
  _id: string;
  title: string;
  description: string;
  state: string;
  dashboard: string;
}

export interface Props {
  board: { _id: string; name: string };
  onSearch: (data: React.SetStateAction<any>) => void;
}

const Board: React.FC<Props> = ({ board, onSearch }) => {
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
  }, [board._id]);

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
        <div className={styles.head}>
          <h1 className={styles.title}>{board.name}</h1>
        </div>
        <DeleteBoardButton board={board} onSearch={onSearch} />
      </div>

      <div className={styles.column}>
        <DndProvider backend={HTML5Backend}>
          <Column
            title="To Do"
            cards={data.filter((task) => task.state === "do")}
            moveCard={moveCard}
            onFetch={handlerFetchData}
          >
            <CreateCardButton board={board} onFetch={handlerFetchData} />
          </Column>
          <Column
            title="In Progress"
            cards={data.filter((task) => task.state === "progress")}
            moveCard={moveCard}
            onFetch={handlerFetchData}
          >
            {""}
          </Column>
          <Column
            title="Done"
            cards={data.filter((task) => task.state === "done")}
            moveCard={moveCard}
            onFetch={handlerFetchData}
          >
            {""}
          </Column>
        </DndProvider>
      </div>
    </div>
  );
};

export default Board;
