import React, { useState } from 'react';
import AdminSidebar from '../../components/Admin/AdminSidebar';
import { toast, Toaster } from 'sonner';
import axios from 'axios';
const AdminAdd = () => {
  const [eventName,setEventName] = useState("")
  const [category,setCategory] = useState("")
  const [priceTicket,setPriceTicket] = useState(0)
  const [description,setDescription] = useState("")
  const [img,setImg] = useState("")
   const [fileKey, setFileKey] = useState(Date.now());

  const [eventNameErreur, setEventNameErreur] = useState("");
const [categoryErreur, setCategoryErreur] = useState("");
const [priceErreur, setPriceErreur] = useState("");
const [descriptionErreur, setDescriptionErreur] = useState("");
const [imgErreur, setImgErreur] = useState("");


  
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

const AddEvents = () => {
  let youCanSend = true;

  if (!eventName.trim()) {
    setEventNameErreur("You have to enter an event name");
    youCanSend = false;
    toast.error("You have to enter an event name");
  } else {
    setEventNameErreur("");
  }

  if (!category) {
    setCategoryErreur("You have to select a category");
    youCanSend = false;
    toast.error("You have to select a category");
  } else {
    setCategoryErreur("");
  }

  if (priceTicket <= 0) {
    setPriceErreur("Price must be greater than 0");
    youCanSend = false;
    toast.error("Price must be greater than 0");
  } else {
    setPriceErreur("");
  }

  if (!description.trim()) {
    setDescriptionErreur("You have to enter a description");
    youCanSend = false;
    toast.error("You have to enter a description");
  } else {
    setDescriptionErreur("");
  }

  if (!img) {
    setImgErreur("You have to upload an image");
    youCanSend = false;
    toast.error("You have to upload an image");
  } else {
    setImgErreur("");
    
  }

  if (!youCanSend) return;

  axios.post("https://694d2605ad0f8c8e6e1fda1f.mockapi.io/Brief/Events", {
    eventName,
    category,
    priceTicket,
    description,
    img,
    qte: 1
  })
  .then((response) => {
    console.log("✅ Event added successfully:", response.data);
    toast.success("Event added successfully!");

    setEventName("");
    setCategory("");
    setPriceTicket(0);
    setDescription("");
    setImg("");
    setFileKey(Date.now());
  })
  .catch((error) => {
    console.error("❌ Failed to add event:", error);
    toast.error("Failed to add event");
  });
};



  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* SIDEBAR */}
    

      {/* CONTENT */}
      <div className="flex-1 px-12 py-8">
        
        {/* PAGE HEADER */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-900">
            Add Event
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Create a new event and manage tickets
          </p>
        </div>

        {/* FORM CONTAINER */}
        <div className="bg-white w-full max-w-6xl h-[84vh] rounded-xl shadow-sm border border-gray-200 p-12">
          
          <form className="flex flex-col gap-8">

            {/* EVENT NAME */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Name
              </label>
              <input
                type="text"
                onChange={(event) =>setEventName(event.target.value)}
                value={eventName}
                className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* CATEGORY */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                onChange={(event) =>setCategory(event.target.value)}
                value={category}
                className="w-full border border-gray-300 rounded-lg px-5 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="">Select category</option>
                <option value="music">Music</option>
                <option value="art">Art</option>
                <option value="sport">Sport</option>
                <option value="theatre">Theatre</option>
                <option value="festival">Festival</option>
                <option value="cinema">Cinema</option>

              </select>
            </div>

            {/* TICKET PRICE */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ticket Price
              </label>
              <input
                type="number"
                onChange={(event) =>setPriceTicket(event.target.value)}
                value={priceTicket}
                className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                rows="6"
                onChange={(event) =>setDescription(event.target.value)}
                value={description}
                className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            {/* IMAGE */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image
              </label>
              <input
                type="file"
                key={fileKey}
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
                        setImg(url);
                        toast.success("Image uploaded successfully");
                      } else {
                        console.error("❌ Upload failed, keeping old image");
                        toast.error("Image upload failed — keeping old image");
                      }
                    }}
                
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white"
              />
            </div>

            {/* ACTION BUTTON */}
            <div className="flex justify-end pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={AddEvents}
                
                className="bg-black text-white px-12 py-3 cursor-pointer rounded-lg font-medium hover:bg-gray-900 transition"
              >
                Add Event
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};

export default AdminAdd;
