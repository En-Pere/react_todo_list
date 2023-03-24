import React from "react";

function InputTask({ addTask, setNewTask }) {
  return (
    <form className="main-form">
      <label>Inserta una tarea</label>
      <input
        placeholder="escribe una tarea"
        onChange={(e) => setNewTask(e.target.value)}
      ></input>
      <button onClick={addTask}>Agregar Tarea</button>
    </form>
  );
}

export default InputTask;
