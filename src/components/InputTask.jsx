import React from "react";
import { useState } from "react";

function InputTask({ createList }) {
  const [tarea, setTarea] = useState();

  const saveTarea = (e) => {
    e.preventDefault();
    console.log(tarea);
    createList(tarea);
  };

  return (
    <form className="main-form">
      <label>Inserta una tarea</label>
      <input
        placeholder="escribe una tarea"
        onChange={(e) => setTarea(e.target.value)}
      ></input>
      <button onClick={saveTarea}>Agregar Tarea</button>
    </form>
  );
}

export default InputTask;
