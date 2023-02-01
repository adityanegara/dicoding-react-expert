import { type Action } from '../../types/Action'

interface TodosPayload {
  id: string
  text?: string
}

export const createTodoActionCreator = ({
  id,
  text
}: TodosPayload): Action<TodosPayload> => {
  return {
    type: 'CREATE_TODO',
    payload: { id, text }
  }
}

export const removeTodoActionCreator = (id: string): Action<TodosPayload> => {
  return {
    type: 'REMOVE_TODO',
    payload: { id }
  }
}

export const toggleTodoActionCreator = (id: string): Action<TodosPayload> => {
  return {
    type: 'EDIT_GOAL',
    payload: { id }
  }
}
