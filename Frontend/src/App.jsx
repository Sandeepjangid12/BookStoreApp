import React from 'react'

import Home from './component/Home/Home'
import Course from "./component/Course"
import { Routes,Route } from "react-router-dom"
import Signup from './component/Signup'
import Login from './component/Login'
import About from './component/About'
import Contactus from './component/Contactus'

const App = () => {
  return (
   <>
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 dark:text-white ">


<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/course' element={<Course/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contactus/>}/>
{/* <Route path='/signup' element={<Signup/>}/>
      <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}

{/* <Route path='/login' element={<Login/>}/> */}
</Routes>

</div>
   </>
  )
}

export default App
