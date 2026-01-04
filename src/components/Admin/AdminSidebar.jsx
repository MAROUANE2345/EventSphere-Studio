import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.css'
const AdminSidebar = () => {
  return (
    <div className="h-screen w-[250px] bg-black text-white flex flex-col justify-between p-6">
      
      {/* TOP */}
      <div>
        <h1 className="text-2xl font-bold mb-10 flex items-center gap-2">
          📊 Dashboard
        </h1>

        <nav className="flex flex-col gap-4">
          <Link
            to="/admin/add"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            ➕ Add Events
          </Link>

          <Link
            to="/admin/manage"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            🛠️ Manage Events
          </Link>

          <Link
            to="/admin/orders"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            📦 Orders List
          </Link>
        </nav>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col gap-4 border-t border-gray-700 pt-6">
        <Link
          to="/events"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition"
        >
          🚪 Exit Dashboard
        </Link>

        <Link
          to="/admin/login"
          className="flex items-center gap-2 text-red-400 hover:text-red-500 transition"
        >
          🔓 Log Out
        </Link>
      </div>

    </div>
  );
};

export default AdminSidebar;
