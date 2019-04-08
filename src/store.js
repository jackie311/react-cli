import { createStore } from 'redux';
import todoReducer from './reducers/todoReducer.js';
const store = createStore(rootReducer);
export default store;  