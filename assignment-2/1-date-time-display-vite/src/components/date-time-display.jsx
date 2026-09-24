import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function DateTimeDisplay() {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, [])

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h1>Current Date & Time</h1>
            <h2>Date: {dateTime.toLocaleDateString()}</h2>
            <h2>Time: {dateTime.toLocaleTimeString()}</h2>
        </div>
    );
}

export default DateTimeDisplay;