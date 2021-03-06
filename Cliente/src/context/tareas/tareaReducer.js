import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
} from "../../types";

export default (state, action) => {
  //eslint-disable-next-line
  switch (action.type) {
    case TAREAS_PROYECTO:
      return {
        ...state,
        tareasProyecto: state.tareas.filter(
          (tarea) => tarea.proyectoId === action.payload
        ),
        errortarea: false,
      };
    case AGREGAR_TAREA:
      return {
        ...state,
        tareas: [action.payload, ...state.tareas],
        errortarea: false,
      };
    case VALIDAR_TAREA:
      return {
        ...state,
        errortarea: true,
      };
    case ELIMINAR_TAREA:
      return {
        ...state,
        tareas: state.tareas.filter((tarea) => tarea.id !== action.payload),
      };
    case ACTUALIZAR_TAREA:
    case ESTADO_TAREA:
      return {
        ...state,
        tareas: state.tareas.map((tarea) =>
          tarea.id === action.payload.id ? action.payload : tarea
        ),
      };

    case TAREA_ACTUAL:
      return {
        ...state,
        tareaseleccionada: action.payload,
        errortarea: false,
      };

    default:
      return state;
  }
};
