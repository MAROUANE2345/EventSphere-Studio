import React, { useState } from 'react';
import { toast } from 'sonner';
import axios from 'axios';
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameErreur, setNameErreur] = useState("");
  const [emailErreur, setEmailErreur] = useState("");
  const [messageErreur, setMessageErreur] = useState("");

  const sendCheckout = (e) => {
    e.preventDefault();

    let youCanSend = true;

    if (!name.trim()) {
      setNameErreur("You have to enter your name");
      youCanSend = false;
    } else {
      setNameErreur("");
    }

    if (!email.includes("@")) {
      setEmailErreur("Email must be valid");
      youCanSend = false;
    } else {
      setEmailErreur("");
    }

    if (!message.trim()) {
      setMessageErreur("You have to enter a message");
      youCanSend = false;
    } else {
      setMessageErreur("");
    }

    if (youCanSend) {
      

        axios.post("http://localhost:5678/webhook-test/dcd09f6c-fb32-4700-bf00-3c84037be384", {
    name,
    email,
    message
  })
  .then(() => {
    toast.success("Message sent successfully!");
     
  })
  .catch((err) => {
    console.log(err);
    toast.error("Failed to send message");
  });

      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="min-h-[85vh] bg-gray-50 flex justify-center items-center px-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-10 space-y-8">

        {/* TITLE */}
        <div>
          <h1 className="text-3xl font-bold text-indigo-700">
            Contact Us
          </h1>
          <p className="text-gray-500 mt-2">
            Have a question or need help? Send us a message.
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-6" onSubmit={sendCheckout}>

          {/* NAME */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full border rounded-xl p-4 text-lg focus:outline-none focus:ring-2 ${
                nameErreur ? "border-red-500 focus:ring-red-500" : "focus:ring-indigo-500"
              }`}
            />
            <p className="text-red-500 text-sm min-h-[20px] mt-1">
              {nameErreur}
            </p>
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full border rounded-xl p-4 text-lg focus:outline-none focus:ring-2 ${
                emailErreur ? "border-red-500 focus:ring-red-500" : "focus:ring-indigo-500"
              }`}
            />
            <p className="text-red-500 text-sm min-h-[20px] mt-1">
              {emailErreur}
            </p>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`w-full border rounded-xl p-4 text-lg resize-none focus:outline-none focus:ring-2 ${
                messageErreur ? "border-red-500 focus:ring-red-500" : "focus:ring-indigo-500"
              }`}
            />
            <p className="text-red-500 text-sm min-h-[20px] mt-1">
              {messageErreur}
            </p>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-indigo-700 text-white font-semibold py-4 text-lg rounded-xl hover:bg-indigo-800 transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </div>
  );
};

export default Contact;
