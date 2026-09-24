import React from "react";
import { useState } from "react";

function ToDoList () {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() === "") return;

        setTasks([...tasks, newTask]);
        alert(`Task Added: ${newTask}`);
        
        setNewTask("");
    }

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
        alert(`Task Deleted: ${tasks}`);
    }

    return (
        <div>
            <h2>To-Do List</h2>

            <input 
                type="text" 
                value={newTask}
                placeholder="Enter a Task..."
                onChange={(e) => {
                    setNewTask(e.target.value)
                }}
            />

            <button onClick={addTask}></button>
        </div>
    )
}