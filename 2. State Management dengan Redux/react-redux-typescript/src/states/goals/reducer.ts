import type Goal from '../../types/Goal'
import { type Action, type GoalAction } from '../../types/Action'

export const goalsReducer = (
  goals: Goal[] = [],
  action: Action<GoalAction>
): Goal[] => {
  if (action.type === 'CREATE_GOAL') {
    return [
      ...goals,
      { id: action.payload.id, text: action.payload.text as string }
    ]
  }
  if (action.type === 'REMOVE_GOAL') {
    return goals.filter((goal) => goal.id !== action.payload.id)
  }
  if (action.type === 'EDIT_GOAL') {
    return goals.map(goal => {
      if (goal.id === action.payload.id) {
        return {
          ...goal,
          text: action.payload.text as string
        }
      } else {
        return goal
      }
    })
  }
  return goals
}
