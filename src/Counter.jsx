import { useState } from "react";

export default function Counter(){
    let [counter,setCounter]=useState(0);
    let[msg ,setMsg]=useState("");
    let [n,setN]=useState(0);
    
    const addvalue = ()=>{
        if(counter<10){
            counter=counter+1;
            setCounter(counter);
            console.log("value added"+counter);
            setMsg("");
            setN(0);
        }
        else{
            msg="sorry value cannot be greater than 10";
            setMsg(msg);
            console.log(msg);
        }
      
    }
    const removevalue=()=>{
        if(counter>0){
            counter=counter-1;
            setCounter(counter);
            console.log("value remove"+counter);
            setMsg("");
            setN(0);
        }
        else{
            n=n+1;
            setN(n);
            msg=`sorry counter value should not be  negative ! error attempt:${n}`;
            setMsg(msg);
            console.log(msg);
        }
      
    }
    return(
        <>
        <div>
          <h1>Counter value: {counter}</h1>

          <button onClick={addvalue}>Add value</button><br /><br />
          <button onClick={removevalue}>Remove value</button>
          <h1>{msg}</h1>
        </div>
        </>
    )
}