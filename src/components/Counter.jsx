import { useState } from "react";

import "./Counter.css";

export default function Counter({onAdd}){
    const[count,setCount]=useState(0);
    const inc=()=>{                //increment
        setCount(count+1);
    };
    const dec=()=>{             //decrement
        if(count>0){
            setCount(count-1);
        }
    };

    const handleAdd=()=>{
        if(count > 0){
            onAdd(count);
            setCount(0);
        }
    };


    return(
        <div className="cnt">
            <h2>Counter : {count}</h2>
            <div className="btn">
                <button className="descbtn" onClick={dec}>-</button>
                <button className="ascbtn" onClick={inc}>+</button>
            </div>
            <button className="add-btn" onClick={handleAdd}>Add to list</button>
        </div>
    );
}