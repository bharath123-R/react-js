import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { FaGooglePlus } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaRegEye } from "react-icons/fa";
import Logo from "../Login_folder/blogo.png"
import { Link } from 'react-router-dom';

export default function Loginleft() {
    return (
        <div className='left'>
            <div className='upper'>
                <img src={Logo} alt="company logo" />
                <h4 >My company</h4>
            </div>
            <div className='lower'>
                <div className='login-text'>
                    <h1>Login to Your Account</h1>
                    <h4>Login using social networks</h4>
                </div>
                <div className='logo'>
                    <span className='fb'> <BsFacebook className='f' /></span>
                    <span className='google'><FaGooglePlus /></span>
                    <span className='linkedin'><TiSocialLinkedinCircular /></span>
                </div>
                <div className='hr'>
                    <hr style={{ flex: 1 }} />
                    OR
                    <hr style={{ flex: 1 }} />
                </div>
                <div className='login-boox' >
                    <input type="text" className='ip' placeholder=' E-Mail' />
                    <br />
                    <div className='pwd'>
                        <input type="password" className='ip' placeholder=' Password' />
                        <FaRegEye className='pslogo' />
                    </div>
                </div>
                <button className='btn'>Sign in</button>

                <div className='mobile-view'>

                    <h4 className='black-text'>New Here?</h4>
                    <Link to="/register">
                        <button className='btn-rm'>Sign Up</button>
                    </Link>
                </div>


            </div>
        </div>
    )
}
