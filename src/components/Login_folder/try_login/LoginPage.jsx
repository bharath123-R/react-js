import React from 'react'
import './LoginPage.css'
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa'
import Icon from "../blogo.png"



export default function LoginPage() {
  return (


    <div className='Login'>

      <div className="upper">
        <img className='img' src={Icon} alt="company logo" />
        <h4>GOW</h4>
      </div>
      <div className='leftside'>
        <div className="logtext">
        <h1>Login to Your Account</h1>
        <h3>Login Using Social Network</h3>
        </div>


        <div className="socialnet">
          <div className="icons"><FaFacebookF /></div>
          <div className="icons"><FaGoogle /></div>
          <div className="icons"><FaLinkedinIn /></div>


        </div>
        <div className="or"><h1>OR</h1></div>
        <input type="email" placeholder='  Enter Enmail' className="inputtag" />
        <br />
        <input type="Password" placeholder='  Enter Password' className="inputtag"/>
        <br />
        <button className='btn'>Signin</button>
      </div>
      <div className='rightside'>
        <h1>New Here?</h1>
        
        <h4>Sign up and discover a great amount of new oppotunities</h4>
        <button className='btn1'>Sign Up</button>

      </div>
    </div>



  )
}
