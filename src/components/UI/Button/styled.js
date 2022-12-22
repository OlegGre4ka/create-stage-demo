import styled from "styled-components";

const BtnStyled = styled.button.attrs(props => ({
  type: props.type,
  disabled: props.disabled
}))`
  position: relative;
  font-family: 'Rubik';
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  width: ${props => props.width ? props.width : "150px"};
  height: ${props => props.height ? props.height : "40px"};
  padding: ${({padding}) => padding ? padding : ""};
  color: ${props => props.color ? props.color : "#ffffff"};
  border: ${({border}) => border ? border : "1px solid #f2f4f5"};
  border-radius: 30px;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : "#4ec970"}; 
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  opacity:  ${props => props.disabled ? 0.5 : 1};

  &:hover{
    opacity: 0.7;
    color: ${({hoverColor}) => hoverColor ? hoverColor : "#ffffff"};
    background-color: ${({hooverBackgroundColor}) => hooverBackgroundColor ? hooverBackgroundColor : "#4ec975"}; 
  }
`
export default BtnStyled;
