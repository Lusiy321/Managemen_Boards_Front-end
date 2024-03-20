import React, { useState } from "react";
import styles from "@/styles/addCard.module.css";
import Modal from "./Modal";
import { iTask } from "./Board";
export interface iEdit {
  card: iTask;
  onFetch: (data: React.SetStateAction<any>) => void;
}
const EditCardButton: React.FC<iEdit> = ({ card, onFetch }) => {
  const [showModal, setshowModal] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleEdit = async () => {
    try {
      await fetch(
        `https://managemen-boards.onrender.com/update-card/${card._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            description: description,
          }),
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
    setTitle("");
    setDescription("");
    setshowModal(false);
  };
  const handleCard = () => {
    setTitle(card.title);
    setDescription(card.description);
    setshowModal(true);
  };
  return (
    <div className={styles.cardBodEdit}>
      <button className={styles.editCardButton} onClick={handleCard}>
        Edit
      </button>

      {showModal && (
        <Modal onClose={() => setshowModal(false)}>
          <div className={styles.modalBody}>
            <h2 className={styles.title}>Edit Card</h2>
            <div>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <textarea
                className={styles.textArea}
                placeholder="Enter description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.button} onClick={handleEdit}>
                Edit
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default EditCardButton;
