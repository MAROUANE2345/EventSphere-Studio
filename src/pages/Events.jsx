import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filters,setFilters] = useState("")
  const getFilters = (event) => {
    setFilters(event.target.value)
  }
  useEffect(() => {
    axios
      .get("https://694d2605ad0f8c8e6e1fda1f.mockapi.io/Brief/Events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      
      {/* PAGE TITLE */}
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Upcoming <span className="text-indigo-600">Events</span>
      </h1>

      {/* FILTER */}
      <div className="max-w-7xl mx-auto mb-8 flex justify-center">
        <select
        onChange={(event) => getFilters(event)}
          className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">All Categories</option>
          <option value="music">Music</option>
          <option value="sport">Sport</option>
          <option value="art">Art</option>
          <option value="theatre">Theatre</option>
            <option value="festival">Festival</option>
            <option value="cinema">Cinema</option>
        </select>
      </div>

      {/* EVENTS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.filter((index)=>{
            if( filters === "")
                return true
            return  index.category.toLowerCase().includes(filters.toLowerCase())
        })
        
        
        
        .map((event) => (
          <Card
            key={event.id}
            id={event.id}
            img={event.img}
            eventName={event.eventName}
            category={event.category}
            priceTicket={event.priceTicket}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
