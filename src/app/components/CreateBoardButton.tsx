import React, { useState } from 'react';
import Modal from './Modal'; // Предполагается, что у вас есть компонент Modal

const CreateBoardButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [boardName, setBoardName] = useState('');

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setBoardName(''); // Очищаем значение имени доски при закрытии модального окна
  };

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setBoardName(e.target.value);
  };

  const handleCreateBoard = () => {
    // Здесь вы можете выполнить действия по созданию доски с указанным именем
    console.log('Создание доски:', boardName);
    handleCloseModal(); // Закрываем модальное окно после создания доски
  };

  return (
    <>
      <button className="create-board-button" onClick={handleOpenModal}>
        <h2>Create dashboard</h2>
      </button>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <h2>Enter board name</h2>
          <input type="text" value={boardName} onChange={handleInputChange} />
          <button onClick={handleCreateBoard}>Create</button>
        </Modal>
      )}
      <style jsx>{`
    .create-board-button {
      display: block;
      margin: 0 auto;
      padding: 10px 20px;
      font-size: 16px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-bottom: 40px;
    }
    .create-board-button:hover {
      background-color: #0056b3;
    }
  `}</style>
    </>
  );
};

export default CreateBoardButton;