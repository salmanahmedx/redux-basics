import React from "react";
import Nav from "./Nav";

import { useSelector, useDispatch } from "react-redux";
//useSelector to use state from anywhere.

function App() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch() // activates the logic or action - store.dispatch()

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch({
        type: 'INCREMENT'
      })}>Increment</button>
      <Nav counter={counter}></Nav>
    </div>
  );
}

export default App;
