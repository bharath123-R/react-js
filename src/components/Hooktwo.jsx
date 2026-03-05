import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


export default function () {

    const [name, setname] = useState()
    const [phone, setphone] = useState()
    const { register, handleSubmit } = useForm()
    const subhand = (data) => {

        console.log(data);
        setname(data.name);
        setphone(data.phone);


    }


    return (



        <div>

            <h1>Hook Form</h1>
            <label>Name: </label>
            <input {...register("name", { required: true })} placeholder='Enter Name' />
            <br />
            <br />
            <label>Phone: </label>
            <input {...register("phone", { required: true })} placeholder='Phone' />
            <br />
            <br />
            <button onClick={handleSubmit(subhand)}>Submit</button>
            <br />
            <br />

            <h1>Name: {name}</h1>
            <h1>Phone No.: {phone}</h1>




        </div>



    )
}
