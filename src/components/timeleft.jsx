import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import React, {useEffect, useState} from "react";

momentDurationFormatSetup(moment);
const TimeLeft = ({sessionLength}) => {
    const [timeLeft, setTimeLeft] = useState(sessionLength); //use hook
    const handleStartStopClick = () => {
        // decrement timeLeft by one every second(1000ms) on click start
        // to do this we'll use the setInterval function
        setInterval(() => {
            setTimeLeft(prevTimeLeft => {
                const newTimeLeft = prevTimeLeft - 1;
                if (newTimeLeft >= 0) {
                    return prevTimeLeft - 1;
                }
                return prevTimeLeft;
            });
        }, 100);
    };
    const formattedTimeLeft = moment
        .duration(timeLeft, "s")
        .format("mm:ss", {trim: false}); //formatted time
    // change timeLeft when sessionLength change
    useEffect(() => {
        setTimeLeft(sessionLength);
    }, [sessionLength]);
    return (
        <div>
            {formattedTimeLeft}
            <button type={"button"} onClick={handleStartStopClick}>
                {"Start"}
            </button>
        </div>
    );
    // MM:SS
    // 25:00
};
export default TimeLeft;
