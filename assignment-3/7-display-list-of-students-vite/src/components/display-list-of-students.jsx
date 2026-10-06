import React from "react";

function DisplayStudentList () {
    const students = ["Yunus", "Muzammil", "Umar", "Aditya", "Tushar"];

    return (
        <div>
            <h2>Student List</h2>

            <ul style={{ paddingLeft: 0, margin: 0 }}>
                {students.map((student, index) => (
                    <li key={index} style={{ listStyleType: "none" }}>{student}</li>
                ))}
            </ul>
        </div>
    );
}

export default DisplayStudentList;