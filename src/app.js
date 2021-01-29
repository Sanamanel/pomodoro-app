// /src/App.js
import React, {useState} from "react";
import Break from "./components/break"; // 👈 import Break here
import TimeLeft from "./components/timeleft"; // 👈 import Timer here
import Session from "./components/session"; // 👈 import Session here

function App() {
    const [sessionLength, setsessionLength] = useState(60 * 25);
    const [breakLengthInSeconds, setBreakLengthInSeconds] = useState(60 * 5);

    const decrementBreakLengthByOneMinute = () => {
        const newBreakLengthInSeconds = breakLengthInSeconds - 60;
        if (newBreakLengthInSeconds < 0) {
            setBreakLengthInSeconds(0); //not under 0
        } else {
            setBreakLengthInSeconds(newBreakLengthInSeconds);
        }
    };
    const incrementBreakLengthByOneMinute = () =>
        setBreakLengthInSeconds(breakLengthInSeconds + 60);

    const decrementSessionLengthByOneMinute = () => {
        const newsessionLength = sessionLength - 60;
        if (newsessionLength < 0) {
            setsessionLength(0);
        } else {
            setsessionLength(newsessionLength);
        }
    };
    const incrementSessionLengthByOneMinute = () =>
        setsessionLength(sessionLength + 60);
    return (
        <div className={"App"}>
            <Break
                breakLengthInSeconds={breakLengthInSeconds}
                decrementBreakLengthByOneMinute={
                    decrementBreakLengthByOneMinute
                }
                incrementBreakLengthByOneMinute={
                    incrementBreakLengthByOneMinute
                }
            />
            <TimeLeft sessionLength={sessionLength} />
            <Session
                sessionLength={sessionLength}
                decrementSessionLengthByOneMinute={
                    decrementSessionLengthByOneMinute
                }
                incrementSessionLengthByOneMinute={
                    incrementSessionLengthByOneMinute
                }
            />
        </div>
    );
}

export default App;
