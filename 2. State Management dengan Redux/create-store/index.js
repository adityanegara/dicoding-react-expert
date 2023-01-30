import { createStore } from "./redux.js";

const deleteTodoActionCreator = (id) =>{
  return {
    type: 'DELETE_TODO',
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

function todosReducer(todos = [], action = {}) {
  if (action.type === "ADD_TODO") {
    return [...todos, action.payload];
  }
  if(action. type === "DELETE_TODO"){
    return todos.filter((todo) => todo.id !== action.payload.id)
  }
  return todos;
}

const store = createStore(todosReducer);

const unsubscribe = store.subscribe(() => {
  console.log("state changed!", store.getState());
});

store.dispatch(addTodoActionCreator({ id: 1, text: "Learn React" }));
store.dispatch(addTodoActionCreator({ id: 2, text: "Learn Redux" }));
store.dispatch(addTodoActionCreator({ id: 3, text: "Learn Javascript" }));
store.dispatch(deleteTodoActionCreator(1))
