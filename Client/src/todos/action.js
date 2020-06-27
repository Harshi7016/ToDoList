export const CREATE_TODO = "CREATE_TODO";
export const createTodo = (todo) => ({
  type: CREATE_TODO,
  payload: {
    todo,
  },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  payload: {
    todo,
  },
});

export const MARK_AS_COMPLETED_TODO = "MARK_AS_COMPLETED_TODO";
export const markAsCompletedTodo = (todo) => ({
  type: MARK_AS_COMPLETED_TODO,
  payload: {
    todo,
  },
});

export const LOAD_TODOS_IN_PROGRESS = "LOAD_TODOS_IN_PROGRESS";
export const loadTodoInProgress = () => ({
  type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_IN_SUCCESS = "LOAD_TODOS_IN_SUCCESS";
export const loadTodoInSuccess = (todos) => ({
  type: LOAD_TODOS_IN_SUCCESS,
  payload: { todos },
});

export const LOAD_TODOS_IN_FAILURE = "LOAD_TODOS_IN_FAILURE";
export const loadTodoInFailure = () => ({
  type: LOAD_TODOS_IN_FAILURE,
});
