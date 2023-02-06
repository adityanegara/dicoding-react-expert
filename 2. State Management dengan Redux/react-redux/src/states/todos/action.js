import mockAPI from '../../data/mockAPI';

export function addTodoActionCreator({ id, text }) {
  return {
    type: 'ADD_TODO',
    payload: {
      id,
      text,
      complete: false
    }
  };
}

export function deleteTodoActionCreator(id) {
  return {
    type: 'DELETE_TODO',
    payload: {
      id
    }
  };
}

export function toggleTodoActionCreator(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: {
      id
    }
  };
}

export function receiveTodosActionCreator(todos) {
  return {
    type: 'RECEIVE_TODOS',
    payload: {
      todos
    }
  };
}

export function asyncReceiveTodos() {
  return async (dispatch) => {
    const todos = await mockAPI.getTodos();
    dispatch(receiveTodosActionCreator(todos));
  };
}

export function asyncAddTodo(text) {
  return async (dispatch) => {
    const { id } = await mockAPI.addTodo(text);
    dispatch(addTodoActionCreator({ id, text }));
  };
}

export function asyncDeleteTodo(id) {
  return async (dispatch) => {
    await mockAPI.deleteTodo(id);
    dispatch(deleteTodoActionCreator(id));
  };
}

export function asyncToggleTodo(id) {
  return async (dispatch) => {
    await mockAPI.toggleTodo(id);
    dispatch(toggleTodoActionCreator(id));
  };
}
