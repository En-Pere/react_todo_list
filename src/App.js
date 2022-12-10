import "./App.css";
import InputTask from "./components/InputTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <div className="title-main">
        <h1>To Do List</h1>
      </div>
      <InputTask />
      <TaskList />
    </div>
  );
}

export default App;
