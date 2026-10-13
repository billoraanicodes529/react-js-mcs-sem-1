import { useState } from "react";

function ToggleButton() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={toggleText}>
        {isVisible ? "Hide Text" : "Show Text"}
      </button>

      {isVisible && <h2>Where there is a will there is a Way</h2>}
    </div>
  );
}

export default ToggleButton;
