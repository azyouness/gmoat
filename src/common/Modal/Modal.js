import React, { useEffect, useRef } from 'react';
import styles from "./Modal.module.scss";

const Modal = ({ open = false, onClose, children }) => {
  const modalWrapperEl = useRef(null);

  const handleBackClick = e => {
    e.preventDefault();
    if(e.target === modalWrapperEl.current) onClose();
  };

  const handleKeyDown = e => {
    if(e.keyCode === 27) onClose();
  };

  const stylesonOpenChange = () => {
    // document.body.style.overflow = open ? 'hidden' : "auto";
    if(open) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown, false);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown, false);
    }
  };

  useEffect(stylesonOpenChange, [open]);

  return (
    <div 
      ref={modalWrapperEl}
      className={`${styles.modal} ${styles[open ? "open" : "close"]}`}
      onClick={handleBackClick}
    >
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default Modal;