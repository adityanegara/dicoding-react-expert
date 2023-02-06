import React, { useEffect } from 'react';
import GoalInput from './GoalInput';
import GoalItem from './GoalItem';
import { addGoalActionCreator, asyncAddGoals, asyncDeleteGoal, asyncReceiveGoals, deleteGoalActionCreator } from '../states/goals/action';
import { useDispatch, useSelector } from 'react-redux';

function GoalsList() {
  const goals = useSelector((states) => states.goals);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(asyncReceiveGoals())
  }, [dispatch])

  function onAddGoal(text) {
    dispatch(asyncAddGoals(text));
  }

  function onDeleteGoal(id) {
    dispatch(asyncDeleteGoal(id))
  }

  return (
    <div>
      <h3>My Goals</h3>
      <GoalInput addGoal={onAddGoal} />

      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <GoalItem {...goal} deleteGoal={onDeleteGoal} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoalsList;
