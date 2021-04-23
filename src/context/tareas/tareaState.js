import React, { useReducer } from "react";

import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

import { TAREAS_PROYECTO, AGREGAR_TAREA } from "../../types";

const TareaState = (props) => {
  //state
  const initialState = {
    tareas: [
      { nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      { nombre: "Elegir Plataformas de pago", estado: false, proyectoId: 3 },
      { nombre: "Elegir Hosting", estado: true, proyectoId: 4 },
      { nombre: "Elegir plataforma", estado: true, proyectoId: 1 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 4 },
      { nombre: "Elegir Plataformas de pago", estado: false, proyectoId: 2 },
      { nombre: "Elegir plataforma", estado: true, proyectoId: 4 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 1 },
      { nombre: "Elegir Plataformas de pago", estado: false, proyectoId: 2 },
      { nombre: "Elegir plataforma", estado: true, proyectoId: 3 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 4 },
      { nombre: "Elegir Plataformas de pago", estado: false, proyectoId: 3 },
    ],
    tareasProyecto: null,
  };

  //reducer
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  //dispatch functions

  //obtener tareas de un proyecto
  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  const agregarTarea = (tarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasProyecto: state.tareasProyecto,
        obtenerTareas,
        agregarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
