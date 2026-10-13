import { useState } from "react";
import "./bgcolor-on-btn-click.css";

function BackgroundChange() {
  const [bgColor, setBgColor] = useState("white");

  const changeColor = () => {
    setBgColor(bgColor === "lightpink" ? "lightgreen" : "lightpink");
  };

  return (
    <div className="btnClickCSS" style={{ backgroundColor: bgColor }}>
      <h1>Hey Brother! How are you doing!?</h1>

      <button onClick={changeColor}>To Change Color, Click Me!</button>
    </div>
  );
}

export default BackgroundChange;
