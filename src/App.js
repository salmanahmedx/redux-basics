import React from "react";
import Nav from "./Nav";

import { useSelector } from "react-redux";
//useSelector to use state from anywhere.

function App() {

  const counter = useSelector(state => state.counter);

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button>Increment</button>
      <Nav counter={counter}></Nav>
    </div>
  );
}

export default App;
