import React, { Fragment, useState, useContext } from "react";
import proyectoContext from "../../context/proyectoContext";

const NuevoProyecto = () => {
  // context
  const proyectosContext = useContext(proyectoContext);
  const { formulario, mostrarFormulario, agregarProyecto } = proyectosContext;

  // state
  const [proyecto, guardarProyecto] = useState({
    name: "",
  });

  // destructuring
  const { name } = proyecto;

  // update state
  const handleChange = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  // submit & validation
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      return;
    }
    agregarProyecto(proyecto);
    guardarProyecto({
      name: "",
    });
  };

  // onClick
  const handleClick = () => {
    mostrarFormulario();
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={handleClick}
      >
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form
          action=""
          className="formulario-nuevo-proyecto"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="name"
            value={name}
            onChange={handleChange}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
