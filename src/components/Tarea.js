import React from "react";
import "../Styles.css/Tarea.css";
import { FcFullTrash } from "react-icons/fc";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className="tarea-icono" onClick={() => eliminarTarea(id)}>
        <FcFullTrash className="icono-eliminar" />
      </div>
    </div>
  );
}

export default Tarea;
