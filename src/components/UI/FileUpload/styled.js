import styled from "styled-components";

const FileUploadInput = styled.input.attrs(props => ({
    name: "file",
    type: "file",
  }))`
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  `
  const FileInputLabel =styled.label`
    width: 150px;
    height: 40px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    font-family: "Rubik";
    font-size: 14px;
    font-weight: 400;
    color: #4245A8;
    margin-top: 16px;
    border: 2px solid #3974f6;
  `
  export {FileUploadInput, FileInputLabel}