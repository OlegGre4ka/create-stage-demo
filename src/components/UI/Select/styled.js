import styled from "styled-components";
import Select from '@mui/material/Select';


const SelectMui = styled(Select)`
  height: 64px;
  padding: 12px 14px 16px;
  background-color: #ffffff;
  border-bottom: none;
  border: ${({ isBorderError }) => isBorderError ? "2px solid #ff4141" : "2px solid #ecf0f5"};
  border-radius: 4px;
  & > div {
    background-color: #ffffff;
  }
`
// const SelectComponent = styled.select.attrs(props => ({
//   name: props.name,
//   placeholder: props.placeholder,
// }))`
//   font-family: "Rubik"
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 20px;
//   height: 44px;
//   padding: 12px 14px 16px;
//   margin: ${({ margin }) => margin ? margin : "0px"};
//   border: ${({ isBorderError }) => isBorderError ? "2px solid #ff4141" : "2px solid #ecf0f5"};
//   border-radius: 4px;
//   &:focus{
//     outline: none;
//     border: ${({ isBorderError }) => isBorderError ? "2px solid #ff4141" : "2px solid #ecf0f5"};
//   &::placeholder{
//     color: lightgrey;
//     font-size: 16px;
//   }
//   }
// `
export { /*SelectComponent,*/ SelectMui }