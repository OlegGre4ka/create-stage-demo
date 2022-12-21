import styled, { keyframes } from "styled-components";

const modalTrueOpacity = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`
const modalFalseOpacity = keyframes`
0% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`

const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  min-height: 100 vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(135, 128, 128, 0.9);
  z-index: 999;
  opacity:0;
  animation:  ${({isOpacity}) => isOpacity ? modalTrueOpacity : modalFalseOpacity} .4s 1 linear forwards;

`;

export default ModalWrapper;