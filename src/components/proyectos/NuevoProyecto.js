import React, { Fragment, useState } from "react";
const NuevoProyecto = () => {
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
  };

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>
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
    </Fragment>
  );
};

export default NuevoProyecto;
