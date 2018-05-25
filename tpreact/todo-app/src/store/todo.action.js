export const ADD_TODO = 'ADD_TODO';
export const TODOS_LOADED = 'TODOS_LOADED';
export const LOAD_TODOS = 'LOAD_TODOS';

const data = [
  { id: 1, title: 'Send a mail', isDone: false },
  { id: 2, title: 'Develop', isDone: true },
  { id: 3, title: 'Test', isDone: true },
  { id: 4, title: 'Take a beer', isDone: false },
];

const mockFetch = () => new Promise((resolve) => {
  setTimeout(() => resolve(data), 2000);
});

export function addTodo(name) {
  return {
    type: ADD_TODO,
    name,
  };
}

export function todoLoaded(datas) {
  return {
    type: TODOS_LOADED,
    todos: datas,
  };
}

export function loadTodos() {
  return (dispatch) => {
    // Dispatch load todos start
    dispatch({ type: LOAD_TODOS });
    return mockFetch()
      .then(datas => dispatch(todoLoaded(datas)));
  };
}
