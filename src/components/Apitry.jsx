import React, { useState } from "react";

export default function Apitry() {
    const [dataa, setdataa] = useState([])

    const apihandle = async () => {
        let data = await fetch("https://fakestoreapi.com/products")
        let Json = await data.json()
        setdataa(Json)
        console.log(dataa);
        
    }
    return (
        <div>
            <button onClick={apihandle}> click me</button>

            {dataa.map((api,i)=>(
                <div key={i}>
                    
                    <img src={api.image} />
                    <h3>{api.title}</h3>
                    <h2>price: {api.price}</h2>
                    <h2>Rating: {api.rating.rate}⭐ - count {api.rating.count}</h2>
                    <p>{api.description}</p>
                    <hr />
                </div>
            ))}


        </div>

    )
}