import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_AS_COMPLETED_TODO,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_IN_SUCCESS,
  LOAD_TODOS_IN_FAILURE,
} from "./action";

const initialState = { isLoading: false, data: [] };

export const todos = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return {
        ...state,
        data: state.data.concat(todo),
      };
    }
    case MARK_AS_COMPLETED_TODO: {
      const { todo: updateTodo } = payload;

      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo.id === updateTodo.id) {
            return updateTodo;
          }
          return todo;
        }),
      };
    }
    case REMOVE_TODO: {
      const { todo: todoToRemove } = payload;

      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== todoToRemove.id),
      };
    }
    case LOAD_TODOS_IN_SUCCESS: {
      const { todos } = payload;

      return {
        ...state,
        data: todos,
        isLoading: false,
      };
    }
    case LOAD_TODOS_IN_PROGRESS: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case LOAD_TODOS_IN_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};
