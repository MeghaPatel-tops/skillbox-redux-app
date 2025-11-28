import React, { useEffect } from 'react'
import AdminNavbar from '../common/AdminNavbar'
import { useDispatch,useSelector } from 'react-redux'
import { CategorySlice, getCategory } from '../Slice/Category'
import { store } from '../Slice/store'



function Category() {
    const dispatch = useDispatch();
  const {data,loading,error} = useSelector((state)=>state.category);
    useEffect(()=>{
        console.log("here");
        dispatch(getCategory())
          //console.log("in page",data);
          
    },[])

   
    
  return (
    <div>
        <h1>Category index</h1>

      <table>
          <thead>
              <th>Id</th>
              <th>Category Name</th>
          </thead>
          <tbody>
              {
                 data && 
                 data.map((index,i)=>(
                  <tr key={i}>
                    <td>{i+1}</td>
                    <td>{index.catname}</td>
                  </tr>
                ))
              }
          </tbody>
      </table>

    </div>
  )
}

export default Category