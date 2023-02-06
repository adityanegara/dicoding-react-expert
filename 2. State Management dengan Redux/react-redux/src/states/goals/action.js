import mockAPI from '../../data/mockAPI';

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

export function receiveGoalsActionCreator(goals) {
  return {
    type: 'RECEIVE_GOALS',
    payload: {
      goals
    }
  };
}

export function asyncReceiveGoals() {
  return async (dispatch) => {
    const goals = await mockAPI.getGoals();
    dispatch(receiveGoalsActionCreator(goals));
  };
}

export function asyncAddGoals(text) {
  return async (dispatch) => {
    const { id } = await mockAPI.addGoal(text);
    dispatch(addGoalActionCreator({ id, text }));
  };
}

export function asyncDeleteGoal(id){
  return async (dispatch) => {
    await mockAPI.deleteGoal(id);
    dispatch(deleteGoalActionCreator(id));
  }
}
