import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";

const Login = () => {
    const adminEmail = useSelector((state)=> state.data.adminEmail)
    const adminPassword = useSelector((state)=> state.data.adminPassword)


    const [emailInput,setEmailInput] = useState("")
    const [passwordInput,setPasswordInput] = useState("")

    const navigate = useNavigate()
    const GoToAdmin = () => {
        if(adminEmail == emailInput && adminPassword == passwordInput){
             navigate("/admin/add")
        }else{
            toast.error("Email or Password are invalid")
        }
    }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-4">
      
      {/* CARD */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 p-10">
        
        {/* HEADER */}
        <div className="mb-8 text-center">
          <span className="inline-block mb-3 px-4 py-1 text-xs font-semibold rounded-full bg-black text-white">
            ADMIN ACCESS
          </span>

          <h1 className="text-3xl font-bold text-gray-900">
            Admin Login
          </h1>

          <p className="text-gray-500 mt-2">
            Restricted area – authorized personnel only
          </p>
        </div>

        {/* FORM */}
        <div className="space-y-6">
          
          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Admin Email
            </label>
            <input
              type="email"
              placeholder="admin@email.com"
              onChange={(e)=>setEmailInput(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4 text-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              onChange={(e)=>setPasswordInput(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4 text-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* BUTTON */}
          <button
          onClick={GoToAdmin}
            className="w-full cursor-pointer bg-black text-white font-semibold py-4 text-lg rounded-xl hover:bg-gray-900 transition"
          >
            
            Enter Admin Panel
          </button>
        </div>

        {/* FOOTER */}
        <div className="mt-8 text-center text-sm text-gray-500">
          This login is reserved for administrators only
        </div>

      </div>
    </div>
  );
};

export default Login;
