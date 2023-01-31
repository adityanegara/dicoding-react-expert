import { todosReducer } from "./todos/reducer";
import { goalsReducer } from "./goals/reducer";

export default function rootReducer(state = {}, action = {}) {
    return {
      todos: todosReducer(state.todos, action),
      goals: goalsReducer(state.goals, action)
    };
}