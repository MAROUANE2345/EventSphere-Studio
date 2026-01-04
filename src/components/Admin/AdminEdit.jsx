import React, { useState } from "react";
import "./AdminEdit.css";
import axios from "axios";
import { toast, Toaster } from 'sonner';
const AdminEdit = ({ stopEditPopUp, onEdit, id,image,eventName,category,priceTicket,description }) => {
    const [events,setEvents] = useState({
       eventName : eventName,
       category : category,
       priceTicket: priceTicket,
       description : description,
       img : "",
    })

    const EditEvents = (id) =>{
      axios.put(`https://694d2605ad0f8c8e6e1fda1f.mockapi.io/Brief/Events/${id}`,events)
      .then((res)=> {
        console.log("Edit done")
        onEdit(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
    }

const UploadToCloudinary = async (file) => {
  console.log("🔵 Starting Cloudinary upload…");
  console.log("📁 File received:", file);

  if (!file) {
    console.error("❌ No file provided to uploadImageToCloudinary");
    toast.error("No file selected");
    return null;
  }

  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "EventSphere");

    // ✅ FINAL FOLDER NAME
    formData.append("folder", "Events");

    console.log("📤 Sending upload request to Cloudinary...");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dtpjdj7m4/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Cloudinary upload failed:", response.status, errorText);
      toast.error("Cloudinary upload failed");
      return null;
    }

    const data = await response.json();

    if (!data.secure_url) {
      console.error("❌ secure_url missing:", data);
      toast.error("Image upload failed");
      return null;
    }

    console.log("🟢 Upload success:", data.secure_url);
    return data.secure_url;

  } catch (error) {
    console.error("💥 Unexpected Cloudinary error:", error);
    toast.error("Unexpected error during upload");
    return null;
  }
};
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">

      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-black opacity-50 transition-opacity duration-300"
        onClick={stopEditPopUp}
      ></div>

      {/* POPUP */}
      <div
        className="relative w-140 bg-white rounded-xl shadow-lg p-6
                   transform transition-all duration-300 ease-out
                   scale-95 opacity-0 animate-popup-in"
      >
        {/* HEADER */}
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          Edit Event
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Update the event information below.
        </p>

        {/* FORM */}
        <div className="space-y-4 mb-6">
          
          {/* EVENT NAME */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Name
            </label>
            <input
              type="text"
              className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter event name"
              value={events.eventName}
              onChange={(e) => setEvents({...events,eventName:e.target.value})}
            />
          </div>

          {/* CATEGORY & PRICE */}
          <div className="grid grid-cols-2 gap-4">
            <div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Category
  </label>

  <select
    className="w-full h-10 px-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    value={events.category}
    onChange={(e) =>
      setEvents({ ...events, category: e.target.value })
    }
  >
    <option value="" disabled>
      Select a category
    </option>
     <option value="music">Music</option>
                <option value="art">Art</option>
                <option value="sport">Sport</option>
                <option value="theatre">Theatre</option>
                <option value="festival">Festival</option>
                <option value="cinema">Cinema</option>
  </select>
</div>


            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <input
                type="number"
                className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="DH"
                value={events.priceTicket}
              onChange={(e) => setEvents({...events,priceTicket:e.target.value})}

              />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Event description"
              value={events.description}
              onChange={(e) => setEvents({...events,description:e.target.value})}

            ></textarea>
          </div>

          {/* IMAGE */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="file"
              className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://image..."
              
              onChange={async (e) => {
                                    const file = e.target.files?.[0];
                                    if (!file) {
                                      console.log("No file selected, keeping current image");
                                      return; // Keep existing image
                                    }
                              
                                    console.log("📸 New image selected, uploading...");
                                    const url = await UploadToCloudinary(file);
                              
                                    if (url) {
                                      console.log("✅ Image uploaded successfully:", url);
                                      setEvents({...events,img:url});
                                      toast.success("Image uploaded successfully");
                                    } else {
                                      console.error("❌ Upload failed, keeping old image");
                                      toast.error("Image upload failed — keeping old image");
                                    }
                                  }}
            />
          </div>

        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-4">
          <button
            onClick={stopEditPopUp}
            className="px-5 py-2 text-sm bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
          onClick={() => {
            EditEvents(id);
            stopEditPopUp()
          }}
            className="px-5 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
};

export default AdminEdit;
