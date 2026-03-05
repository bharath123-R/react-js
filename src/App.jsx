import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import Login from './components/Login_folder/Login'
import Trylogin from './components/Login_folder/try_login/Trylogin'
import RegisterPage from '../Registerpage/RegisterPage'
import Register from '../Registerpage/Register'

// import AnimeName from "./components/AnimeName";

// function App(){                                      
//   return(
//     <div>
//     <h1 className="Rec"> React </h1>
//     <h2 className="sub">this is react class</h2>

//     </div>
//   )
// }
// const name = 'Bharath';
// function App(){
//   return(
//     <>
//   <h1>hey boy, {name}</h1>

//     </>
//   )

// }

// import Header from "./Header"

// function App(){
//     return(
//         <div>
//             <Header name="bharath" />
//             <p>this is main content</p>
//             <Header name="react" />

//         </div>
//     );
// }



function App() {
    return (
        //     <div>
        //         {/* <AnimeName /> */}
        //         {/* <JsonDisplay /> */}
        //         {/* <Effect /> */}
        //         {/* <Product /> */}
        //         {/* < Apitry /> */}


        //         {/* <Counter/> */}
        //         {/* <Form /> */}
        //         {/* <HookForm /> */}
        //         {/* <Hooktwo /> */}




        //     </div>
        // );

        // <BrowserRouter>
        //     <Link to="/login">Login</Link>
        //     <Routes>
        //         <Route path="/login" element={<Login />}></Route>
        //     </Routes>
        // </BrowserRouter>
        // <Trylogin />
<Register/>

    );
}

export default App;