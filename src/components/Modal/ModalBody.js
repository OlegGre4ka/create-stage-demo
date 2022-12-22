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
const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-color: white;
  width: 771px;
  height: 663px;
  padding: 24px 32px 40px 32px;
  border-radius: 16px;
  opacity: 0;
  animation:  ${({isOpacity}) => isOpacity ? modalTrueOpacity : modalFalseOpacity} .4s 1 linear forwards;
`;

export default ModalBody;
