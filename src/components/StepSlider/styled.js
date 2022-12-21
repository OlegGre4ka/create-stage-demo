import styled from "styled-components";

const Circle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  font-family: "Rubik";
  font-size: 18px;
  border-radius: 50%;
  color: ${({color}) => color ? color : "#ffffff"}; 
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : "#4ec970"}; 
`;

const Line = styled.div`
  width: 32px;
  height: 4px;
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : "#ecf0f5"}; 
`
export { Circle, Line }
