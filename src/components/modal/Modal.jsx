import ReactDOM from 'react-dom';

import { motion } from 'framer-motion';

import './Modal.scss';

import closeIcon from '../../assets/icon-close.svg';

const Modal = ({ onClose, children }) => {
  const modalVariantsBackground = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.92 },
    exit: { opacity: 0 },
  };
  const modalVariantsContent = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return ReactDOM.createPortal(
    <div className="modal">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariantsBackground}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="modal__background"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit" // Use the exit variant
        variants={modalVariantsContent}
        transition={{ duration: 0.3 }} // Specify opacity transition
        className="modal__content"
      >
        <div className="modal__content__children">{children}</div>
        <div className="modal__content__action">
          <button onClick={onClose} className="modal__content__action__button">
            <img src={closeIcon} alt="Close" />
          </button>
        </div>
      </motion.div>
    </div>,
    document.querySelector('.modal-container')
  );
};

export default Modal;
