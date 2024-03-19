import React from "react";
import styles from "@/styles/modal.module.css";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  // const handleOutsideClick = (e: MouseEvent<HTMLDivElement>) => {
  //   if (e.target === e.currentTarget) {
  //     onClose();
  //   }
  // };
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
