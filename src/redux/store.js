import { combineReducers, createStore } from "redux";
import BooksReducers from "./reducers/booksReducer";

let reducers = combineReducers({
  Books: BooksReducers,
});

let store = createStore(reducers);
export default store;
