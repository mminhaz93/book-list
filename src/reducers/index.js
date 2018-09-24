import { combineReducers } from 'redux';
import BookReducer from './reducer_books'

// when we pass reducer in combineReducers, we telling Redux how to create our applications state 
const rootReducer = combineReducers({
  // key(state): values({...,....})
  books: BookReducer
});

export default rootReducer;
