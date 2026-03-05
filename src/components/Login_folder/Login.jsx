import React from 'react'
// import Logleft from './Logleft
import Loginleft from './Loginleft'
import Loginright from './Loginright'
function Login() {
    return (
        <div className='login'>
            <div className='leftpage'><Loginleft/></div>
            <div className='rightpage'><Loginright /></div>
        </div>
    )
}
export default Login