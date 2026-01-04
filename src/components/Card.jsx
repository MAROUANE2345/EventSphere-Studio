import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddToCart} from "../lib/reducers/cartSlice";
const Card = ({ id, eventName, category, priceTicket, description, img }) => {
  
    const dispatch = useDispatch()
    const AddPanier = () =>{
        dispatch(AddToCart({
          id,
          eventName,
          category,
          priceTicket,
          description,
          img
        }))
    }
    // useEffect(()=>{
    //      axios.get("https://694d2605ad0f8c8e6e1fda1f.mockapi.io/Brief/Events")
    //      .then((res)=>{
    //         setEvents(res.data)
    //      })
    //      .catch((err)=>{
    //         console.log(err)
    //      })
    // },[])
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden border border-gray-100">
      
      {/* IMAGE */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={img}
          alt={eventName}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">
        
        {/* CATEGORY */}
        <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full">
          {category}
        </span>

        {/* TITLE */}
        <h2 className="text-lg font-bold text-gray-800">
          {eventName}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {description}
        </p>

        {/* FOOTER */}
        <div className="flex items-center justify-between pt-3">
          <span className="text-lg font-bold text-indigo-600">
            ${priceTicket}
          </span>

          <button
          onClick={()=>AddPanier(id)}
          className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
