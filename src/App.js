import React, { useState } from "react";
import './style.css'




function App() {

  const [result,setresult] = useState("")

  const clickevent = (e) =>
  {
    e.target.value === '0' && result === ''?
    setresult(''):
    setresult(result.concat(e.target.value))

    // const push = result.toString === '' && e.target.value === 0 ?
    // setresult('') :
    // result.concat(e.target.value);

    // setresult(push)


  }
  const cleardisplay = () =>
  {
    setresult('')
  }
  const evaluate = () =>
  {
    let res = eval(result);
    setresult(res.toString());
  }



  return (
    <div className="calculator-grid">
      <input placeholder="0" type="text" className="output current-result" value={result}/>
  
      <input type="button" value="9"  className="button" onClick={clickevent}/>
      <input type="button" value="8"  className="button" onClick={clickevent}/>
      <input type="button" value="7"  className="button" onClick={clickevent}/>
      <input type="button" value="6"  className="button" onClick={clickevent}/>
      <input type="button" value="5"  className="button" onClick={clickevent}/>
      <input type="button" value="4"  className="button" onClick={clickevent}/>
      <input type="button" value="3"  className="button" onClick={clickevent}/>
      <input type="button" value="2"  className="button" onClick={clickevent}/>
      <input type="button" value="1"  className="button" onClick={clickevent}/>
      <input type="button" value="0"  className="button" onClick={clickevent}/>
      <input type="button" value="*"  className="button" onClick={clickevent}/>
      <input type="button" value="+"  className="button" onClick={clickevent}/>
      <input type="button" value="-"  className="button" onClick={clickevent}/>
      <input type="button" value="%"  className="button" onClick={clickevent}/>
      <input type="button" value="Clear"  className="span-two button" onClick={cleardisplay}/>
      <input type="button" value="."  className="button" onClick={clickevent}/>

      <input  type= "button"  value="=" className="span-three button equalto" onClick={evaluate}/>
    </div>
  );
}

export default App;
/*
import React, { useReducer } from "react";
import './style.css'
import { Reducer } from "react";


const ACTIONS = {
      // <div className="previous-result">{previousresult} {operation}</div>
  ADD_DIGIT : 'add-digit',
  CHOOSE_OPERATION : 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'

}

function reducer(state, {type, payload})
{
  switch(type)
  {
    case ACTIONS.ADD_DIGIT:
        return {
          ...state,
          currentresult: `${currentresult}${payload.digit}`
        }



  }
}


function App() {

const [ {currentresult, previousresult , operation}, dispatch] = useReducer (reducer, {})



  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-result">{previousresult} {operation}</div>
        <div className="current-result">{currentresult}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>÷</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>*</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>
    </div>

    */