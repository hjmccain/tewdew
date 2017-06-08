export const SUCCESS_FETCHING_TODOS = 'SUCCESS_FETCHING_TODOS';
export const ERROR_FETCHING_TODOS = 'ERROR_FETCHING_TODOS';
export const ADD_TODO = 'ADD_TODO';

export const successFetchingTodos = (todos) => ({
  type: SUCCESS_FETCHING_TODOS,
  todos
});

export const errorFetchingTodos = (err) => ({
  type: ERROR_FETCHING_TODOS,
  err
});

export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo
});

export const fetchTodosFromServer = () => (dispatch) => {
  return fetch(
    '/api/todos'
  ).then(res => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  }).then(data => {
    console.log('data', data);
    dispatch(successFetchingTodos(data));
  }).catch(err => {
    console.error(err);
    dispatch(errorFetchingTodos(err));
  });
}
