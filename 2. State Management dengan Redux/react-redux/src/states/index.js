import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { todoDeletionCheck, thunk } from './middlewares';

const store = createStore(rootReducer, applyMiddleware(todoDeletionCheck, thunk));

export { store };
