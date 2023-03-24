import "./App.css";
import InputTask from "./components/InputTask";
import { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  //Todas las tareas
  const [toDoList, setToDoList] = useState([
    { id: 1, taskName: "task1", status: true },
    { id: 2, taskName: "task2", status: true },
  ]);

  //Tareas "variables"
  //const [newTask, setNewTask] = useState([]);
  

  const addTask = (tarea) => {
    let lenght = toDoList.length + 1;
    let newEntry = { id: lenght, taskName: tarea, status: true };
    setToDoList([...toDoList, newEntry]);
  };

  return (
    <div>
      <InputTask addTask={addTask} />
      <TaskList toDoList={toDoList} />
    </div>
  );
}

export default App;
