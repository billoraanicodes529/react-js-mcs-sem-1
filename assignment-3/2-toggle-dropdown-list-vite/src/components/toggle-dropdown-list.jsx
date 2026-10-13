import { useState } from "react";

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("React.js");
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Select a Technology: </h2>

      <select value={selectedOption} onChange={handleChange}>
        <option value="React.js" selected>
          React.js
        </option>
        <option value="AngularJS">AngularJS</option>
        <option value="Next.js">Next.js</option>
        <option value="Node.js">Node.js</option>
      </select>
      <h3>The Selected Frontend Language is: {selectedOption}</h3>
    </div>
  );
}

export default Dropdown;
