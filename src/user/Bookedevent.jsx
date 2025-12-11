import React, { useEffect, useState } from 'react'
import { checkUserLoginAuth } from '../auth/authCheck'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { bookSeatByUserThunk, getEventSeatById } from '../Slice/EventSlice';
import { store } from '../Slice/store';

function Bookedevent() {
    const eventid = useParams().eventid;
    const dispatch = useDispatch();
    const {eventSeatdataByid,error,loading,msg}= useSelector((state)=>state.event)

    const navigate = useNavigate();
    const [flag,setFlag]=useState(true);

    const bookSeatByUser = (rowid)=>{
        
        let num = prompt("Enter total number of seat ");
        let matchRow = eventSeatdataByid.filter((index)=>{
            if(index.id===rowid){
                return index
            }
        });
         num = parseInt(num);
         let availbleSaet = parseInt( matchRow[0].noOfSeat)
        if(num > availbleSaet){
            alert("select propar num of seat");
        }
        else{
            const details ={
                'rowid':rowid,
                'occupied':num
            }
            console.log(details);
            
            dispatch(bookSeatByUserThunk(details))
            dispatch(getEventSeatById(eventid))
           
        }
       
        
    }
 
    useEffect(()=>{
         checkUserLoginAuth().then((result)=>{
              if(!result){
                  alert("Login First to Booked Event")
                  setFlag(false)
                  navigate('/login')         
              }
         })
         dispatch(getEventSeatById(eventid));
        
     },[flag])

  return (
    <div>
            {
                loading && <h1>Loading..........</h1>
            }
            {
                error && <p>
                    {error}
                </p>
            }{
                msg && <p>{msg}</p>
            }
            <table>
                <thead>
                    <tr><th>Category</th>
                    <th>Availble seat</th>
                    <th>Price</th>
                    <th>action</th></tr>
                </thead>
                <tbody>
                       {
                          eventSeatdataByid &&
                          eventSeatdataByid.map((index)=>(
                             <tr>
                                    <td>{index.eventType}</td>
                                    <td>{index.noOfSeat}</td>
                                    <td>{index.seatPrice}</td>
                                    <td><button type='button'  onClick={()=>{
                                        bookSeatByUser(index.id)
                                    }}>Book Now</button></td>
                            </tr>
                          ))
                       }
                </tbody>
            </table>
    </div>
  )
}

export default Bookedevent