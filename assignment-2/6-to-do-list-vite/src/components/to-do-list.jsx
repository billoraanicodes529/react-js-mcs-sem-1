import React from "react";
import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;

    setTasks([...tasks, newTask]);
    alert(`Task Added: ${newTask}`);

    setNewTask("");
  };

  const deleteTask = (index) => {
    alert(`Task Deleted: ${tasks[index]}`);
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div
      style={{
        maxWidth: "300px",
        margin: "20px auto",
        textAlign: "center",
      }}
    >
      <h2>To-Do List</h2>
      {/* Input field */}
      <input
        type="text"
        value={newTask}
        placeholder="Enter a Task..."
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      &emsp;
      {/* Add button */}
      <button onClick={addTask}>Add</button>
      {/* Task list */}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ margin: "8px 0" }}>
            {task}
            &emsp;
            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
