import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { Dec, DeleteFromCart, DisplayCart, Inc  } from '../lib/reducers/cartSlice';
import { FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Carte = () => {
    const cart = useSelector((state) => state.data.panier);
    const Show = useSelector((state) => state.data.Show);
    const dispatch = useDispatch();

    const CloseCart = () => {
        dispatch(DisplayCart());
    };

    const inc = (id) => {
        dispatch(Inc(id));
    };

    const dec = (id) => {
        dispatch(Dec(id));
    };

    const Total = useSelector((state) => state.data.Price);

    const DeleteCart = (id) => {
        dispatch(DeleteFromCart(id))
    }
    return (
        <AnimatePresence>
            {Show && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'tween', duration: 0.3 }}
                    className="fixed top-0 right-0 h-full w-96 bg-white shadow-xl z-50 flex flex-col"
                >
                    {/* Header */}
                    <div className="bg-indigo-700 text-white p-6 text-2xl font-bold flex justify-between items-center">
                        <span>My Cart</span>
                        <span onClick={CloseCart} className="cursor-pointer">X</span>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 p-6 overflow-y-auto">
                        {cart.length === 0 ? (
                            <p className="text-gray-500 text-center py-6">Your cart is empty</p>
                        ) : (
                            <ul className="space-y-4">
                                {cart.map(item => (
                                    <motion.li
                                        key={item.id}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex items-center gap-4 p-4 bg-indigo-50 rounded-lg shadow-sm"
                                    >
                                        {/* IMAGE */}
                                        <img
                                            src={item.img}
                                            alt={item.eventName}
                                            className="w-14 h-14 rounded-lg object-cover"
                                        />

                                        {/* INFO */}
                                        <div className="flex-1 min-w-0">
                                            <p className="font-semibold text-gray-800 truncate whitespace-nowrap overflow-hidden">
                                                 {item.eventName}
                                            </p>
                                            <p className="text-sm text-gray-600">{item.category}</p>
                                            <p className="font-bold text-indigo-700">
                                                ${Number(item.priceTicket) * item.qte}
                                            </p>
                                        </div>

                                        {/* ACTIONS */}
                                        <div className="flex items-center gap-3">
                                            <div className="flex items-center bg-indigo-100 rounded-2xl px-2">
                                                <button
                                                    onClick={() => dec(item.id)}
                                                    className="px-1 text-indigo-700 font-bold cursor-pointer"
                                                >
                                                    −
                                                </button>
                                                <span className="px-2 font-semibold text-indigo-700">
                                                    {item.qte}
                                                </span>
                                                <button
                                                    onClick={() => inc(item.id)}
                                                    className="px-1 text-indigo-700 font-bold cursor-pointer "
                                                >
                                                    +
                                                </button>
                                            </div>

                                            {/* DELETE ICON (UI ONLY) */}
                                            <button
                                                className="text-gray-400 hover:text-red-500 transition cursor-pointer "
                                                title="Remove item"
                                                onClick={()=>DeleteCart(item.id)}
                                            >
                                                <FiTrash2 size={16} />
                                            </button>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Footer */}
                   {cart.length > 0 && (
    <div className="bg-indigo-700 p-4 flex items-center justify-between">
        
        <Link
           to="/checkout"
           onClick={CloseCart}
            className="bg-white cursor-pointer text-indigo-700 font-semibold px-5 py-2 rounded-lg hover:bg-indigo-100 transition inline-block"
         >
    Go To Checkout
      </Link>


        <div className="text-white font-bold text-lg">
            Total: {Total}$
        </div>

    </div>
)}

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Carte;
