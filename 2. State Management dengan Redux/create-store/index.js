import { createStore } from "./redux.js";

const addGoalActionCreator = ({id, text}) =>{
  return {
    type: "ADD_GOAL",
    payload: {
      id,
      text
    }
  }
}

const deleteGoalActionCreator = (id) =>{
  return {
    type: "DELETE_GOAL",
    payload: {
      id
    }
  }
}

const addTodoActionCreator = ({ id, text }) => {
  return {
    type: "ADD_TODO",
    payload: {
      id,
      text,
      complete: false,
    },
  };
};

const deleteTodoActionCreator = (id) =>{
  return {
    type: 'DELETE_TODO',
    payload: {
      id
    }
  }
}


const goalsReducer = (goals = [], action = {}) =>{
  if(action.type === "ADD_GOAL"){
    return [...goals, action.payload]
  }
  if(action.type === "DELETE_GOAL"){
    return goals.filter((goal) => goal.id !== action.payload.id)
  }
}

function todosReducer(todos = [], action = {}) {
  if (action.type === "ADD_TODO") {
    return [...todos, action.payload];
  }
  if(action. type === "DELETE_TODO"){
    return todos.filter((todo) => todo.id !== action.payload.id)
  }
  return todos;
}

function rootReducer(state = {}, action = {}) {
  return {
    todos: todosReducer(state.todos, action),
    goals: goalsReducer(state.goals, action)
  };
 }

const store = createStore(rootReducer);

const unsubscribe = store.subscribe(() => {
  console.log("state changed!", store.getState());
});

store.dispatch(addTodoActionCreator({ id: 1, text: "Learn React" }));
store.dispatch(addTodoActionCreator({ id: 2, text: "Learn Redux" }));
store.dispatch(addTodoActionCreator({ id: 3, text: "Learn Javascript" }));
store.dispatch(deleteTodoActionCreator(1))
store.dispatch(addGoalActionCreator({id: 33, text: "Slim"}));
store.dispatch(addGoalActionCreator({id: 1, text: "Wolo"}));
store.dispatch(deleteGoalActionCreator({id: 1}));
