import React, { useContext } from "react";
import proyectoContext from "../../context/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {
  //context
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  //obtener la funcion del context
  const tareasContext = useContext(tareaContext);
  const { obtenerTareas } = tareasContext;

  //agregar proyecto actual
  const seleccionarProyecto = (id) => {
    proyectoActual(id); // fijar un proyecto actual
    obtenerTareas(id); //filtrar tareas
  };
  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => {
          seleccionarProyecto(proyecto.id);
        }}
      >
        {proyecto.name}
      </button>
    </li>
  );
};

export default Proyecto;
