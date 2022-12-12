import { React, useState } from "react";
import { FcPlus } from "react-icons/fc";
import "../Styles.css/InputTask.css";
import arrayOfTasks from "./ArrayOfTasks";

function InputTask() {
  const [text, setText] = useState([]);
  // const [theArray, setTheArray] = useState([]);

  const writeTask = (e) => {
    setText(e.target.value);
    console.log("text es: " + e.target.value);
  };

  const saveTask = (e) => {};

  return (
    <div className="input-area">
      <input
        type="text"
        id="text"
        name="text"
        className="input-task"
        placeholder="Insert your task"
        value={text}
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
