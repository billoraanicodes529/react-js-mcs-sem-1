import { useState } from "react";

function GenderSelector() {
  const [gender, setGender] = useState("");

  const handleChange = (event) => {
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

      <input
        type="radio"
        name="gender"
        id="Female"
        value="Female"
        checked={gender === "Female"}
        onChange={handleChange}
      />
      <label htmlFor="Female">Female</label>

      <input
        type="radio"
        name="gender"
        id="Other"
        value="Other"
        checked={gender === "Other"}
        onChange={handleChange}
      />
      <label htmlFor="Other">Other</label>

      <br />
      <br />
      <br />
      <hr />
      <br />

      <h1>Selected Gender: {gender}</h1>
    </div>
  );
}

export default GenderSelector;
