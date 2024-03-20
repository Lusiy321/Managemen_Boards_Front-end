import React from "react";
import { useDrop } from "react-dnd";
import Card from "./Card";
import { iCards } from "./Board";
import styles from "@/styles/column.module.css";

export const ItemTypes = {
  CARD: "cards",
};

const Column: React.FC<iCards> = ({
  title,
  cards,
  moveCard,
  children,
  onFetch,
}) => {
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item: any) => {
      moveCard(title, item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div className={styles.columnContainer}>
      <div ref={drop} className={styles.column}>
        <h2 className={styles.title}>{title}</h2>
        {cards.map((task) => (
          <Card
            key={task._id}
            task={task}
            moveCard={moveCard}
            onFetch={onFetch}
          />
        ))}
        {children}
      </div>
    </div>
  );
};

export default Column;
