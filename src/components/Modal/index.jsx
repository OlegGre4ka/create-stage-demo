import React from 'react';
// import PropTypes from 'prop-types';
import ModalWrapper from './ModalWrapper';
// import ModalWindowHeader from './ModalWindowHeader';
import ModalBody from './ModalBody';

const Modal = ({
  width,
  isOpacity,
//   mediaWidth,
  title,
  closeModalHandler,
  content,
}) => {

  return (
    <ModalWrapper isOpacity={isOpacity}>
      {/* <ModalWindowHeader width={width} > */}
   
      {/* </ModalWindowHeader>*/}
      <ModalBody isOpacity={isOpacity}> 
      <h4>{title}</h4>
        <div onClick={closeModalHandler}>
            CLOSE
        </div>
        {content}
      </ModalBody>
    </ModalWrapper>
  );
};
// ModalWindow.displayName = 'ModalWindow';
// ModalWindow.propTypes = {
//   closeModalHandler: PropTypes.func,
//   title: PropTypes.string,
//   content: PropTypes.element,
//   width: PropTypes.string,
//   mediaWidth: PropTypes.string,
// };
export default Modal;
