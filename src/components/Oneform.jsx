import React, { useState } from "react";

export default function from(){

    const[name, setname] = useState("")
    const[age,setage] = useState()

    const handlename = (event)=>{

        setname(event.target.value)
        // console.log(name);
        
    }
    const handlage = (e)=>{
        setage(e.target.value)
    }
    return(
        <div>
            <label htmlFor="">First Name</label>
            <input onChange={handlename} placeholder="Enter Name" />
            <br />
            <label htmlFor="">Age</label>
            <input onChange={handlage} placeholder="Enter Age" />
            <h1>Name : {name}</h1>
            <h1>Age : {age}</h1>

        </div>
    )
}