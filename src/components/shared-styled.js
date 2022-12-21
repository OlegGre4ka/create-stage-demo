import styled  from 'styled-components';

const FlexBox = styled.div`
  display: flex;
  flex-shrink: 10;
  justify-content ${ ({justifyContent})=> justifyContent ? justifyContent : null};
  flex-direction: ${({flexDirection}) => flexDirection ? flexDirection : null};
  align-items: ${({alignItems}) => alignItems ? alignItems : null};
  width: ${({width}) => width ? width : "100%"};
  max-width: ${({maxWidth}) => maxWidth ? maxWidth : ""};
  height: ${({height}) => height ? height : ""};
  margin: ${({margin}) => margin ? margin : ""};
  padding: ${({padding}) => padding ? padding : ""};
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : ""};
  border-radius: ${({borderRadius}) => borderRadius ? borderRadius : ""};
  box-sizing: border-box;
`
const Text = styled.span`
  font-family: "Rubik";
  font-size: ${({fontSize}) => fontSize ? fontSize : "16px"};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : "400"};
  line-height: 20px;
  color: ${({color}) => color ? color : ""};
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : ""};
  margin: ${({margin}) => margin ? margin : "0px"};
  padding:  ${({padding}) => padding ? padding : ""};
  border-radius:  ${({borderRadius}) => borderRadius ? borderRadius : ""};

  &:hover{
    cursor: ${({cursor})=> cursor && cursor}
  }
`
export {FlexBox, Text}