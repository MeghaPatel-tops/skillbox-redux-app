import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { userLogin } from '../Slice/User';

function Login() {
  const [userlogged,setUserLogged]=useState({});
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {loginMsg,userError,islogin} = useSelector((state)=>state.user)

  const handleChange= (e)=>{
        const {name,value}=e.target;
        setUserLogged({
            ...userlogged,
            [name]:value
        })
    }

    const handleClick = ()=>{
         dispatch(userLogin(userlogged))
         setTimeout(() => {
            navigate('/profile')
        }, 2000);
    }
  return (
    <div>
      <div class="min-h-screen bg-gray-100 flex justify-center items-center">
    <div class="bg-white w-full max-w-sm p-8 rounded-xl shadow-xl">
        <h2 class="text-2xl font-bold text-center text-black mb-6">Login</h2>
        {
            islogin && <h1>Loading......</h1>
        }
        {
            userError && <p>{userError}</p>
        }
         {
            loginMsg && <p>{loginMsg}</p>
        }

        <form>
        <div class="mb-4">
            <label class="block text-black mb-1">Email</label>
            <input 
            type="email" 
            class="w-full rounded border border-black p-2 focus:outline-none"
            placeholder="Enter your email"
            name='email'
            onChange={handleChange}
            />
        </div>

        <div class="mb-4">
            <label class="block text-black mb-1">Password</label>
            <input 
            type="password" 
            class="w-full  rounded border border-black p-2 focus:outline-none"
            placeholder="Enter your password"
            name='pwd'
            onChange={handleChange}
            />
        </div>

        <button 
            type="button" 
            class="w-full rounded bg-black text-white py-2 font-semibold hover:bg-gray-800"
            onClick={handleClick}
        >
            Login
        </button>
        </form>

        <p class="text-center text-black text-sm mt-4">
        Don't have an account? <NavLink to='/register' class="underline">Sign up</NavLink>
        </p>
    </div>
       </div>

    </div>
  )
}

export default Login
