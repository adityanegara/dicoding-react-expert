import type Todo from '../../types/Todo'
import { type Action, type TodoAction } from '../../types/Action'

export const todosReducer = (
  todos: Todo[] = [],
  action: Action<TodoAction>
): Todo[] => {
  if (action.type === 'CREATE_TODO') {
    return [
      ...todos,
      {
        id: action.payload.id,
        text: action.payload.text as string,
        isCompleted: false
      }
    ]
  }
  if (action.type === 'REMOVE_TODO') {
    return todos.filter((todo) => todo.id !== action.payload.id)
  }
  if (action.type === 'TOGGLE_TODO') {
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, isCompleted: !todo.isCompleted }
      }
      return todo
    })
  }
  return todos
}
