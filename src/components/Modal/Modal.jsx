import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Backdrop, Container, CloseButton } from './Modal.styled';
import { IoCloseOutline } from 'react-icons/io5';

const Modal = ({ isOpen, onClose, children }) => {
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
      <Container id="modal-container">
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
