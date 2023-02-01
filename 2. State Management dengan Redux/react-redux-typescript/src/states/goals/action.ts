import { type Action } from '../../types/Action'

interface GoalPayload {
  id: string
  text: string
}

export const createGoalActionCreator = ({
  id,
  text
}: GoalPayload): Action<GoalPayload> => {
  return {
    type: 'CREATE_GOAL',
    payload: { id, text }
  }
}

export const removeGoalActionCreator = (id: string): Action<{ id: string }> => {
  return {
    type: 'REMOVE_GOAL',
    payload: { id }
  }
}

export const editGoalActionCreator = ({
  id,
  text
}: GoalPayload): Action<GoalPayload> => {
  return {
    type: 'EDIT_GOAL',
    payload: { id, text }
  }
}
