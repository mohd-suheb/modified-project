import React from 'react'
import { Link } from 'react-router-dom'
import Logo from  '../assets/Logo.svg'
import toast from 'react-hot-toast';

const Navbar = (props) => {
    let isloggedin = props.isloggedin;
    let setisloggedin = props.setisloggedin;
  return (
    <div className='flex justify-evenly '>
       <Link to  = "/">

           <img src={Logo}  alt='Logo'
            width={160} height={26} loading='lazy'/>
       
      </Link>
      <nav >
      
        <ul className='flex gap-3 '>
            <li>
                <Link to = "/">Home</Link>
            </li>
            <li>
                <Link to = "/">about</Link>
            </li>
            <li>
                <Link to = "/">contact</Link>
            </li>
        </ul>
      </nav>
        

        {/* four button */}
      <div className='flex ml-5 mr-3 gap-3'>
      {
           !isloggedin&&
            <Link to = "/Login">
            <button>
                Login
            </button>
            
            </Link>
        }
        {    !isloggedin&&
            <Link to = "/Signup">
            <button>
                Signup
            </button>
            
            </Link>

        }

        {   isloggedin&&
            <Link to = "/">
            <button onClick={()=>{
                setisloggedin(false);
                toast.success("Logged OUT");
            }}>
                Log out
            </button>
            
            </Link>
        }

        {isloggedin&&

       <Link to = "/Dashboard">
        <button>
        Dashboard
        </button>

         </Link>
        }
      </div>
        
      
    </div>
  )
}

export default Navbar