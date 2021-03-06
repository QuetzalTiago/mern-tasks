import React, { useContext } from "react";
import proyectoContext from "../../context/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Tarea = ({ tarea }) => {
  const tareasContext = useContext(tareaContext);
  const {
    eliminarTarea,
    obtenerTareas,
    estadoTarea,
    guardarTareaActual,
  } = tareasContext;
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;
  const [proyectoActual] = proyecto;

  const handleDelete = (id) => {
    eliminarTarea(id);
    obtenerTareas(proyectoActual.id);
  };

  //cambiar estado
  const handleState = (tarea) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    estadoTarea(tarea);
  };

  //editar tarea
  const handleEdit = (tarea) => {
    guardarTareaActual(tarea);
  };

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button
            type="button"
            className="completo"
            onClick={() => {
              handleState(tarea);
            }}
          >
            Completo
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => {
              handleState(tarea);
            }}
          >
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => {
            handleEdit(tarea);
          }}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => {
            handleDelete(tarea.id);
          }}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
