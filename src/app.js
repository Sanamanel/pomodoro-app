// /src/App.js
import React, {useState, useEffect, useRef} from "react";
import Break from "./components/break"; // import Break here
import Session from "./components/session"; //  import Session here
import TimeLeft from "./components/timeleft"; //  import Timer here

function App() {
    const audioElement = useRef(null);
    const [currentSessionType, setCurrentSessionType] = useState("Session"); //Session or Break
    const [intervalId, setIntervalId] = useState(null);
    const [sessionLength, setSessionLength] = useState(60 * 25);
    const [breakLength, setBreakLength] = useState(60 * 5);
    const [timeLeft, setTimeLeft] = useState(sessionLength);
    // change timeLeft when sessionLength change
    useEffect(() => {
        setTimeLeft(sessionLength);
    }, [sessionLength]);

    //listen to timeLeft changes
    // if it is zero we play the audio
    // And change session to break or break to session depends on his state
    useEffect(() => {
        // if timeLeft is zero
        if (timeLeft === 0) {
            audioElement.current.play();
            if (currentSessionType === "Session") {
                setCurrentSessionType("Break");
                setTimeLeft(breakLength);
            } else if (currentSessionType === "Break") {
                setCurrentSessionType("Session");
                setTimeLeft(sessionLength);
            }
        }
    }, [breakLength, currentSessionType, sessionLength, timeLeft]);

    const decrementBreakLengthByOneMinute = () => {
        const newBreakLength = breakLength - 60;
        if (newBreakLength > 0) {
            setBreakLength(newBreakLength);
        }
    };
    const incrementBreakLengthByOneMinute = () => {
        const newBreakLength = breakLength + 60;
        if (newBreakLength <= 60 * 60) {
            setBreakLength(newBreakLength);
        }
    };

    const decrementSessionLengthByOneMinute = () => {
        const newSessionLength = sessionLength - 60;
        if (newSessionLength > 0) {
            setSessionLength(newSessionLength);
        }
    };
    const incrementSessionLengthByOneMinute = () => {
        const newSessionLength = sessionLength + 60;
        if (newSessionLength <= 60 * 60) {
            setSessionLength(sessionLength + 60);
        }
    };
    const isStarted = intervalId !== null;
    const handleStartStopClick = () => {
        if (isStarted) {
            // if we are in start:
            //we want to stop the timer
            // We'll use the clearInterval function (we have to save the id of the setInterval with const NewIntervalId)
            clearInterval(intervalId);
            setIntervalId(null);
        } else {
            // if we are in stop:
            // decrement timeLeft by one every second(1000ms) on click start
            // to do this we'll use the setInterval function
            const newIntervalId = setInterval(() => {
                setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
            }, 1000);
            setIntervalId(newIntervalId);
        }
    };
    const handleResetButtonClick = () => {
        //reset the audio
        audioElement.current.load();
        //clear the timeout interval
        clearInterval(intervalId);
        //Set intervalId null
        setIntervalId(null);
        // set sessionType to "Session"
        setCurrentSessionType("Session");
        //reset the session length to 25 min
        setSessionLength(60 * 25);
        //reset the beak length to 5 min
        setBreakLength(60 * 5);
        //reset yhe timer to 25 min (initial session length)
        setTimeLeft(60 * 25);
    };
    return (
        <div className={"flex flex-col h-screen items-center justify-center"}>
            <div className={"flex w-full justify-around"}>
                <Break
                    breakLength={breakLength}
                    decrementBreakLengthByOneMinute={
                        decrementBreakLengthByOneMinute
                    }
                    incrementBreakLengthByOneMinute={
                        incrementBreakLengthByOneMinute
                    }
                />
                <TimeLeft
                    handleResetButtonClick={handleResetButtonClick}
                    handleStartStopClick={handleStartStopClick}
                    timerLabel={currentSessionType}
                    startStopButtonLabel={isStarted ? "Stop" : "Start"}
                    timeLeft={timeLeft}
                />

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

            <audio id={"beep"} ref={audioElement}>
                <source
                    src={
                        "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
                    }
                    type={"audio/mpeg"}
                />
            </audio>
        </div>
    );
}

export default App;
