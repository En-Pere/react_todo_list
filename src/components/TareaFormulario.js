import React from "react";
import "../Styles.css/TareaFormulario.css";

function TareaFormulario(props) {
  const [iput, setInput] = useState("");

  const manejarCambio = (e) => {
    console.log("escribiendo..");
  };

  const manejarEnvio = (e) => {
    const tareaNueva = {
      id: "332",
      texto: "dfsad",
    };
  };

  return (
    <form className="tarea-formulario">
      <input
        className="tarea-input"
        type="text"
        placeholder="inserta una tarea"
        name="texto"
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}

export default TareaFormulario;
