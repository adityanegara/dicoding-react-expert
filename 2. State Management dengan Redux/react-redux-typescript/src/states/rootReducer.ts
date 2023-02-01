import { todosReducer } from './todos/reducer'
import { goalsReducer } from './goals/reducer'
import type Todo from '../types/Todo'
import type Goal from '../types/Goal'
import { type TodoAction, type GoalAction, type Action } from '../types/Action'

interface State {
  todos: Todo[]
  goals: Goal[]
}

const rootReducer = (
  state: State,
  action: Action<TodoAction | GoalAction>
): { todos: Todo[], goals: Goal[] } => {
  return {
    todos: todosReducer(state.todos, action),
    goals: goalsReducer(state.goals, action)
  }
}

export default rootReducer
