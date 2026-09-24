import React from "react";
import { useState } from "react";

function Dropdown () {
    const [selectedOption, setSelectedOption] = useState("React");
    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    }
    
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Select a Technology</h2>

            <select value={selectedOption} onChange={handleChange}>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Django">Django</option>
                <option value="NodeJS">NodeJS</option>
            </select>
            <h3>The Selected Frontend Language is: {selectedOption}</h3>
        </div>
    );
}

export default Dropdown;