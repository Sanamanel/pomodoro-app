import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import React from "react";

momentDurationFormatSetup(moment);
const TimeLeft = ({
    handleStartStopClick,
    handleResetButtonClick,
    startStopButtonLabel,
    timeLeft,
    timerLabel,
}) => {
    const formattedTimeLeft = moment
        .duration(timeLeft, "s")
        .format("mm:ss", {trim: false}); //formatted time

    return (
        <div className={"flex flex-col justify-evenly items-center w-72 h-72 border-solid border-2  border-white rounded-full"}>
            <p className={"text-white text-3xl"} id={"timer-label"}>{timerLabel}</p>
            <p className={"text-white text-7xl clock-font font-bold"}  id={"timer-left"}>{formattedTimeLeft}</p>
            <div className={"grid grid-flow-col gap-2"}>
            <button className={"text-gray-800 font-semibold bg-red-200 px-4 py-2 rounded-lg"} type={"button"} onClick={handleStartStopClick}>
                {startStopButtonLabel}
            </button>
            <button className={"border-2 text-red-200 border-red-200  border-solid px-3 py-2 font-semibold rounded-lg"}
                type={"reset"}
                id={"reset"}
                onClick={handleResetButtonClick}>
                {"Reset"}
            </button>
        </div>
        </div>
    );
    // MM:SS
    // 25:00
};
export default TimeLeft;
