import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import React from "react";

momentDurationFormatSetup(moment);
const TimeLeft = ({
    handleStartStopClick,
    startStopButtonLabel,
    timeLeft,
    timerLabel,
}) => {
    const formattedTimeLeft = moment
        .duration(timeLeft, "s")
        .format("mm:ss", {trim: false}); //formatted time

    return (
        <div>
            <p id={"timer-label"}>{timerLabel}</p>
            <p id={"timer-left"}>{formattedTimeLeft}</p>
            <button type={"button"} onClick={handleStartStopClick}>
                {startStopButtonLabel}
            </button>
        </div>
    );
    // MM:SS
    // 25:00
};
export default TimeLeft;
