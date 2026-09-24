import { useState } from "react";
import { useEffect } from "react";

function StopwatchWidget () {
    const [time, setTime] = useState(0);
    const[isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;

        if (isRunning) {
            timer = setInterval(() => {
                setTime((prevTime) => {
                    prevTime + 10;
                })
            }, 10)
        } else {
            clearInterval(timer);
        }
        return () => {
            clearInterval(timer);
        }
    }, [isRunning]);

    const  formatTime = (time) => {
        const minutes = String(Math.floor(time / 60000)).padStart(2, "0");
        const seconds = String(Math.floor(time % 60000 / 1000)).padStart(2, "0");
        const milliSeconds = String(Math.floor((time % 1000) / 10)).padStart(2, "0");

        return `${minutes}: ${seconds}: ${milliSeconds}`;
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Stopwatch Widget</h2>
            <h1>{formatTime(time)}</h1>
            <div style={{ marginTop: "20px" }}>
                <button onClick={() => {
                    setIsRunning(true)
                }}>Start</button>&emsp;

                <button onClick={() => {
                    setIsRunning(false)
                }}>Stop</button>&nbsp;

                <button onClick={() => {
                    setTime(0)
                }} style={{ marginLeft: "10px" }}>Reset</button>
            </div>
        </div>
    );
}

export default StopwatchWidget;