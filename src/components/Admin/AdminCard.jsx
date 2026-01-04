import React from 'react';
import AdminDelete from './AdminDelete';
import { useState } from 'react';
import AdminEdit from './AdminEdit';
import { desc } from 'framer-motion/client';
const AdminCard = ({ id,onDelete,onEdit, image, eventName, category, priceTicket, description}) => {
    const [DeletePopUp,setDeletePopUp] = useState(false)
    const [EditPopUp,setEditPopUp] = useState(false)

     

  return (
    <div className="flex w-175 h-65 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition">
      
      {/* IMAGE */}
      <img
        src={image}
        alt={eventName}
        className="w-55 h-full object-cover bg-gray-100"
      />

      {/* CONTENT */}
      <div className="flex flex-col justify-between flex-1 p-6">
        
        {/* TEXT */}
        <div className="space-y-3">
          <p className="text-xl font-semibold text-gray-900 truncate">
            {eventName}
          </p>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">
              {category}
            </span>

            <span className="font-semibold text-gray-900">
              {priceTicket} DH
            </span>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
             {description}
          </p>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3">
          <button onClick={() =>setEditPopUp(true)} className="px-5 py-2 text-sm border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
            Edit
          </button>
          <button  onClick={() =>setDeletePopUp(true)} className="px-5 py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-900 transition">
            Delete
          </button>
        </div>

      </div>
        {DeletePopUp &&  <div className='flex fixed inset-0 justify-center items-center'> <AdminDelete id={id} onDelete={onDelete} stopPopUp={() => setDeletePopUp(false)} /> </div> }
        {EditPopUp && <div className='flex fixed inset-0 justify-center items-center' > <AdminEdit id={id} onEdit={onEdit} image={image} eventName={eventName} priceTicket={priceTicket} description={description} category={category} stopEditPopUp={() =>setEditPopUp(false)} />  </div> }
    </div>
  );
};

export default AdminCard;
