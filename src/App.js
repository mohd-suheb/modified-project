  
import React, { useState } from 'react'
import { Routes , Route} from 'react-router-dom'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Navbar from './Component/Navbar';

import Home from './pages/Home'
import Login from './pages/Login'
import './App.css';


const App = () => {
  const[isloggedin, setisloggedin] = useState(false);
  return (
    <div>

      <Navbar  isloggedin = {isloggedin} setisloggedin = {setisloggedin}/>

      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/Dashboard" element = {<Dashboard/>}/>
        <Route path = "/Login" element = {<Login/>}/>
        <Route path = "/Signup" element = {<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App