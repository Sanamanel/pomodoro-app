// /src/components/Session.jsx
import moment from "moment";

import React from "react";
import {
    BreakSessionContainer,
    BreakSessionLabel,
    BreakSessionTime,
    PlusMinusButtonContainer,
    PlusMinusButton,
} from "../components/ui/BreakSessionUi";

const Session = ({
    sessionLength,
    decrementSessionLengthByOneMinute,
    incrementSessionLengthByOneMinute,
}) => {
    const sessionLengthInMinutes = moment
        .duration(sessionLength, "s")
        .minutes(); // Here I convert the seconds to minutes !
    return (
        <BreakSessionContainer>
            <BreakSessionLabel id={"session-label"}>
                {"Session"}
            </BreakSessionLabel>
            <BreakSessionTime id={"session-length"}>
                {sessionLengthInMinutes}
            </BreakSessionTime>
            <PlusMinusButtonContainer>
                <PlusMinusButton
                    type={"button"}
                    id={"session-decrement"}
                    onClick={decrementSessionLengthByOneMinute}>
                    {"-"}
                </PlusMinusButton>
                <PlusMinusButton
                    type={"button"}
                    id={"session-increment"}
                    onClick={incrementSessionLengthByOneMinute}>
                    {"+"}
                </PlusMinusButton>
            </PlusMinusButtonContainer>
        </BreakSessionContainer>
    );
};

export default Session;
