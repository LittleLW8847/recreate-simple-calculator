import {useState, useRef} from "react";
import './App.css';

function App() {
  const inputRef = useRef(null);//to access number input in the input form
  const [result, setResult] = useState(0);//this is a calculator app, it is bound to have one variable to keep result to do with future operations
  
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
    /*if(result.current.value==Infinity){ okay let's move on to other part first 
      <div>
        <p>Result: Infinity now we will reset it</p>
      </div>
      setResult(0);
    }*/
  }

  function resetResult(){
    setResult(0);//this is a temporary solution, i did hear from my experienced friend that this isn't the best way to go about this
  }

  function resetInput(){
    inputRef.current.value=0;
  }
  
  return (
    <div>
      <h1>Simple Calculator</h1>
      <p>Result: {result}</p>
      <input pattern="[0-9]" type="number" placeholder="your number, please" ref={inputRef}></input>
      <button onClick={plus}>Add</button>
      <button onClick={minus}>Subtract</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Devide</button>
      <button onClick={resetResult}>Reset Result</button>
      <button onClick={resetInput}>Reset Input</button>
    </div>
  );

  /*
  */
}

export default App;
