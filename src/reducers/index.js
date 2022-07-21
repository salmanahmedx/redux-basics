import counterReducer from "./counter";
import loggedReducer from "./isLogged";
//store can't take two reducers at a time. To resolve this, we use combine reducers.
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
});

export default allReducers;