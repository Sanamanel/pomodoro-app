// /src/components/break.jsx

import moment from "moment";
import React from "react";
import {
    BreakSessionContainer,
    BreakSessionLabel,
    BreakSessionTime,
    PlusMinusButtonContainer,
    PlusMinusButton,
} from "../components/ui/BreakSessionUi";

const Break = ({
    breakLength,
    decrementBreakLengthByOneMinute,
    incrementBreakLengthByOneMinute,
}) => {
    const breakLengthInMinutes = moment.duration(breakLength, "s").asMinutes(); // Here I convert the seconds to minutes !
    return (
        <BreakSessionContainer>
            <BreakSessionLabel id={"break-label"}>{"Break"}</BreakSessionLabel>
            <BreakSessionTime id={"break-length"}>
                {breakLengthInMinutes}
            </BreakSessionTime>
            <PlusMinusButtonContainer>
                <PlusMinusButton
                    type={"button"}
                    id={"break-decrement"}
                    onClick={decrementBreakLengthByOneMinute}>
                    {"-"}
                </PlusMinusButton>
                <PlusMinusButton
                    type={"button"}
                    id={"break-increment"}
                    onClick={incrementBreakLengthByOneMinute}>
                    {"+"}
                </PlusMinusButton>
            </PlusMinusButtonContainer>
        </BreakSessionContainer>
    );
};

export default Break;
