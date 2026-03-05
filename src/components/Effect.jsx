import React, { useEffect, useState } from "react";
 export default function Effect(){
    const[count, setcounte] = useState(0);
    useEffect(()=>{
        console.log("count updated:",count);
        
    }, [count]);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setcounte(count+1)}>Increse</button>

        </div>
    );
}