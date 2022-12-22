import React from "react";
import BtnStyled from "./styled.js";

const Button = ({ children, clickHandler, disabled, type,
     width, height, color, backgroundColor, hoverBackgroundColor, border, padding, hoverColor, hooverBackgroundColor }) => {   
    return (<BtnStyled
        onClick={clickHandler}
        disabled={disabled}
        type={type}
        width={width}
        height={height}
        color={color}
        backgroundColor={backgroundColor}
        hoverBackgroundColor={hoverBackgroundColor}
        border={border}
        padding={padding}
        hoverColor={hoverColor}
        hooverBackgroundColor={hooverBackgroundColor}
    >{children}</BtnStyled>)
}
export default Button