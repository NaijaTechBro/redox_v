import React,{useEffect} from 'react'
import './Modal.css'

const Modal = ({ isOpen, onClose, children, identifier, contentFn }) => {
  if (!isOpen) return null;
  
  const handleOutsideClick = (event) => {
    if (!event.target === document.querySelector('.admin--modal') || !event.target.closest('.admin--modal')) {
      onClose();
    }
  };
  
  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick, { capture: true });
    return () => document.body.removeEventListener('click', handleOutsideClick, { capture: true });
  }, [isOpen]);
  

  return (
    <div className="admin--modal" onClick={handleOutsideClick}>
      <div className="admin--modal--content">
        {contentFn && contentFn()}
      </div>
    </div>
  );
};

export default Modal;