import React from 'react';
import './AdminDelete.css';
import axios from 'axios';
const AdminDelete = ({stopPopUp ,onDelete, id}) => {
    const DeleteEvents = (id) => {
        axios.delete(`https://694d2605ad0f8c8e6e1fda1f.mockapi.io/Brief/Events/${id}`)
        .then((res) => {
            console.log("ok")
            onDelete(id);
        })
        .catch((err) => {
            console.log(err)
        })
    }
  return (
    <>
      
        <div className="fixed inset-0 flex items-center justify-center z-50">
          
          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300"></div>

          {/* POPUP */}
          <div className="flex flex-col gap-0 w-130 bg-white rounded-xl shadow-lg p-6 
                          transform transition-all duration-300 ease-out
                          scale-95 opacity-0 animate-popup-in">
            
            {/* TITLE */}
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Delete Event
            </h2>

            {/* MESSAGE */}
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to delete this event? This action cannot be undone.
            </p>

            {/* ACTIONS */}
            <div className="flex justify-end gap-4">
              <button
                onClick={stopPopUp}
                className="px-5 py-2 text-sm bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                 onClick={() => {
                    DeleteEvents(id);
                    stopPopUp();
                 }}
                className="px-5 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>

          </div>
        </div>
      
    </>
  );
};

export default AdminDelete;
