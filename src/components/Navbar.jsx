import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DisplayCart } from "../lib/reducers/cartSlice";
const Navbar = () => {
    const dispatch = useDispatch()

    const ShowCart = () => {
        dispatch(DisplayCart())
    }
    const NbPanier = useSelector((state) => state.data.panier?.length ?? 0)
  return (
    <nav className="w-full h-16 bg-white shadow-md px-6 flex items-center justify-between">
      
      {/* LOGO */}
      <h1 className="text-xl font-bold text-indigo-700">
        EventsSphere
      </h1>

      {/* NAV LINKS */}
      <div className="flex items-center gap-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <Link to="/events" className="hover:text-indigo-700 transition">
          Events
        </Link>
        <Link to="/contact" className="hover:text-indigo-700 transition">
          Contact
        </Link>
        <Link to="/checkout" className="hover:text-indigo-700 transition">
          Checkout
        </Link>
      </div>

      {/* RIGHT ACTIONS */}
      <div className="flex items-center gap-4">
        
        {/* CART */}
        <div className="relative cursor-pointer">
          <span onClick={ShowCart} className="text-gray-700 cursor-pointer ">🛒</span>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
             {NbPanier}
          </span>
        </div>

        {/* ADMIN */}
        <Link
          to="/admin/login"
          className="px-4 py-1.5 bg-indigo-700 text-white rounded-lg text-sm hover:bg-indigo-800 transition"
        >
          Admin
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
