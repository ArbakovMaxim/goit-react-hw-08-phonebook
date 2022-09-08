import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, BtnClose, Content, Img } from './Modal.styled';
import close from '../../images/close.png';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Content>
        {children}
        {
          <BtnClose
            onClick={() => {
              onClose();
            }}
          >
            <Img src={close} alt="" />
          </BtnClose>
        }
      </Content>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
