import { createSelector } from "reselect";
export const getTodos = (state) => state.todos.data;
export const getTodosLoading = (state) => state.todos.isLoading;
// export const getIncompleteTodos = (state) =>
//   state.todos.data.filter((todo) => todo.isCompleted !== false);
// export const getCompleteTodos = (state) =>
//   state.todos.data.filter((todo) => todo.isCompleted !== true);
export const getIncompleteTodos = createSelector(
  getTodos,
  getTodosLoading,
  (todos, isLoading) =>
    isLoading ? [] : todos.filter((todo) => !todo.isCompleted)
);

export const getCompleteTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.isCompleted)
);
