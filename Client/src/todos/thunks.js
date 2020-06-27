import {
  loadTodoInProgress,
  loadTodoInSuccess,
  loadTodoInFailure,
  createTodo,
  removeTodo,
  markAsCompletedTodo,
} from './action';
export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodoInProgress());
    const response = await fetch('http://localhost:8080/todos');
    const todos = await response.json();
    dispatch(loadTodoInSuccess(todos));
  } catch (e) {
    dispatch(loadTodoInFailure());
    dispatch(displayFailureAlert(e));
  }
};

export const addTodoRequest = (text) => async (dispatch) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch('http://localhost:8080/todos', {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'post',
      body,
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (e) {
    dispatch(loadTodoInFailure());
    dispatch(displayFailureAlert(e));
  }
};

export const removeTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: 'delete',
    });
    const removedTodo = await response.json();
    dispatch(removeTodo(removedTodo));
  } catch (e) {
    dispatch(loadTodoInFailure());
    dispatch(displayFailureAlert(e));
  }
};

export const markAsCompletedRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:8080/todos/${id}/completed`,
      {
        method: 'post',
      }
    );
    const updateTodo = await response.json();
    dispatch(markAsCompletedTodo(updateTodo));
  } catch (e) {
    dispatch(loadTodoInFailure());
    dispatch(displayFailureAlert(e));
  }
};
export const displayFailureAlert = (text) => () => {
  //alert(`The data is not loaded <h1>404 Not Found</h1> ${text}`);
};

export const displayAlert = (text) => () => {
  // alert(`The data loaded is ${text}`);
};
