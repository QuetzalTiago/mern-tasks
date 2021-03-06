import {
  AGREGAR_PROYECTO,
  OBTENER_PROYECTOS,
  FORMULARIO_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
} from "../types";

export default (state, action) => {
  //eslint-disable-next-line
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
        proyectos: [action.payload, ...state.proyectos],
        formulario: false,
        formerror: false,
      };
    case VALIDAR_FORMULARIO:
      return {
        ...state,
        formerror: true,
      };
    case PROYECTO_ACTUAL:
      return {
        ...state,
        proyecto: state.proyectos.filter(
          (proyecto) => proyecto.id === action.payload
        ),
      };
    case ELIMINAR_PROYECTO:
      return {
        ...state,
        proyectos: state.proyectos.filter(
          (proyecto) => proyecto.id !== action.payload
        ),
        proyecto: null,
      };
    default:
      return state;
  }
};
