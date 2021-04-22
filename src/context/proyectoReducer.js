import {
  AGREGAR_PROYECTO,
  OBTENER_PROYECTOS,
  FORMULARIO_PROYECTO,
  VALIDAR_FORMULARIO,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true,
      };
    case OBTENER_PROYECTOS:
      return {
        ...state,
        proyectos: action.payload,
      };
    case AGREGAR_PROYECTO:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
        formulario: false,
        formerror: false,
      };
    case VALIDAR_FORMULARIO:
      return {
        ...state,
        formerror: true,
      };
    default:
      return state;
  }
};
