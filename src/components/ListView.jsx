import { useState } from "react";
import "./ListView.css";

export default function ListView({items, onClear}){
    const[isAsc, setIsAsc]=useState(true);

    let sortedItems=[...items];

    if(isAsc){
        sortedItems.sort((a,b)=>a-b);
    }
    else{
        sortedItems.sort((a,b)=>b-a);
    }
    let max=null;
    let min=null;
    if(items.length > 0){
        max=Math.max(...items);
        min=Math.min(...items);
    }

    return(
        <div className="list">
            <div className="list-btns">
                <button className="sbtn" onClick={()=>setIsAsc(!isAsc)}>
                    {isAsc ? "Sort-to-Desc" : "Sort-to-Asc"}
                </button>

                <button className="lbtn" onClick={onClear}>
                    Reset List
                </button>
            </div>
            {
                items.length === 0 ?(
                    <p>No items in the list</p>
                ) :(
                    <ul>
                        {
                            sortedItems.map((num,i)=>(
                                <li key={i} className={num===max ? "highlight-max" : num===min ? "highlight-min":""}>
                                    {num}
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    );
}