import React, { useState } from 'react';
import FrontLayout from '@/Layouts/FrontLayout';
import '@/Pages/Home/Home.css'; // Importing CSS for styling

const Checkout = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Premium Cotton Poplin', qty: 4, price: 450, image: '/storage/img/products/f-product-1-1.png' },
        { id: 2, name: 'Silk Chiffon Floral', qty: 2, price: 1200, image: '/storage/img/products/f-product-1-2.png' },
    ]);

    const subtotal = cartItems.reduce((acc, i) => acc + i.qty * i.price, 0);
    const shipping = 0;
    const total = subtotal + shipping;

    return (
        <section className="py-8 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-6">
                {/* 📦 Billing & Payment Form */}
                <form className="w-full lg:w-2/3 bg-white p-6 rounded shadow">
                    <h2 className="text-lg font-semibold mb-4">Billing & Payment Details</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium text-gray-600 mb-1">Full Name</label>
                            <input type="text" className=" w-full border border-gray-300 rounded px-3 py-2" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-600 mb-1">Email Address</label>
                            <input type="email" className=" w-full border border-gray-300 rounded px-3 py-2" placeholder="you@example.com" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block font-medium text-gray-600 mb-1">Shipping Address</label>
                            <input type="text" className=" w-full border border-gray-300 rounded px-3 py-2" placeholder="1234 Main St" />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-600 mb-1">City</label>
                            <input type="text" className=" w-full border border-gray-300 rounded px-3 py-2" placeholder="City" />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-600 mb-1">Postal Code</label>
                            <input type="text" className=" w-full border border-gray-300 rounded px-3 py-2" placeholder="ZIP / Postal" />
                        </div>
                    </div>

                    <h3 className="text-lg font-semibold mt-6 mb-3">Payment Info</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                        <div className="md:col-span-2">
                            <label className="block font-medium text-gray-600 mb-1">Card Number</label>
                            <input type="text" className=" w-full border border-gray-300 rounded px-3 py-2" placeholder="•••• •••• •••• ••••" />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-600 mb-1">Expiry Date</label>
                            <input type="text" className=" w-full border border-gray-300 rounded px-3 py-2" placeholder="MM/YY" />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-600 mb-1">CVV</label>
                            <input type="text" className=" w-full border border-gray-300 rounded px-3 py-2" placeholder="123" />
                        </div>
                    </div>

                    <button type="submit" className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition ">
                        Place Order
                    </button>
                </form>

                {/* 🧾 Order Summary */}
                <aside className="w-full lg:w-1/3 bg-white p-3 rounded shadow h-fit">
                    <h2 className="text-lg font-semibold mb-3">Order Summary</h2>
                    <ul className="p-0">
                        {cartItems.map(item => (
                            <li key={item.id} className="flex items-center">
                                <img src={item.image} alt="" className="w-12 h-12 object-cover rounded" />
                                <div className="ml-3">
                                    <p className="font-medium ">{item.name}</p>
                                    <p className="">{item.qty} × ₹{item.price}</p>
                                </div>
                                <p className="ml-auto font-medium ">₹{item.qty * item.price}</p>
                            </li>
                        ))}
                    </ul>
                    <hr className="my-3" />
                    <div className="flex justify-between  mb-1">
                        <span>Subtotal</span>
                        <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between  mb-1">
                        <span>Shipping</span>
                        <span className="text-green-600">Free</span>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between font-semibold text-black">
                        <span>Total</span>
                        <span>₹{total}</span>
                    </div>
                </aside>
            </div>
        </section>
    );
};

Checkout.layout = page => <FrontLayout>{page}</FrontLayout>;
export default Checkout;