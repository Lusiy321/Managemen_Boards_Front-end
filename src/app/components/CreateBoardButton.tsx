import React, { useState } from "react";
import Modal from "./Modal";
import styles from "@/styles/createBoardButton.module.css";
import { SearchBarProps } from "./SearchBar";
import { ToastContainer, toast } from "react-toastify";

const CreateBoardButton: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [showModal, setShowModal] = useState(false);
  const [boardName, setBoardName] = useState("");

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setBoardName("");
  };

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setBoardName(e.target.value);
  };

  const handleCreateBoard = async () => {
    try {
      const response = await fetch(
        `https://managemen-boards.onrender.com/create-board/${boardName}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        onSearch(data);
      } else {
        toast.error("Board name exist");
        console.error("Board not found");
      }
    } catch (error) {
      console.error("Error searching for board:", error);
    }
    handleCloseModal();
  };

  return (
    <>
      <ToastContainer />
      <button className={styles.createBoardButton} onClick={handleOpenModal}>
        <h2>Create dashboard</h2>
      </button>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <h2 className={styles.title}>Enter board name</h2>
          <input
            className={styles.input}
            type="text"
            value={boardName}
            onChange={handleInputChange}
          />
          <button className={styles.button} onClick={handleCreateBoard}>
            Create
          </button>
        </Modal>
      )}
    </>
  );
};

export default CreateBoardButton;
