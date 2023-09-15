import {useState, useRef} from "react";
import './App.css';

function App() {
  return (

    <div>
      <h1>Simple Calculator</h1>
      <input pattern="[0-9]" type="number" placeholder="your number, please"></input>
      <button>Add</button>
      <button>Subtract</button>
      <button>Multiply</button>
      <button>Devide</button>
      <button>Reset Result</button>
      <button>Reset Input</button>
    </div>
  );
}

export default App;
