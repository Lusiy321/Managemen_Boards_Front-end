import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./Column";
import styles from "@/styles/card.module.css";
import { iTask } from "./Board";

export interface MoveCard {
  task: iTask;
  index: number;
  id: string;
  moveCard: (title: string, state: iTask) => void;
}

const Card: React.FC<MoveCard> = ({ task, index, id, moveCard }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: task,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div className={styles.card} ref={drag} style={{ opacity }}>
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
