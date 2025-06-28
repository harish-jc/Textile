import React from 'react';
import { Link } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';
import '@/Pages/Home/Home.css';

const Collection = ({ title, products }) => {
    return (
        <section className="py-6 bg-white min-h-screen">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                    <div className="text-sm">
                        <Link href="/" className="hover:text-blue-600">Home</Link> /
                        <span className="text-gray-800 ml-1">{title} Collection</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-sm text-gray-600 mr-2">Sort by :</span>
                        <select className="border p-2 rounded text-sm">
                            <option>Recommended</option>
                            <option>Price : Low to High</option>
                            <option>Price : High to Low</option>
                            <option>Newest First</option>
                        </select>
                    </div>
                </div>

                {/* Main Layout */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-1/5">
                        <div className="bg-white p-4 rounded mb-4 border-gray-200">
                            <h3 className="font-semibold text-xl mb-4 border-b pb-2 uppercase">Filters</h3>

                            {/* Price */}
                            <div className="border-b pb-2 mb-4">
                                <details open className="group">
                                    <summary className="flex justify-between items-center cursor-pointer list-none">
                                        <h4 className="font-medium text-base">Price</h4>
                                        <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="mt-2 space-y-2 pl-2">
                                        {['Under ₹500', '₹500 - ₹1000', '₹1000 - ₹2000', '₹2000+'].map((range) => (
                                            <label key={range} className="flex items-center">
                                                <input type="checkbox" className="mr-2 rounded text-blue-600 focus:ring-blue-500" />
                                                <span className="text-sm">{range}</span>
                                            </label>
                                        ))}
                                    </div>
                                </details>
                            </div>

                            {/* Natural Fabrics */}
                            <div className="border-b pb-2 mb-4">
                                <details open className="group">
                                    <summary className="flex justify-between items-center cursor-pointer list-none">
                                        <h4 className="font-medium text-base">Natural Fabrics</h4>
                                        <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="mt-2 space-y-2 pl-2">
                                        {['Cotton', 'Silk', 'Jute', 'Linen', 'Wool'].map((fabric) => (
                                            <label key={fabric} className="flex items-center">
                                                <input type="checkbox" className="mr-2 rounded text-blue-600 focus:ring-blue-500" />
                                                <span className="text-sm">{fabric}</span>
                                            </label>
                                        ))}
                                    </div>
                                </details>
                            </div>

                            {/* Synthetic Fabrics */}
                            <div className="border-b pb-2">
                                <details open className="group">
                                    <summary className="flex justify-between items-center cursor-pointer list-none">
                                        <h4 className="font-medium text-base">Synthetic Fabrics</h4>
                                        <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="mt-2 space-y-2 pl-2">
                                        {['Polyester', 'Nylon', 'Rayon'].map((fabric) => (
                                            <label key={fabric} className="flex items-center">
                                                <input type="checkbox" className="mr-2 rounded text-blue-600 focus:ring-blue-500" />
                                                <span className="text-sm">{fabric}</span>
                                            </label>
                                        ))}
                                    </div>
                                </details>
                            </div>
                        </div>
                    </aside>

                    {/* Products Grid */}
                    <div className="w-full lg:w-4/5 p-4">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-4">
                            <h1 className="text-base md:text-base font-bold mb-2 md:mb-0 uppercase">
                                {title} COLLECTIONS
                            </h1>
                            {/* Taneira-style Minimal Search Bar */}
                            {/* Clean, Responsive Search Bar */}
                            <div className="">
                                <div className="h-10 flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white shadow-sm focus-within:ring-2 focus-within:ring-yellow-600">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="flex-grow bg-transparent text-sm placeholder-gray-500 px-2 py-1 
             focus:outline-none focus:ring-0 focus:border-transparent border-none"
                                        style={{
                                            outline: 'none',
                                            boxShadow: 'none',
                                            WebkitBoxShadow: 'none',
                                            WebkitTapHighlightColor: 'transparent', // for mobile
                                        }}
                                    />


                                    <button className="text-gray-600 hover:text-yellow-700">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <circle cx="11" cy="11" r="8" />
                                            <path d="m21 21-4.3-4.3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>


                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="group relative transition-transform duration-300 ease-out hover:scale-[1.05]"
                                >
                                    <Link href="#" className="block">
                                        <div className="bg-gray-100 overflow-hidden relative pb-[133%] rounded-tl-[15px] rounded-br-[15px]">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="absolute w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="mt-3">
                                            <p className="font-medium text-gray-900">{product.name}</p>
                                            <div className="mt-1">
                                                {product.originalPrice && (
                                                    <span className="text-gray-400 text-sm line-through ml-2 pr-2">
                                                        {product.originalPrice}
                                                    </span>
                                                )}
                                                <span className="text-gray-900 text-xl font-bold">{product.price}</span>
                                            </div>
                                        </div>
                                    </Link>
                                    <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition opacity-0 group-hover:opacity-100">
                                        <i className="far fa-heart text-gray-700"></i>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Collection.layout = (page) => <FrontLayout>{page}</FrontLayout>;
export default Collection;
