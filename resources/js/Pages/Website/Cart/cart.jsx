import React, { useState } from 'react';
import FrontLayout from '@/Layouts/FrontLayout';
import '@/Pages/Home/Home.css'; // Importing CSS for styling
import { router } from '@inertiajs/react';


const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Premium Cotton Poplin (White)',
            price: 450,
            quantity: 5,
            image: '/storage/img/products/f-product-1-1.png',
            specifications: {
                width: '44 inches',
                weight: '120 GSM',
                composition: '100% Cotton'
            }
        },
        {
            id: 2,
            name: 'Silk Chiffon (Printed Floral)',
            price: 1200,
            quantity: 3,
            image: '/storage/img/products/f-product-1-2.png',
            specifications: {
                width: '54 inches',
                weight: '60 GSM',
                composition: '100% Silk'
            }
        },
        {
            id: 3,
            name: 'Linen-Cotton Blend (Natural Beige)',
            price: 800,
            quantity: 4,
            image: '/storage/img/products/f-product-1-3.png',
            specifications: {
                width: '58 inches',
                weight: '180 GSM',
                composition: '55% Linen, 45% Cotton'
            }
        },
        {
            id: 4,
            name: 'Wool Tweed (Charcoal Grey)',
            price: 1500,
            quantity: 2,
            image: '/storage/img/products/f-product-1-4.png',
            specifications: {
                width: '60 inches',
                weight: '320 GSM',
                composition: '100% Wool'
            }
        }
    ]);

    const updateQuantity = (id, type) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: type === 'inc' ? item.quantity + 1 : Math.max(item.quantity - 1, 1)
                    }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };


    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <section className="py-10 bg-gray-50 min-h-screen container">
            <div className="container mx-auto px-4">
                <h3 className="text-xl mb-6">Shopping Cart</h3>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Shopping Cart - Left Side (Full width on mobile, 2/3 on desktop) */}
                    <div className="w-full lg:w-2/3">
                        <div className="overflow-x-auto w-full mb-6 lg:mb-0">
                            <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg">
                                <thead>
                                    <tr className="bg-gray-100 text-left">
                                        <th className="p-4">Product</th>
                                        <th className="p-4">Price</th>
                                        <th className="p-4">Quantity</th>
                                        <th className="p-4">Total</th>
                                        <th className="p-4">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <tr key={item.id} className="border-b">
                                            <td className="p-4 flex items-center gap-4">
                                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                                <div>
                                                    <span className="block font-medium">{item.name}</span>
                                                    <span className="block">
                                                        {item.specifications.width} • {item.specifications.weight}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="p-4">&#8377;{item.price}</td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                                                        onClick={() => updateQuantity(item.id, 'dec')}
                                                    >
                                                        -
                                                    </button>
                                                    <span>{item.quantity}</span>
                                                    <button
                                                        className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded"
                                                        onClick={() => updateQuantity(item.id, 'inc')}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="p-4 font-semibold">&#8377;{item.price * item.quantity}</td>
                                            <td className="p-4">
                                                <button
                                                    className="text-red-600 hover:text-red-800"
                                                    onClick={() => removeItem(item.id)}
                                                >
                                                    ✕
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Cart Summary - Right Side (Full width on mobile, 1/3 on desktop) */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-white p-6 rounded shadow sticky top-4">
                            <h3 className="text-xl mb-4">Cart Summary</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span>Subtotal:</span>
                                    <span>&#8377;{subtotal}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping:</span>
                                    <span className="text-green-600">Free</span>
                                </div>
                                <div className="flex justify-between font-semibold border-t pt-3 mt-3">
                                    <span>Total:</span>
                                    <span>&#8377;{subtotal}</span>
                                </div>
                            </div>
                            {/* <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
                                Proceed to Checkout
                            </button> */}
                            <button
                                onClick={() => router.visit(route('checkout'))}
                                className="mt-2 px-6 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex-1 sm:flex-none">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

Cart.layout = (page) => <FrontLayout>{page}</FrontLayout>;

export default Cart;