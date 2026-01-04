import React, { useEffect, useState } from 'react';
import AdminCard from '../../components/Admin/AdminCard';
import axios from 'axios';
import AdminDelete from '../../components/Admin/AdminDelete';

const AdminManage = () => {
  const [events, setEvents] = useState([]);
   
  const handleDelete = (id) => {
  setEvents((prev) => prev.filter((event) => event.id !== id));
};

const handleEdit = (updatedEvent) => {
  setEvents((prev) =>
    prev.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    )
  );
};


  useEffect(() => {
    axios
      .get("https://694d2605ad0f8c8e6e1fda1f.mockapi.io/Brief/Events")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

 
  return (
    <div className="bg-gray-100 h-screen overflow-y-auto px-10 py-8">
      
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Manage Events
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          View, edit and delete all your events
        </p>
      </div>

      {/* CONTENT */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {events.map((index) => (
            <div key={index.id} className="flex justify-center">
              <AdminCard
             id = {index.id}
                image={index.img}
                eventName={index.eventName}
                category={index.category}
                priceTicket={index.priceTicket}
                description={index.description}
                onDelete={handleDelete}
                onEdit={handleEdit}
                 
              />
            </div>
          ))}
        </div>
      </div>
      

    </div>
  );
};

export default AdminManage;
