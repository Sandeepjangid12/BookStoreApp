import React from 'react'
import { Toaster } from 'react-hot-toast';
import Home from './component/Home/Home'
import Course from "./component/Course"
import { Routes, Route, Navigate } from "react-router-dom"
import Signup from './component/Signup'
import Login from './component/Login'
import About from './component/About'
import Contactus from './component/Contactus'
import { useAuth } from './context/Authprovider';

const App = () => {
      const [authUser, setAuthUser] = useAuth()
      console.log(authUser);
      
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 dark:text-white ">


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/course' element={authUser?<Course />:<Navigate to="/signup"/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contactus />} />
          {/* <Route path='/signup' element={<Signup/>}/>
      <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}

          {/* <Route path='/login' element={<Login/>}/> */}
        </Routes>
        <Toaster />

      </div>
    </>
  )
}

export default App
