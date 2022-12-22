import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

import { FlexBox, Text } from "./../shared-styled";
import { Circle, Line } from "./styled";

const StepSlider = ({step}) => {
    // const { step } = useSelector((state) => (state.steps));
    const [color2, setColor2] = useState("#aab4bd");
    const [color3, setColor3] = useState("#aab4bd");

    const [backgroundColor2, setBackgroundColor2] = useState("#ecf0f5");
    const [backgroundColor3, setBackgroundColor3] = useState("#ecf0f5");

    const [lineColor1, setlineColor1] = useState("#4ec970");
    const [lineColor2, setlineColor2] = useState("#4ec970");

    useEffect(
        () => {
            setCircleColors(step);
        }, [step]
    )
    const setCircleColors = (step) => {
        switch (step) {
            case 1:
                setColor2("#aab4bd");
                setColor3("#aab4bd");
                setBackgroundColor2("#ecf0f5");
                setBackgroundColor3("#ecf0f5");
                setlineColor1("#ecf0f5");
                setlineColor2("#ecf0f5");
                break;
            case 2:
                setColor2("#ffffff");
                setColor3("#aab4bd");
                setBackgroundColor2("#4ec970")
                setBackgroundColor3("#ecf0f5");
                setlineColor1("#4ec970");
                setlineColor2("#ecf0f5");
                break;

            case 3:
                setColor2("#ffffff");
                setColor3("#ffffff");
                setBackgroundColor2("#4ec970")
                setBackgroundColor3("#4ec970");
                setlineColor1("#4ec970");
                setlineColor2("#4ec970");
                break;

            default:
                setColor2("#aab4bd");
                setColor3("#aab4bd");
                setBackgroundColor2("#ecf0f5");
                setBackgroundColor3("#ecf0f5");
                setlineColor1("#ecf0f5");
                setlineColor2("#ecf0f5");
                break;
        }
    }
    return (
        <FlexBox justifyContent="space-between" alignItems="center" margin="24px 0 0 0" width="670px">
            <FlexBox justifyContent="center" alignItems="center" margin="0 11px 0 0">
                    <Circle>1</Circle> <Text margin="0 0 0 10px">Basic  Configuration</Text>
            </FlexBox>
            <Line backgroundColor={lineColor1} />
            <FlexBox justifyContent="center" alignItems="center">
                <Circle backgroundColor={backgroundColor2} color={color2}>2</Circle> <Text margin="0 0 0 10px">Team / Votes</Text>
            </FlexBox>
            <Line backgroundColor={lineColor2} />
            <FlexBox justifyContent="center" alignItems="center" margin="0 0 0 0">
                <Circle backgroundColor={backgroundColor3} color={color3}>3</Circle> <Text margin="0 0 0 10px">Feedback</Text>
            </FlexBox>
        </FlexBox>
    )
}
export default StepSlider