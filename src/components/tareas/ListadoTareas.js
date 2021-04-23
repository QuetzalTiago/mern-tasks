import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectoContext";

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // Si no hay proyecto seleccionado
  if (!proyecto) return <h2>Selecciona un proyecto</h2>;

  //array destructuring
  const [proyectoActual] = proyecto;

  const tareasProyecto = [
    { nombre: "Elegir plataforma", estado: true },
    { nombre: "Elegir Colores", estado: false },
    { nombre: "Elegir Plataformas de pago", estado: false },
    { nombre: "Elegir Hosting", estado: true },
  ];
  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.name}</h2>

      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Eliminar proyecto
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
