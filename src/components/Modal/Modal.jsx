import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const menuModalRoot = document.querySelector('#root-menuModal');

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div onClick={handleBackdropClick}>
      <div>{children}</div>
    </div>,
    menuModalRoot,
  );
};

export default Modal;