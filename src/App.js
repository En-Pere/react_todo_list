import "./App.css";
import InputTask from "./components/InputTask";
import { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [tarealist, setTarealist] = useState([]);

  const createList = (task) => {
    setTarealist([...tarealist, task]);
  };

  return (
    <div>
      <InputTask createList={createList} />
      <TaskList tarealist={tarealist} />
    </div>
  );
}

export default App;
