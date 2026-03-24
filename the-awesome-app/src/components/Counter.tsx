// <Counter count={5} />
'use client'

import {ChangeEvent, useState,useRef } from "react";
type CounterProps ={
    count: number;
}
export default function Counter(props:CounterProps){

    const [count,setCount]= useState(props.count);
   // let count = props.count;
   const inputRef = useRef<HTMLInputElement>(null)
    function inc()
    {
        console.log("incrementing counter...")
        setCount(count+1);
        console.log("count", count);
    }
    function dec()
    {
        console.log("decrementing counter...")
       // count--;
       setCount(count-1);
        console.log("count", count);
        
    }

    function handleChange(evt: ChangeEvent<HTMLInputElement>)
    {
        setCount(Number(evt.target.value));
    }
    return(
        <div>
                <h4>Count : {count}</h4>
                <div>
                    <button onClick={inc}>++</button>
                    &nbsp;
                    <button onClick={() =>setCount(count-1)}>--</button>
                </div>
                <br/>
                <div>
                   <input type="number" value={count} onChange={handleChange} />
                </div>
                <div>
                    <input ref={inputRef} type="number" placeholder="Enter the new count" /> &nbsp;
                    <button onClick={()=> setCount(inputRef.current?.valueAsNumber || 0)}>Update Count</button>
                </div>
        </div>
    )
}