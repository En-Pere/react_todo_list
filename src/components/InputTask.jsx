import React from "react";
import { useState } from "react";

function InputTask({ addTask }) {
  const [newTask, setNewTask] = useState("");

  const saveTarea = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };

  return (
    <form className="main-form">
      <label>Inserta una tarea</label>
      <input
        placeholder="escribe una tarea"
        onChange={(e) => setNewTask(e.target.value)}
      ></input>
      <button onClick={saveTarea}>Agregar Tarea</button>
    </form>
  );
}

export default InputTask;
