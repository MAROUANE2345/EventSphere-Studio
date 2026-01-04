import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

const Checkout = () => {
    const cart = useSelector((state) => state.data.panier);
    const total = useSelector((state) => state.data.Price);
    
    const [success,setSuccess] = useState("")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [nameErreur,setNameErreur] = useState("")
    const [emailErreur,setEmailErreur] = useState("")
    const [phoneErreur,setPhoneErreur] = useState("")


    const sendCheckout = () => {
    let youCanSend = true;
    if (!name.trim()) {
      setNameErreur("you have to enter the name");
      youCanSend = false;
    } else {
      setNameErreur("");
    }
    if (!email.includes("@")) {
      setEmailErreur("the email must be valid");
      youCanSend = false;
    } else {
      setEmailErreur("");
    }
    if (!phone.trim()) {
      setPhoneErreur("you have to enter the message");
      youCanSend = false;
    } else {
      setPhoneErreur("");
    }
    if (youCanSend) {

      axios.post("https://694d2605ad0f8c8e6e1fda1f.mockapi.io/Brief/Orders",{
         name,
         email,
         phone,
         cartInfo: cart.map(item => ({
           eventName: item.eventName,
           qte: item.qte,
           priceTicket: Number(item.priceTicket),
         })),
         total,
      }).then((res)=>{
        console.log("order send")
      }).catch((err)=>{
        console.log(err)
      })

       axios.post("http://localhost:5678/webhook-test/56f3f223-caa7-4349-8133-f5f643f52d3a",{
         name,
         email,
         phone,
         cartInfo: cart.map(item => ({
           eventName: item.eventName,
           qte: item.qte,
           priceTicket: Number(item.priceTicket),
         })),
         total,
      }).then((res)=>{
        console.log("order send")
      }).catch((err)=>{
        console.log(err)
      })
      toast.success("Order confirmed!");
       
      setName("");
      setEmail("");
      setPhone("");
    }
  };
    return (
        <div className="min-h-[85vh] bg-gray-50 flex justify-center p-10">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-10 space-y-8">

                {/* TITLE */}
                <h1 className="text-3xl font-bold text-indigo-700">
                    Checkout
                </h1>

                {/* ORDER SUMMARY */}
                <div>
                    <h2 className="text-xl font-semibold mb-6">
                        Order Summary
                    </h2>

                    {cart.length === 0 ? (
                        <p className="text-gray-500 text-lg">Your cart is empty</p>
                    ) : (
                        <div className="space-y-4">
                            {cart.map(item => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center border-b pb-3"
                                >
                                    <div>
                                        <p className="font-medium text-gray-800 text-lg truncate max-w-sm">
                                            {item.eventName}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Quantity: {item.qte}
                                        </p>
                                    </div>

                                    <div className="font-bold text-indigo-700 text-lg">
                                        ${Number(item.priceTicket) * item.qte}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* TOTAL */}
                    {cart.length > 0 && (
                        <div className="flex justify-between mt-6 text-xl font-bold">
                            <span>Total</span>
                            <span className="text-indigo-700">
                                ${total}
                            </span>
                        </div>
                    )}
                </div>

                {/* FORM */}
                {/* FORM */}
<div>
    <h2 className="text-xl font-semibold mb-6">
        Order Information
    </h2>

    <form className="space-y-6">
        
        {/* NAME */}
        <div>
            <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-2xl p-5 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {nameErreur && (
                <p className="mt-1 text-sm text-red-500">
                    {nameErreur}
                </p>
            )}
        </div>

        {/* EMAIL */}
        <div>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-2xl p-5 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {emailErreur && (
                <p className="mt-1 text-sm text-red-500">
                    {emailErreur}
                </p>
            )}
        </div>

        {/* PHONE */}
        <div>
            <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded-2xl p-5 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {phoneErreur && (
                <p className="mt-1 text-sm text-red-500">
                    {phoneErreur}
                </p>
            )}
        </div>

        {/* BUTTON */}
        <button
            type="button"
            onClick={sendCheckout}
            className="w-full bg-indigo-700 text-white font-semibold py-4 text-lg rounded-2xl hover:bg-indigo-800 transition"
        >
            Confirm Order
        </button>

        {/* SUCCESS MESSAGE */}
        {success && (
            <p className="text-green-600 text-center font-medium">
                {success}
            </p>
        )}
    </form>
</div>


            </div>
        </div>
    );
};

export default Checkout;
