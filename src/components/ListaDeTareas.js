import { React, useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../Styles.css/ListaDeTareas.css";

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    console.log("tarea agreagada");
    console.log(tarea);
  };

  return (
    <>
      <TareaFormulario />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => {
          <Tarea
            texto={tarea.texto}
            completada={tarea.completada}
            id={tarea.id}
          />;
        })}
      </div>
    </>
  );
}

export default ListaDeTareas;
