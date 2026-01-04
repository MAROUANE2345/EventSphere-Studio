// layouts/AdminLayout.jsx

import AdminSidebar from "./AdminSidebar";


const AdminLayout = ({ children }) => {
  return (
    <div className="flex ">
      {/* SIDEBAR */}
      <AdminSidebar />

      {/* CONTENT */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
