import React from 'react'
import signupimg from "../assets/signup.png"
import Template from "../Component/Template"

const Signup = ({setisloggedin}) => {
  return (
    <div>
      <Template
      title='join the million learning to code with studynotion for free'
      desc1 = 'Build skil for today, tommorow, and boyond.'
      desc2 = 'Education to future-proof your carrer'
      image= {signupimg}
      setisloggedin = {setisloggedin}
      formtype = "Signup"
      />

    </div>
  )
}

export default Signup