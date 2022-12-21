import React from 'react';
import { FlexBox, Text } from "./../shared-styled";
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
  children
}) => {

  return (
    <ModalWrapper isOpacity={isOpacity}>
      {/* <ModalWindowHeader width={width} > */}

      {/* </ModalWindowHeader>*/}
      <ModalBody isOpacity={isOpacity}>
        <FlexBox justifyContent="flex-end">
          <Text fontSize="12px" cursor="pointer" onClick={closeModalHandler}>
            CLOSE
          </Text>
        </FlexBox>
        <FlexBox>
          <Text fontSize="24px" fontWeight={600}>{title}</Text>
        </FlexBox>
        {children}
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
