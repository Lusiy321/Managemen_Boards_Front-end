import React, { useState } from "react";
import styles from "@/styles/addCard.module.css";
import Modal from "./Modal";
import { ToastContainer, toast } from "react-toastify";

export interface iData {
  board: { _id: string; name: string };
  onFetch: (data: React.SetStateAction<any>) => void;
}
const CreateCardButton: React.FC<iData> = ({ board, onFetch }) => {
  const [showModal, setshowModal] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = async () => {
    try {
      await fetch(
        `https://managemen-boards.onrender.com/create-card/${title}/${description}/${board._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const response = await fetch(
        `https://managemen-boards.onrender.com/cards/${board._id}`
      );
      const data = await response.json();
      onFetch(data);
    } catch (error) {
      toast.error("Card name exists");
      console.error("Error updating card state:", error);
    }
    setTitle("");
    setDescription("");
    setshowModal(false);
  };
  const handleCard = () => {
    setshowModal(true);
  };
  return (
    <div className={styles.card}>
      <ToastContainer />
      <div className={styles.cardBody}>
        <button className={styles.editButton} onClick={handleCard}>
          +
        </button>
      </div>
      {showModal && (
        <Modal onClose={() => setshowModal(false)}>
          <div className={styles.modalBody}>
            <h2 className={styles.title}>Create Card</h2>
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
              <button className={styles.button} onClick={handleCreate}>
                Create
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CreateCardButton;
