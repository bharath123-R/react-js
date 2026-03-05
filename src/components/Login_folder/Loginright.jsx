import React from 'react'
import { Link } from 'react-router-dom'

export default function Loginright() {
    return (
        <div className='right'>
            <div className='content'>
                <b> <h1>New Here?</h1></b>
                <h4>Sign up and discover a great</h4>
                <h4>amount of new oppurtunities</h4>
            </div>
            <Link to="/register">
            <button className='btn-r'>Sign Up</button>
            </Link>
        </div>
        )
}
