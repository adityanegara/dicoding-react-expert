export function addGoalActionCreator({ id, text }) {
  return {
    type: 'ADD_GOAL',
    payload: {
      id,
      text
    }
  };
}

export function deleteGoalActionCreator(id) {
  return {
    type: 'DELETE_GOAL',
    payload: {
      id
    }
  };
}


