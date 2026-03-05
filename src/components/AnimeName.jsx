import React, { useState } from "react";
import "./AnimeName.css"

function AnimeName(){
    const[data,setdata] = useState(["luffy", "zoro", "sanji", "nami", "ussop", "loki"]);

    return(
        <div>


            <h1 className="h1tag">Anime Names</h1>
            <li>
            {data.map((tata, i)=>(

                <div>
                    <li className="list">

                       {i+1}. {tata}, index of {i}
                    </li>
                </div>



            ))}
            </li>
        </div>
    )
}
export default AnimeName