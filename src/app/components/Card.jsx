import React from "react";
import styles from "@/styles/card.module.css";

const Card = ({ task }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <div className={styles.buttons}>
          <button className={styles.editButton}>Edit</button>
          <button className={styles.deleteButton}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
