import React, { useState } from 'react'
import { AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";

const Signupform = ({setisloggedin}) => {
    const[formdata, setformdata] = useState({
        firstname:"",
        lastname:"",
        Email:"",
        createpassword:"",
        confirmpassword:"",
    });

    const[showpassword, setshowpassword] = useState(false);
    function changehandler(event){
        setformdata(prevdata => ({
            ...prevdata,
            [event.target.name]: event.target.value
        }))}
  return (
    <div>
        <div>
            <button>
                student
            </button>

            <button>
                instructor
            </button>
        </div>

        <form>
        {/* first and lastame */}
            <div>
            <label>
                <p>first name<sup>*</sup></p>
                <input
                required
                type='text'
                name='firstname'
                onChange={changehandler}
                value={formdata.firstname}
                />
            </label>
            <label>
                <p>last name<sup>*</sup></p>
                <input
                required
                type='text'
                name='lastname'
                onChange={changehandler}
                value={formdata.lastname}
                />
            </label>
            </div>

            <label>
                <p>Email Address<sup>*</sup></p>
                <input
                required
                type='email'
                name='email'
                onChange={changehandler}
                value={formdata.email}
                />
            </label>

            {/* create and confirm password */}
            <div>
            <label>
                <p>create password<sup>*</sup></p>
                <input
                required
                type={showpassword ? ("text"): ("password")}
                name='password'
                onChange={changehandler}
                value={formdata.createpassword}
                />
            </label> 
            <label>
                <p>confirm password<sup>*</sup></p>
                <input
                required
                type={showpassword ? ("text"): ("password")}
                name='password'
                onChange={changehandler}
                value={formdata.confirmpassword}
                />

               <span onClick={(prev)=> !prev}>
                    {showpassword ? (<AiOutlineEyeInvisible />):(<AiOutlineEye/>)}
                </span>

            </label> 
            </div>

       <button>
    create accotn
     </button>
          
        </form>
    </div>
  )


}

export default Signupform