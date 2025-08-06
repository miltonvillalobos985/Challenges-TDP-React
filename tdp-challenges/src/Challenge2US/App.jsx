import { useState } from "react";
import '../App.css';

export function App(){
    const [count, setCount]= useState({count:0, name:'dave'})
    function increment(){
        setCount((previous)=>({...previous,count: previous.count+1}))
    }
    function handleChange(event){
        setCount((previous)=>({...previous,count: + event.target.value}))
    }
    return (
        <div className="App">
            <button onClick={()=>setCount({count:count.count-1})}>&lt;</button>
            <input type="number" value={count.count} onChange={handleChange}></input>
            <button onClick={increment}>&gt;</button>
        </div>
    )
}

export default App;