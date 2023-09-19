import {useState, useRef} from "react";
import './App.css';

function App() {
  const inputRef = useRef(null);//to access number input in the input form
  const buttonRef = useRef(null);//i'm not sure if this is the correct way
  const [result, setResult] = useState(0);//this is a calculator app, it is bound to have one variable to keep result to do with future operations
  const [numberValue, setNumberValue] = useState("");

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

    console.log("Result: "+ result);


  /*function numberInput(){

  }*/
  
  return (
    <div>
      <h1>Simple Calculator</h1>
      <p>here is your input: {numberValue}</p>
      <p>Result: {result}</p>
      <input pattern="[0-9]" type="number" placeholder="your number, please" ref={inputRef}></input>
      <button onClick={plus}>Add</button>
      <button onClick={minus}>Subtract</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Devide</button>
      <button onClick={resetResult}>Reset Result</button>
      <button onClick={resetInput}>Reset Input</button>
      
      <button  className="numberButton" value="1" onClick={tempVal => setNumberValue(numberValue + tempVal.target.value)}>1</button>
      <button  className="numberButton" value="2" onClick={tempVal => setNumberValue(numberValue + tempVal.target.value)}>2</button>
      <button  className="numberButton" value="3" onClick={tempVal => setNumberValue(numberValue + tempVal.target.value)}>3</button>
      <button  className="numberButton" value="4" onClick={tempVal => setNumberValue(numberValue + tempVal.target.value)}>4</button>
      <button  className="numberButton" value="5" onClick={tempVal => setNumberValue(numberValue + tempVal.target.value)}>5</button>
      <button  className="numberButton" value="6" onClick={tempVal => setNumberValue(numberValue + tempVal.target.value)}>6</button>
      <button  className="numberButton" value="7" onClick={tempVal => setNumberValue(numberValue + tempVal.target.value)}>7</button>
      <button  className="numberButton" value="8" onClick={tempVal => setNumberValue(numberValue + tempVal.target.value)}>8</button>
      <button  className="numberButton" value="9" onClick={tempVal => setNumberValue(numberValue + tempVal.target.value)}>9</button>
      <button  className="numberButton" value="0" onClick={tempVal => setNumberValue(numberValue + tempVal.target.value)}>0</button>
    </div>
  );

 /**/ 
}

export default App;
