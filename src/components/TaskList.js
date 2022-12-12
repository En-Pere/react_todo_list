import React from "react";
import { FcFullTrash, FcCheckmark, FcEditImage } from "react-icons/fc";
import "../Styles.css/TaskList.css";

function TaskList() {
  return (
    <div className="task-list-main">
      <p>Aqui la 1era tarea</p>
      <FcCheckmark />
      <FcEditImage />
      <FcFullTrash />
    </div>
  );
}

export default TaskList;
