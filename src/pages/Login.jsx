import React from 'react'
import loginimg from "../assets/login.png"
import Template from "../Component/Template"

const Login = ({setisloggedin}) => {
  return (
   <Template
   title='Welcome Back'
   desc1 = 'Build skil for today, tommorow, and boyond.'
   desc2 = 'Education to future-proof your carrer'
   image = {loginimg}
   formtype = "login"
   setisloggedin = {setisloggedin}
  
   
   
   />
  )
}

export default Login