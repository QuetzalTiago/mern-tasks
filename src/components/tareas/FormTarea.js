import React, { useContext, useState } from "react";
import proyectoContext from "../../context/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  //context
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const {
    agregarTarea,
    obtenerTareas,
    validarTarea,
    errortarea,
  } = tareasContext;

  //state
  const [tarea, guardarTarea] = useState("");

  // Si no hay proyecto seleccionado
  if (!proyecto) return null;

  //destructuring
  const [proyectoActual] = proyecto;

  //onchange
  const handleChange = (e) => {
    guardarTarea(e.target.value);
  };

  //onsubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    //validar
    if (tarea.trim() === "") {
      validarTarea();
      return;
    }
    //pasar la validacion
    //agregar tarea
    agregarTarea({
      id: Date.now(),
      proyectoId: proyectoActual.id,
      estado: false,
      nombre: tarea,
    });
    obtenerTareas(proyectoActual.id);
    //reiniciar el form
    guardarTarea("");
  };

  return (
    <div className="formulario">
      <form action="" onSubmit={handleSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            value={tarea}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
        {errortarea ? (
          <p className="mensaje error">El nombre de la tarea es obligatorio</p>
        ) : null}
      </form>
    </div>
  );
};

export default FormTarea;
