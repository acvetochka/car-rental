import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import { Backdrop, Container, CloseButton } from './Modal.styled';
import { IoCloseOutline } from 'react-icons/io5';

const Modal = ({ isOpen, onClose, children }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscKeyPress = event => {
      if (isOpen && event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    window.addEventListener('keydown', handleEscKeyPress);

    return () => {
      window.removeEventListener('keydown', handleEscKeyPress);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Container
        id="modal-container"
        key="modal"
        initial={
          isMobile
            ? { opacity: 0, x: '-50%', y: 0, scale: 0 }
            : { opacity: 0, x: '-50%', y: '-50%', scale: 0 }
        }
        animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CloseButton onClick={onClose}>
          <IoCloseOutline width={24} height={24} />
        </CloseButton>
        {children}
      </Container>
    </Backdrop>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
