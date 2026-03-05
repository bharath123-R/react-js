import React, { useEffect, useState } from "react";
import "./components/AnimeName.css"

export default function Product() {
    const [product, setproduct] = useState([]);
    const Apiclick = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setproduct(data);
            console.log("data fetche");

        } catch (error) {
            console.log("error fetch products", error);

        }

    }
    

return (
    <div>
        <button className="btm" onClick={Apiclick}>click to call API </button>
        <h1>
            {product.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>₹ {item.price}</p>
                </div>
            ))}</h1>


    </div>
)
}