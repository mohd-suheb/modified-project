import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const Loginform = ({setisloggedin}) => {
    const navigate = useNavigate();
    const[fromdata, setformdata] = useState({
        email: "", password: "",
    });

    const[showpassword, setshowpassword] = useState(false);

    function changehandler(event){
        setformdata(prevdata => ({
            ...prevdata,
            [event.target.name]: event.target.value
        }))

        
        
       
}
function  submithandler(event){
    event.preventDefault();
    setisloggedin(true);
    toast.success("logged in");
    navigate("/Dashboard");


}

return(
    <div>

        <form onClick={submithandler}>
            <label>
                Email Address<sup>*</sup>
                <input
                 type='email'
                 required
                 onChange={changehandler}
                 name='email'
                 value={FormData.email}
                 placeholder='Enter your Email'
                />
            </label>

            <label>
                password<sup>*</sup>
                <input
                 type= {  showpassword ?("text"): ("password")}
                 required
                 onChange={changehandler}
                 name='password'
                 value={FormData.password}
                 placeholder='Enter your Email'
                />

                <span onClick={(prev)=> !prev}>
                    {showpassword ? (<AiOutlineEyeInvisible />):(<AiOutlineEye/>)}
                </span>

                <Link to ="#" >
                forgot password
                </Link>

            </label>

            <button >
                sigin in
            </button>
        </form>
    </div>
  )
}

export default Loginform;