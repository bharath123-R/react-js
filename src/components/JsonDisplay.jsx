import React, { useState } from "react";

let datas = [
    {
        name: "Bharath",
        age: 21
    },
    {
        name: "loki",
        age: 29
    },
    {
        name: "kratos",
        age: 50
    },
    {
        name: "hulk",
        age: 100
    },
    {
        name: "saptingala",
        age: 20

    }
]

export default function JsonDisplay() {

    const [student, setstudent] = useState(datas)

    return (
        <div>
            {student[0].name}
            {student.map((d)=>(
                <div>
                    <h1>{d.name}</h1>
                    <h2>{d.age}</h2>
                </div>

            ))}

        </div>
    )

}