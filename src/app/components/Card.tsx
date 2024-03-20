import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./Column";
import styles from "@/styles/card.module.css";
import { iTask } from "./Board";
import EditCardButton from "./EditCardButton";
import DeleteCardButton from "./DeleteCardButton";

export interface MoveCard {
  task: iTask;
  moveCard: (title: string, state: iTask) => void;
  onFetch: (data: React.SetStateAction<any>) => void;
}

const Card: React.FC<MoveCard> = ({ task, onFetch }) => {
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
          <EditCardButton card={task} onFetch={onFetch} />
          <DeleteCardButton card={task} onFetch={onFetch} />
        </div>
      </div>
    </div>
  );
};

export default Card;
