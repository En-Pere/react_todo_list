import React from "react";
import { FcPlus } from "react-icons/fc";
import "../Styles.css/InputTask.css";

function InputTask() {
  return (
    <div className="input-area">
      <input className="input-task" placeholder="Insert your task" />
      <FcPlus className="logo-plus" />
    </div>
  );
}

export default InputTask;
