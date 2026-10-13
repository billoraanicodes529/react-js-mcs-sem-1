import { useState, useEffect } from "react";

function StopwatchWidget() {
  const [time, setTime] = useState(0); // time in milliseconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // update every 10ms
      }, 10);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  // Format time (mm:ss:ms)
  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
    const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(
      2,
      "0",
    );

    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2> Stopwatch Widget</h2>

      <h1>{formatTime(time)}</h1>

      <div style={{ marginTop: "20px" }}>
        {!isRunning ? (
          <button onClick={() => setIsRunning(true)}>Start</button>
        ) : (
          <button onClick={() => setIsRunning(false)}>Stop</button>
        )}

        <button onClick={() => setTime(0)} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default StopwatchWidget;
