import React, { useState } from 'react'
import styles from "@/styles/addCard.module.css";
import Modal from './Modal';

const CreateCardButton = () => {

    const [showModal, setshowModal] = useState(false);

   const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleCreate = () => {    
    setTitle('');
      setDescription('');
      setshowModal(false);
  };
    const handleCard = () => { 
        setshowModal(true);
    }
  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>  
        <button className={styles.editButton} onClick={handleCard}>+</button>       
          </div>
          {showModal && <Modal onClose={() => setshowModal(false)}><div>
      <h2>Create Card</h2>
      <input
        type="text"
        placeholder="Enter title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Enter description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
    </div></Modal>}
    </div>
  )
}

export default CreateCardButton
