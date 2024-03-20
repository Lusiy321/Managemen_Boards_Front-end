import React, { useState } from "react";
import styles from "@/styles/searchBar.module.css";
import Modal from "./Modal";
import { Props } from "./Board";

export interface iBoard {
  _id: string;
  name: string;
}

export interface iSearch {
  onSearch: (data: React.SetStateAction<any>) => void;
}

const GetBoardCardButton: React.FC<iSearch> = ({ onSearch }) => {
  const [showModal, setshowModal] = useState(false);
  const [data, setData] = useState([]);

  const handleGet = async () => {
    setshowModal(true);
    try {
      const response = await fetch(`https://managemen-boards.onrender.com/`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error updating card state:", error);
    }
  };
  async function handleCard(name: string) {
    try {
      const response = await fetch(
        `https://managemen-boards.onrender.com/${name}`
      );
      if (response.ok) {
        const data = await response.json();
        onSearch(data);
        setshowModal(false);
      } else {
        console.error("Board not found");
      }
    } catch (error) {
      console.error("Error searching for board:", error);
    }
  }

  return (
    <div>
      <div>
        <button className={styles.searchButton} onClick={handleGet}>
          All Boards
        </button>
      </div>
      {showModal && (
        <Modal onClose={() => setshowModal(false)}>
          <div className={styles.column}>
            <h2 className={styles.title}>All Dashboards:</h2>
            {data.map((board: iBoard) => (
              <button
                className={styles.searchButton}
                key={board._id}
                type="button"
                onClick={() => handleCard(board.name)}
              >
                {board.name}
              </button>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default GetBoardCardButton;
