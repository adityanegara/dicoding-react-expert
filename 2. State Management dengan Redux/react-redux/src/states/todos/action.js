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
