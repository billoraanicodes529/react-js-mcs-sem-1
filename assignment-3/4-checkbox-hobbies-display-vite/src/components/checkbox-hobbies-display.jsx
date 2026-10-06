import React from "react";
import { useState } from "react";

function Hobbies () {
    const [hobbies, setHobbies] = useState([]);

    const handleChange = (e) => {
        if (e.target.checked) {
            setHobbies([...hobbies, e.target.value]);
        } else {
            setHobbies(hobbies.filter((h) => {
                h !== (e.target.value);
            }))
        }
    }

    return (
        <div>
            <h2>Select Hobbies</h2>

            <input 
                type="checkbox"
                id="Reading" 
                value="Reading"
                onChange={handleChange}
            />
            <label htmlFor="Reading">Reading</label>

            <br /><br />

            <input 
                type="checkbox"
                id="Music" 
                value="Music"
                onChange={handleChange}
            />
            <label htmlFor="Music">Music</label>

            <br /><br />

            <input 
                type="checkbox"
                id="Sports" 
                value="Sports"
                onChange={handleChange}
            />
            <label htmlFor="Sports">Sports</label>

            <br /><br />

            <hr />

            <h3>Selected Hobby: {hobbies.join(", ")}</h3>
        </div>
    );
}

export default Hobbies;

