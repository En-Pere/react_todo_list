import { React, useState } from "react";
import { FcPlus } from "react-icons/fc";
import "../Styles.css/InputTask.css";

function InputTask() {
  const [text, setText] = useState("");

  const writeTask = (e) => {
    setText(e.target.value);
    console.log("text es: " + e.target.value);
  };

  const saveTask = (e) => {
    //e.preventDefault();
    const newTask = {
      id: Math.random(),
      text: text,
      completed: true,
    };

    console.log(newTask);
  };

  return (
    <div className="input-area">
      <input
        type="text"
        id="text"
        name="text"
        className="input-task"
        placeholder="Insert your task"
        onChange={writeTask}
      />
      <button onClick={saveTask}>
        Add task
        <FcPlus className="logo-plus" />
      </button>
    </div>
  );
}

export default InputTask;
