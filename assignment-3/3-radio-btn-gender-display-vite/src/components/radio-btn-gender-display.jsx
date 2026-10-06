import React, { useState } from "react";

function GenderSelector () {
    const [gender, setGender] = useState("");

    const handleChange = () => {
        setGender(event.target.value);
    };

    return (
        <div>
            <h2>Select Your Gender</h2>

            <input 
                type="radio" 
                name="gender" 
                id="Male"
                value="Male"  
                checked={gender === "Male"}
                onChange={handleChange}
            />
            <label htmlFor="Male">Male</label>

            <br /><br />

            <input 
                type="radio" 
                name="gender" 
                id="Female"
                value="Female"  
                checked={gender === "Female"}
                onChange={handleChange}
            />
            <label htmlFor="Female">Female</label>

            <br /><br />

            <input 
                type="radio" 
                name="gender" 
                id="Other"
                value="Other"  
                checked={gender === "Other"}
                onChange={handleChange}
            />
            <label htmlFor="Other">Other</label>

            <br /><hr /><br />

            <h3>Selected Gender: {gender}</h3>
        </div>
    );
}

export default GenderSelector;