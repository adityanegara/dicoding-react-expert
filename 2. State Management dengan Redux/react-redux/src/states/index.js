import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { todoDeletionCheck } from "./middlewares";

const store = createStore(rootReducer, applyMiddleware(todoDeletionCheck));

export {store};