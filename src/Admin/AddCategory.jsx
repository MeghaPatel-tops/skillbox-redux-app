import React, { use, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addCategory } from '../Slice/Category';
import { useNavigate } from 'react-router-dom';

function AddCategory() {
    const [cat,setCat]= useState("");
    const navigate = useNavigate();
    const {error,msg,loading,eventid} = useSelector((state)=>state.category)
    const dispatch = useDispatch();
    const handleChange = (e)=>{
        setCat(e.target.value);
    }

    const handleClick = async()=>{
          dispatch(addCategory(cat));
          navigate('/admin/category')
    }

  return (
    <div>
       {msg &&  <h1>{msg.msg}</h1> }
        <form method='post'>
  <div class="space-y-12">
   
  <h1>Add New Category</h1>
    <div class="border-b border-gray-900/10 pb-12">
     

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm/6 font-medium text-gray-900">Category name</label>
          <div class="mt-2">
            <input id="first-name" type="text" name="first-name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 border border-gray-900/10"  onChange={handleChange} />
          </div>
        </div>

      </div>
    </div>

    
  </div>

  <div class="mt-6 flex items-center justify-start gap-x-6">
    <button type="button" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleClick}>Save</button>
  </div>
</form>
    </div>
  )
}

export default AddCategory