import React, { useState } from "react";
import styles from "@/styles/addCard.module.css";
import Modal from "./Modal";
import { iEdit } from "./EditCardButton";

const DeleteCardButton: React.FC<iEdit> = ({ card, onFetch }) => {
  const [showModal, setshowModal] = useState(false);

  const handleDelete = async () => {
    try {
      await fetch(
        `https://managemen-boards.onrender.com/delete-card/${card._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const response = await fetch(
        `https://managemen-boards.onrender.com/cards/${card.dashboard}`
      );
      const data = await response.json();
      onFetch(data);
    } catch (error) {
      console.error("Error updating card state:", error);
    }
    setshowModal(false);
  };
  const handleCard = () => {
    setshowModal(true);
  };

  const handleClose = () => {
    setshowModal(false);
  };
  return (
    <div className={styles.cardBodEdit}>
      <button className={styles.deleteButton} onClick={handleCard}>
        Delete
      </button>

      {showModal && (
        <Modal onClose={() => setshowModal(false)}>
          <div className={styles.modalBody}>
            <div>
              <h2 className={styles.title}>Delete Card</h2>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.button} onClick={handleDelete}>
                Yes
              </button>
              <button className={styles.button} onClick={handleClose}>
                No
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default DeleteCardButton;
