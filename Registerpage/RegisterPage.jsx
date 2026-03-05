import React from 'react'
import { FaFacebookF, FaGoogle, FaUser, FaEnvelope, FaLock, FaEyeSlash } from 'react-icons/fa'
import "./RegisterPage.css"


export default function RegisterPage() {
    return (
        <div >
            <div className="page">

                <div className="left">
                    <img src="Registerpage/gow.webp" alt="leftpage" />
                </div>


                <div className="right">
                    <h1>Register</h1>




                    <form >
                        <div className="form-box">

                            <div className='input-field'>
                                <FaUser className='icon' />
                                <input type="Name" placeholder=' Enter Full Name' />
                            </div>

                            <div className="input-field">
                                <FaEnvelope className='icon' />
                                <input type="email" placeholder=' Email or Phone Number' />
                            </div>
                            <div className="input-field">
                                <FaLock className='icon' />
                                <input type="Password" placeholder=' Enter Password' />
                            </div>
                            <div className="input-field">
                                <FaLock className='icon' />
                                <input type="Password" placeholder=' Confirm Password' />
                                <FaEyeSlash className='icon1' />
                            </div>
                            <label className='lorem' >
                                <input type="checkbox" name='terms'  />
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, ducimus.
                            </label> <br />
                            <div className="button-box">
                            <button className="btn">Submit</button>
                            </div>
                        </div>


                    </form>
                    <h4>Register with</h4>

                    <div className="social">
                        <div className="logo">
                            <FaFacebookF />
                            
                        </div>
                        <div className="logo"><FaGoogle /></div>
                    </div>

                    <div>
                        <h4>Already have an Account? <span className='Login-button'>Login</span></h4>
                        
                    </div>
                </div>
            </div>


        </div>
    )
}
