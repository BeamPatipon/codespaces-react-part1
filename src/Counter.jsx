import React, {useState} from "react";

const Counter = ()=>{
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("type here!");
    return (<>
        <button onClick={()=> setCount(count + 1)}>
            Click me!!
        </button>
        {" "}
        <button onClick={()=> setCount(0)}>
            Reset!!
        </button>
        <p>You Clicked {count} times</p>
        <input 
            type="text"
            value={value}
            onChange={event=>setValue(event.target.value)}/>
        <h3>You type {value.length} char</h3>
    </>);
}
export default Counter;