import "./App.css";
import InputTask from "./components/InputTask";
import { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  // Todas las tareas
  const [toDoList, setToDoList] = useState([
    { id: 1, taskName: "task1", status: true },
    { id: 2, taskName: "task2", status: true },
  ]);

  // Add new task
  const [newTask, setNewTask] = useState();
  const addTask = (e) => {
    e.preventDefault();
    let lenght = toDoList.length + 1;
    let newEntry = { id: lenght, taskName: newTask, status: true };
    setToDoList([...toDoList, newEntry]);
  };

  // Edit Task
  



  console.log(toDoList);

  return (
    <div>
      <InputTask addTask={addTask} setNewTask={setNewTask} />
      <TaskList toDoList={toDoList} />
    </div>
  );
}

export default App;
