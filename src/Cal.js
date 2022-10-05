import { useState } from "react";
import "./Cal.css";
const Cal = () => {
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");
  const operator = ["+", "-", "*", "/","."];
  const getNums = () => {
    const nums = [];
    for (let i = 1; i < 10; i++) {
      nums.push(<button className="buttons" onClick={()=>updateExp(i.toString())}>{i}</button>);
    }
    nums.push(<button className="buttons" onClick={()=>updateExp('0')}>0</button>);
    nums.push(<button className="buttons" onClick={()=>updateExp('.')}>.</button>);
    nums.push(<button className="buttons" onClick={calulateResult}>=</button>);
    return nums;
  };
  const calulateResult =()=>{
    setExpression(eval(expression).toString());
  }
  const updateExp = (e) =>{
   if((operator.includes(e) && expression==='') ||
    (operator.includes(e) && operator.includes((expression.slice(-1))))
   )
   {
        return;
   }
  
  setExpression(expression+e);
  if(!operator.includes(e))
  {
   setResult(eval(expression+e).toString())
  }
  }
  const handleDel =()=>{
   if(expression ==='')
   {
    return;
   }
   setExpression(expression.slice(0,-1));
  }
  return (
    <div className="App">
      <div className="Header">Calculator</div>
      <div className="Body">
        <div className="Screen">(<span>{result}</span>)  {expression}</div>
        <div className="opera">
          <button className="oper" onClick={()=>updateExp('+')}>+</button>
          <button className="oper" onClick={()=>updateExp('-')}>-</button>
          <button className="oper" onClick={()=>updateExp('*')}>*</button>
          <button className="oper" onClick={()=>updateExp('/')}>/</button>
          <button className="oper" onClick={handleDel}>DEL</button>
        </div>
        <div className="but">{getNums()}</div>
      </div>
    </div>
  );
};
export default Cal;
