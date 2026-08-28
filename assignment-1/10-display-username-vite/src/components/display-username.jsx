import React from "react";
import { useState } from "react";
import "./display-username.css"

function DisplayUserName () {
    const [username, setUserName] = useState("");

    return (
        <div>
            <form>
                <label htmlFor="nameInput">Enter Your Name: </label>
                <input type="text" 
                id="nameInput"
                placeholder="Enter Name Here..."
                value={username}
                onChange={(e) => {
                    setUserName(e.target.value);
                }}
                />
            </form>

            <br /><hr /><br />

            <h1>{username}</h1>
        </div>
    )
}

export default DisplayUserName;