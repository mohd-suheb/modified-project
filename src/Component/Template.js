import React, { useState } from 'react';
import frameimag from "../assets/frame.png";
import Signupform from './Signupform';
import Loginform from './Loginform';

const Template = ({ tittle, desc1, desc2, image, formtype, setisloggedin }) => {
 

  console.log(formtype);

  return (
    <div>
      <h1>{tittle}</h1>
      <p>
        <span>{desc1}</span>
        <span>{desc2}</span>
      </p>

      {formtype === "Signup" ? <Signupform setisloggedin = {setisloggedin}/> : (<Loginform setisloggedin = {setisloggedin} />)}

     

      <div>
        <div></div>
        <p>or</p>
        <div></div>
      </div>

      <button>
        <p>Signup with Google</p>
      </button>

      <div>
        <img
          src={frameimag}
          alt="pattern"
          width={558}
          height={508}
          loading="lazy"
        />
        <img
          src={image}
          alt="student"
          width={558}
          height={490}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Template;

