import styled from "styled-components";

const InputComponent = styled.input.attrs(props => ({
    name: props.name,
    type: props.type || "text",
    placeholder: props.placeholder,
  }))`
  font-family: "Rubik"
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  height: 42px;
  padding: 12px 14px 16px;
  margin: ${({margin})=> margin ? margin : "0px"};
  border: ${({isBorderError}) => isBorderError ? "2px solid #ff4141" : "2px solid #ecf0f5"};
  border-radius: 4px;
  &:focus{
    outline: none;
    border: ${({isBorderError}) => isBorderError ? "2px solid #ff4141" : "2px solid #ecf0f5"};
  &::placeholder{
    color: lightgrey;
    font-size: 16px;
  }
  }
`
export default InputComponent