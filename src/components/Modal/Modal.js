import './Modal.css'; 

import AboutMe from "../Modal/AboutMe"
import closeImage from "./img/icon-close.png"

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; 

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
            <img className='icon-close' src={closeImage} alt="close"/>
        </button>
        <AboutMe />
      </div>
    </div>
  );
};

export default Modal;