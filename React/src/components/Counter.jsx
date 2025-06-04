import { useState } from "react";

function Counter(){
    const[count,setCount]=useState(0)

    return(
        <div className="counter">
         <h2>Counter: {count}</h2>  
         <button className="incre_btn" onClick={()=>setCount(count+1)}>Increment</button>
         <button className="decre_btn" onClick={()=>setCount(count-1)}>Decrement</button>
         <button className="reset_btn" onClick={()=>setCount(0)}>Reset</button>
        </div>
        
    )
}

export default Counter;