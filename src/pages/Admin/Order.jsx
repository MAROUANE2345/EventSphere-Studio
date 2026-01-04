import React, { useEffect, useState } from 'react';
import AdminSidebar from '../../components/Admin/AdminSidebar';
import AdminOrderCard from '../../components/Admin/AdminOrderCard';
import axios from 'axios';

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://694d2605ad0f8c8e6e1fda1f.mockapi.io/Brief/Orders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      

      {/* CONTENT */}
      <div className="flex-1 px-10 py-8">
        
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Orders List
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            View all customer orders
          </p>
        </div>

        {/* ORDERS */}
        {orders.length === 0 ? (
          <div className="bg-white rounded-xl p-10 text-center text-gray-500">
            No orders yet
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {orders.map((order) => (
              <AdminOrderCard
                key={order.id}
                name={order.name}
                email={order.email}
                phone={order.phone}
                items={order.cartInfo}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Order;
