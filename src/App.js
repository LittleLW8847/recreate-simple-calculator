import {useState, useRef} from "react";
import './App.css';

function App() {
  const inputRef = useRef(null);//to access number input in the input form
  const buttonRef = useRef(null);//i'm not sure if this is the correct way
  const [result, setResult] = useState(0);//this is a calculator app, it is bound to have one variable to keep result to do with future operations
  const [numberValue, setNumberValue] = useState("");

  const opsSym = ['+', '-', '*', '/', ','];

  function plus(){
    //result = result + Number(inputRef.current.value); okay i try this out of curiosity, to know what will be the error now i know
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(){
    setResult((result) => result - Number(inputRef.current.value));
  }

  function multiply(){
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(){
    setResult((result) => result / Number(inputRef.current.value));
  }

  function resetResult(){
    setResult((result) => result * 0);//this is a temporary solution, i did hear from my experienced friend that this isn't the best way to go about this and the whole x/0 = infinity stuff
    if(result===Infinity){ //this if exist for the sole purpose of if result is infinity so you can't just reset result by * with 0
      console.log("to infinity and beyond");
      setResult(0);
    }
  }

  function resetInput(){
    inputRef.current.value=0;
  }

  const addToEquation = (tempVal) => {setNumberValue(numberValue + tempVal.target.value)
    if(numberValue.slice(-1) === opsSym || numberValue.slice(-1) === " "){
      numberValue.pop();
    }
  }
  
  return (
    <div>
      <h1>Simple Calculator</h1>
      <p>here is your input: {numberValue}</p>
      <p>Result: {result}</p>
      <input pattern="[0-9]" type="number" placeholder="your number, please" ref={inputRef}></input>
      <button onClick={addToEquation/*plus*/} value="+">Add</button>
      <button onClick={addToEquation/*minus*/} value="-">Subtract</button>
      <button onClick={addToEquation/*multiply*/} value="*">Multiply</button>
      <button onClick={addToEquation/*divide*/} value="/">Devide</button>
      <button onClick={resetResult}>Reset Result</button>
      <button onClick={resetInput}>Reset Input</button>
      
      <button className="numberButton" value="1" onClick={addToEquation}>1</button>
      <button className="numberButton" value="3" onClick={addToEquation}>3</button>
      <button className="numberButton" value="2" onClick={addToEquation}>2</button>
      <button className="numberButton" value="4" onClick={addToEquation}>4</button>
      <button className="numberButton" value="5" onClick={addToEquation}>5</button>
      <button className="numberButton" value="6" onClick={addToEquation}>6</button>
      <button className="numberButton" value="7" onClick={addToEquation}>7</button>
      <button className="numberButton" value="8" onClick={addToEquation}>8</button>
      <button className="numberButton" value="9" onClick={addToEquation}>9</button>
      <button className="numberButton" value="0" onClick={addToEquation}>0</button>
      <button className="resultButton" value="=" onClick={tempVal => setNumberValue(eval(numberValue))}>=</button>
    </div>
  );

 /**/ 
}

export default App;
