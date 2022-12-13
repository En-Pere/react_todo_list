import "./App.css";
import faviconLogo from "./favicon.ico";
import ListaDeTareas from "./components/ListaDeTareas";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="my-logo-container">
        <img src={faviconLogo} className="my-logo" alt="mylogo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>To Do List</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
