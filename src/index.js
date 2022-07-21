import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//step 1 - Globalized State
import { createStore } from "redux";

//step 2 - ACTION - Don't actually does anything. More like describes the action. It describes what we're about to do.
const increment = () => {
  return {
    type: "INCREMENT"
  }
}

//step 3 - Reducer - Filters out the action. Based on what the action is, it modifies the state. Two parameters: How our initial state looks like, action. We set the logic in REDUCER or decide what's going to happen in our state.
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
  }
}

//step 4 - DISPATCH - Fire button! The action starts/activates in dispatch

//creating store - Store takes reducer as parameter
let store = createStore(counterReducer);

//Not ideal for react but whatever
store.subscribe(() => console.log(store.getState()))
store.dispatch(increment())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
