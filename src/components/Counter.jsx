import React, { useState } from "react";

function Counter(){
    const[counter, setcounter] = useState(0);
    const clickHandel= () => {
        setcounter(prev => prev + 1);
    }
    return(
        <div>
            <h1>Count {counter}</h1>
            <button onClick={clickHandel}>click me</button>
        </div>

    );
}
export default Counter