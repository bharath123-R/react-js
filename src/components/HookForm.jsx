import React from 'react'
import { useForm } from 'react-hook-form'

export default function HookForm() {
const {register , handleSubmit} = useForm()

const submit =(data)=>{

  console.log(data);
  
    
}

  return (
    <div>
        <h1>Hook Form</h1>
        <label >Enter Your Name: </label>
        <input {...register("name", { required: true })} placeholder='Enter' />
        <br />
        <label >Phone No.: </label>
        <input {...register("Phone")} placeholder='Enter' />
        <br />
        <br />
        <button onClick={handleSubmit(submit)}>Submit</button>

    </div>
  )
}
