import React, { useState } from "react";

function TransferList() {
  const [left, setLeft] = useState(["Apple", "Banana", "Orange", "Mango"]);
  const [right, setRight] = useState([]);

  const moveToRight = (item) => {
    setLeft(left.filter((i) => i !== item));
    setRight([...right, item]);
  };

  const moveToLeft = (item) => {
    setRight(right.filter((i) => i !== item));
    setLeft([...left, item]);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      {/* Left List */}
      <div style={{ margin: "0 20px" }}>
        <h3>Available</h3>
        <ul>
          {left.map((item) => (
            <li key={item}>
              {item}{" "}
              <button onClick={() => moveToRight(item)}>Move Right</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right List */}
      <div style={{ margin: "0 20px" }}>
        <h3>Selected</h3>
        <ul>
          {right.map((item) => (
            <li key={item}>
              <button onClick={() => moveToLeft(item)}>Move Left</button> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TransferList;
