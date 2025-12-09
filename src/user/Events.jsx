import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEventWithCtaegory } from "../Slice/EventSlice";
import { store } from '../Slice/store'
import { NavLink } from "react-router-dom";




export default function Events() {
  const [events ,setEvents] = useState([]);
  const dispatch = useDispatch();
const {loading,error,eventData} = useSelector((state)=>state.event)

  useEffect(()=>{
    dispatch(getEventWithCtaegory())
    
    console.log(eventData);
  },[])

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

     
      {
        error && <p>{error}</p>
      }
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h1>
           {
        loading && <h2 className="text-2xl font-bold mb-8 text-center">Loading......</h2>
      }
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {  eventData &&  
        eventData.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-xl  overflow-hidden hover:shadow-2xl transition shadow-md"
          >
            {/* Image */}
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-72 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">
                {event.category}
              </span>

              <h2 className="text-2xl font-semibold mt-3">{event.event_title}</h2>

              <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {event.description}
              </p>

              {/* Location */}
              <p className="mt-3 text-sm text-gray-700">
                <strong>Location:</strong> {event.location}
              </p>

              {/* Date & Time */}
              <div className="flex justify-between mt-3 text-sm">
                <p>
                  <strong>Date:</strong> {event.date}
                </p>
                <p>
                  <strong>Time:</strong> {event.time}
                </p>
              </div>

              {/* Seat Info */}
              <div className="mt-4">
                <p className="font-medium mb-1">Available Seats:</p>
                <div className="flex flex-wrap gap-2">
                  
                </div>
              </div>

           

              {/* Button */}
              <NavLink to={'/booking/'+event.id}  className="mt-4 w-full bg-black text-white p-2 rounded-lg hover:bg-gray-800">
                Book Now
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
