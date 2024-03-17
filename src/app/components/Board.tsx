import React, { useEffect, useState } from 'react';
import Card from './Card';
import CreateCardButton from './CreateCardButton';

export interface iTask  {
    _id: string;
    title: string;
    description: string;
    state: string;
}

export interface Props {
    boardId: string;
}

const Board: React.FC<Props> = ({ boardId }) => {
    
    const [tasks, setTasks] = useState<iTask[]>([]);
    useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://managemen-boards.onrender.com/cards/${boardId}`);
        const data = await response.json();        
          setTasks(data);          
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
    return (
    <div className="container">
      <div className="column">
        <h2>To Do</h2>
        {tasks.filter(task => task.state === 'do').map(task => (
          <Card key={task._id} task={task} />
        ))}
        <CreateCardButton />
      </div>
      <div className="column">
        <h2>In Progress</h2>
        {tasks.filter(task => task.state === 'progress').map(task => (
          <Card key={task._id} task={task} />
        ))}
      </div>
      <div className="column">
        <h2>Done</h2>
        {tasks.filter(task => task.state === 'done').map(task => (
          <Card key={task._id} task={task} />
        ))}
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
        }

        h2 {
          font-size: 18px;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default Board;
