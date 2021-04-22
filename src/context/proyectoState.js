import React, { useReducer } from "react";

import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
  OBTENER_PROYECTOS,
  FORMULARIO_PROYECTO,
  AGREGAR_PROYECTO,
} from "../types/";

const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, name: "Tienda Virtual" },
    { id: 2, name: "Intranet" },
    { id: 3, name: "Diseño de sitio web" },
    { id: 4, name: "MERN" },
  ];
  const initialState = {
    proyectos: [],
    formulario: false,
  };

  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  //Serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  const agregarProyecto = (proyecto) => {
    proyecto.id = Date.now();
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        obtenerProyectos,
        mostrarFormulario,
        agregarProyecto,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
