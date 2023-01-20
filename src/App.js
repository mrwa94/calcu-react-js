import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	// Add the code for the minus function 
    e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
    // Add the code for the plus function 
    e.preventDefault(); 
    setResult((result) => result *Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
    // Add the code for the divide function 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
   
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
    result = 0
    
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
    result = 0
   
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result}
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button className="opperation" onClick={plus}>add</button> 
        <button  className="opperation" onClick={minus}>minus</button>
        <button className="opperation" onClick={divide}>divide</button>
        <button className="opperation" onClick={times}>time</button>
        <button className="reset" onClick={resetResult}>resetResult</button>
        <button className="reset" onClick={resetInput}>resultInput</button>
      </form> 
    </div> 
  ); 
} 
 
export default App; 
