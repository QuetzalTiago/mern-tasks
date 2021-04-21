import React, { useState } from "react";
import { Link } from "react-router-dom";

const NuevaCuenta = () => {
  // state
  const [usuario, guardarUsuario] = useState({
    name: "",
    email: "",
    password: "",
    confpass: "",
  });

  // extract variables
  const { name, email, password, confpass } = usuario;

  // update the state
  const handleChange = (e) => {
    guardarUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Obtener Cuenta</h1>

        <form onSubmit={handleSubmit}>
          {/* name */}
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="name"
              placeholder="Tu Nombre"
              onChange={handleChange}
              value={name}
            />
          </div>
          {/* email */}
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              onChange={handleChange}
              value={email}
            />
          </div>
          {/* password */}
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              onChange={handleChange}
              value={password}
            />
          </div>
          {/* confirm password */}
          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar Password</label>
            <input
              type="password"
              id="password"
              name="confpass"
              placeholder="Repite tu Password"
              onChange={handleChange}
              value={confpass}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>

        <Link to={"/nueva-cuenta"} className="enlace-cuenta">
          Volver a Iniciar sesión
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
