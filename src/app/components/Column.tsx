import React, { Children } from "react";
import { useDrop } from "react-dnd";
import Card from "./Card";
import { iCards } from "./Board";
import CreateCardButton from "./CreateCardButton";

export const ItemTypes = {
  CARD: "task",
};

const Column: React.FC<iCards> = ({ title, cards, moveCard, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item: any, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = cards.length;
      const state = item.state;
      moveCard(dragIndex, hoverIndex, state);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div className="container">
      <div ref={drop} className="column">
        <h2>{title}</h2>
        {cards.map((task, index) => (
          <Card
            key={task._id}
            id={task._id}
            task={task}
            index={index}
            moveCard={moveCard}
          />
        ))}
        {children}
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin: 0 auto;
          max-width: 1200px;
        }

        .column {
          background-color: #f0f0f0;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 10px;
          margin: 20px;
          width: 360px;
        }

        h2 {
          font-size: 18px;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default Column;
