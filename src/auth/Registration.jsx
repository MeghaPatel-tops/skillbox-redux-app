import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { createUser } from '../Slice/User';

function Registration() {
    const navigate = useNavigate();
    const [userdata,setUserdata]=useState({});
    const dispatch  = useDispatch();
    const {userMsg,userError,isLoading} = useSelector((state)=>state.user)

    const handleChange= (e)=>{
        const {name,value}=e.target;
        setUserdata({
            ...userdata,
            [name]:value
        })
    }

    const handleClick = ()=>{
        console.log(userdata);
        dispatch(createUser(userdata))
        setTimeout(() => {
            navigate('/login')
        }, 2000);
    }
  return (
    <div>
       <div class="min-h-screen bg-gray-100 flex justify-center items-center">
          <div class="bg-white w-full max-w-sm p-8 rounded-xl shadow-xl">
              <h2 class="text-2xl font-bold text-center text-black mb-6">Rugisration</h2>
        {
            isLoading && <h1>Loading......</h1>
        }
        {
            userError && <p>{userError}</p>
        }
         {
            userMsg && <p>{userMsg}</p>
        }

              <form method='post'>

               <div class="mb-4">
                  <label class="block text-black mb-1">Name</label>
                  <input 
                  type="text" 
                  class="w-full rounded border border-black p-2 focus:outline-none"
                  placeholder="Enter your Name"
                  name='username'
                  onChange={handleChange}
                  />
              </div>  
                
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
                  Rugistr Now
              </button>
              </form>
      
              <p class="text-center text-black text-sm mt-4">
              Already have Account ? <NavLink to='/login' class="underline">Sign in</NavLink>
              </p>
          </div>
             </div>
    </div>
  )
}

export default Registration
