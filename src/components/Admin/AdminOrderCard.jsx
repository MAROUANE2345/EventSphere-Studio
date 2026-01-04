import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AdminOrderCard = ({ name, email, phone, items }) => {
  const [viewDetail, setViewDetail] = useState(false);

  return (
    <>
      {/* CARD */}
      <div className="w-full bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col gap-4">
        
        {/* HEADER */}
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-lg font-semibold text-gray-900">
            Customer Order
          </h3>
          <span className="text-sm text-gray-500">
            📦 New
          </span>
        </div>

        {/* INFO */}
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <span className="font-medium text-gray-900">Name:</span> {name}
          </p>
          <p>
            <span className="font-medium text-gray-900">Email:</span> {email}
          </p>
          <p>
            <span className="font-medium text-gray-900">Phone:</span> {phone}
          </p>
        </div>

        {/* ACTION */}
        <div className="flex justify-end pt-4 border-t">
          <button
            onClick={() => setViewDetail(true)}
            className="px-5 py-2 text-sm font-medium rounded-lg border border-black text-black hover:bg-black hover:text-white transition"
          >
            View Details
          </button>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {viewDetail && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setViewDetail(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* MODAL CONTENT */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 flex items-center justify-center"
            >
              <div className="bg-white w-full max-w-2xl rounded-xl shadow-xl p-8">
                
                {/* MODAL HEADER */}
                <div className="flex justify-between items-center border-b pb-4 mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Order Details
                  </h2>
                  <button
                    onClick={() => setViewDetail(false)}
                    className="text-gray-500 hover:text-black transition"
                  >
                    ✕
                  </button>
                </div>

                {/* CUSTOMER INFO */}
                <div className="mb-6 space-y-1 text-sm">
                  <p><strong>Name:</strong> {name}</p>
                  <p><strong>Email:</strong> {email}</p>
                  <p><strong>Phone:</strong> {phone}</p>
                </div>

                {/* ITEMS */}
                <div className="space-y-4 max-h-[300px] overflow-y-auto">
                  {!items   ? (
                    <p className="text-gray-500 text-sm">
                      No items in this order
                    </p>
                  ) : (
                    items.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center border rounded-lg p-4"
                      >
                        <div>
                          <p className="font-medium text-gray-900">
                            {item.eventName}
                          </p>
                          <p className="text-sm text-gray-500">
                            Quantity: {item.qte}
                          </p>
                        </div>

                        <div className="font-semibold text-black">
                          ${item.priceTicket * item.qte}
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* FOOTER */}
                <div className="flex justify-end mt-8">
                  <button
                    onClick={() => setViewDetail(false)}
                    className="px-6 py-2 rounded-lg bg-black text-white hover:bg-gray-900 transition"
                  >
                    Close
                  </button>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdminOrderCard;
