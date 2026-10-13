import React, { useState, useEffect } from "react";

function TrafficLight() {
  const [light, setLight] = useState("green");

  useEffect(() => {
    let timer;

    if (light === "green") {
      timer = setTimeout(() => setLight("red"), 3000); // 3s green
    } else if (light === "red") {
      timer = setTimeout(() => setLight("yellow"), 1000); // 1s yellow
    } else if (light === "yellow") {
      timer = setTimeout(() => setLight("green"), 2000); // 2s red
    }

    return () => clearTimeout(timer);
  }, [light]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Traffic Light</h2>

      <div
        style={{
          width: "100px",
          height: "260px",
          margin: "20px auto",
          background: "#333",
          borderRadius: "20px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            margin: "auto",
            background: light === "red" ? "red" : "#4d0000",
          }}
        />

        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            margin: "auto",
            background: light === "yellow" ? "yellow" : "#4d4d00",
          }}
        />

        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            margin: "auto",
            background: light === "green" ? "limegreen" : "#003300",
          }}
        />
      </div>
    </div>
  );
}

export default TrafficLight;
