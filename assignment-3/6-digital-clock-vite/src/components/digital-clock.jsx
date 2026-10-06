import React from "react";
import { useState } from "react";
import { useEffect } from "react";


function DigitalClock () {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h2>Digital Clock</h2>
            <h1>{time.toLocaleTimeString()}</h1>
        </div>
    )
}

export default DigitalClock;