import React, { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';
import '@/Pages/Home/Home.css';

const Products = ({ title }) => {
    const { url } = usePage();
    const [activeFilter, setActiveFilter] = useState(null);

    // Parse filter from URL
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const filter = params.get('filter');
        setActiveFilter(filter);
    }, [url]);

    // All products data with categories
    const allProducts = [
        { id: 1, name: 'Cotton (Handloom)', price: '₹550', originalPrice: '₹650', image: '/storage/img/products/f-product-1-1.png', categories: ['cotton', 'natural'] },
        { id: 2, name: 'Silk Chiffon (Printed)', price: '₹1,350', image: '/storage/img/products/f-product-1-2.png', categories: ['silk', 'natural'] },
        { id: 3, name: 'Linen-Cotton Blend', price: '₹850', originalPrice: '₹978', image: '/storage/img/products/f-product-1-3.png', categories: ['cotton', 'linen', 'natural'] },
        { id: 4, name: 'Wool Tweed (Heavyweight)', price: '₹1,800', image: '/storage/img/products/f-product-1-4.png', categories: ['wool', 'natural'] },
        { id: 5, name: 'Polyester Georgette (Floral)', price: '₹650', image: '/storage/img/products/f-product-1-5.png', categories: ['polyester', 'synthetic'] },
        { id: 6, name: 'Stretch Denim (Dark Wash)', price: '₹750', image: '/storage/img/products/f-product-1-6.png', categories: ['cotton', 'synthetic'] },
        { id: 7, name: 'Velvet Jacquard (Embroidered)', price: '₹2,200', originalPrice: '₹2550', image: '/storage/img/products/f-product-1-7.png', categories: ['silk', 'natural'] },
        { id: 8, name: 'Organic Cotton (GOTS Certified)', price: '₹600', image: '/storage/img/products/f-product-1-8.png', categories: ['cotton', 'natural'] },
        { id: 9, name: 'Cotton (Blended)', price: '₹1,100', image: '/storage/img/products/f-product-1-9.png', categories: ['cotton', 'natural'] },
        { id: 10, name: 'Cotton (Organic)', price: '₹1,250', image: '/storage/img/products/f-product-1-10.png', categories: ['cotton', 'natural'] },
        { id: 11, name: 'Cotton (Khadi)', price: '₹700', originalPrice: '₹1050', image: '/storage/img/products/f-product-1-11.png', categories: ['cotton', 'natural'] },
        { id: 12, name: 'Cotton (Malkha Cotton)', price: '₹3,000', image: '/storage/img/products/f-product-1-12.png', categories: ['cotton', 'natural'] },
        { id: 13, name: 'Cotton (Pulugurtha Cotton)', price: '₹1,600', image: '/storage/img/products/f-product-1-1.png', categories: ['cotton', 'natural'] },
        { id: 14, name: 'Pure Silk', price: '₹500', image: '/storage/img/products/f-product-1-2.png', categories: ['silk', 'natural'] },
        { id: 15, name: 'Raw Silk', price: '₹900', image: '/storage/img/products/f-product-1-3.png', categories: ['silk', 'natural'] },
        { id: 16, name: 'Art Silk', price: '₹950', image: '/storage/img/products/f-product-1-4.png', categories: ['silk', 'natural'] },
        { id: 17, name: 'Mulberry Silk', price: '₹1,100', image: '/storage/img/products/f-product-1-5.png', categories: ['silk', 'natural'] },
        { id: 18, name: 'Merino wool', price: '₹1,400', image: '/storage/img/products/f-product-1-6.png', categories: ['wool', 'natural'] },
        { id: 19, name: 'Cashmere wool', price: '₹450', image: '/storage/img/products/f-product-1-7.png', categories: ['wool', 'natural'] },
        { id: 20, name: 'Tweed wool', price: '₹2,500', image: '/storage/img/products/f-product-1-8.png', categories: ['wool', 'natural'] },
        { id: 21, name: 'Jute-Cotton', price: '₹1,300', image: '/storage/img/products/f-product-1-9.png', categories: ['jute', 'cotton', 'natural'] },
        { id: 22, name: 'Jute-Silk', price: '₹600', image: '/storage/img/products/f-product-1-10.png', categories: ['jute', 'silk', 'natural'] },
        { id: 23, name: 'Pure Linen', price: '₹800', image: '/storage/img/products/f-product-1-11.png', categories: ['linen', 'natural'] },
        { id: 24, name: 'Linen-cotton', price: '₹700', image: '/storage/img/products/f-product-1-12.png', categories: ['linen', 'cotton', 'natural'] },
        { id: 25, name: 'Danask Linen', price: '₹1,200', image: '/storage/img/products/f-product-1-1.png', categories: ['linen', 'natural'] },
        { id: 26, name: 'Venetian linen', price: '₹1,700', image: '/storage/img/products/f-product-1-2.png', categories: ['linen', 'natural'] },
        { id: 27, name: 'Viscose Rayon', price: '₹550', image: '/storage/img/products/f-product-1-3.png', categories: ['rayon', 'synthetic'] },
        { id: 28, name: 'Cupro Rayon', price: '₹1,450', image: '/storage/img/products/f-product-1-4.png', categories: ['rayon', 'synthetic'] },
        { id: 29, name: 'Tricot Nylon', price: '₹400', image: '/storage/img/products/f-product-1-5.png', categories: ['nylon', 'synthetic'] },
        { id: 30, name: 'Taffilia Nylon', price: '₹850', image: '/storage/img/products/f-product-1-6.png', categories: ['nylon', 'synthetic'] },
    ];

    // Filter products based on active filter
    const filteredProducts = activeFilter 
        ? allProducts.filter(product => 
            product.categories.map(c => c.toLowerCase()).includes(activeFilter.toLowerCase()))
        : allProducts;

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    // Calculate current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Total pages
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Handle filter change
    const handleFilterChange = (filter) => {
        setActiveFilter(filter === activeFilter ? null : filter);
        setCurrentPage(1); // Reset to first page when filter changes
    };

    return (
        <section className="py-6 bg-white min-h-screen">
            <div className="container mx-auto px-4">
                {/* Breadcrumb & search bar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                    <div className="text-sm">
                        <Link href="/" className="hover:text-blue-600">Home</Link> /
                        <Link href={route('products.index', { title: 'Our Products' })} className="hover:text-blue-600"> Shop</Link> /
                        <span className="text-gray-800"> {title}</span>
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

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-1/5">
                        <div className="bg-white p-4 rounded mb-4">
                            <h3 className="font-semibold text-xl mb-4 border-b pb-2 uppercase">Filters</h3>

                            {/* Active Filter Indicator */}
                            {activeFilter && (
                                <div className="mb-4 p-2 bg-blue-50 rounded">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium">Active filter: {activeFilter}</span>
                                        <button 
                                            onClick={() => handleFilterChange(null)}
                                            className="text-blue-600 hover:text-blue-800 text-sm"
                                        >
                                            Clear
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Price Dropdown */}
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
                                                <input
                                                    type="checkbox"
                                                    className="mr-2 rounded text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="text-sm">{range}</span>
                                            </label>
                                        ))}
                                    </div>
                                </details>
                            </div>

                            {/* Natural Fabrics Dropdown */}
                            <div className="border-b pb-2 mb-4">
                                <details open className="group">
                                    <summary className="flex justify-between items-center cursor-pointer list-none">
                                        <h4 className="font-medium text-base">Natural Fabrics</h4>
                                        <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="mt-2 space-y-2 pl-2">
                                        {['cotton', 'silk', 'jute', 'linen', 'wool'].map((fabric) => (
                                            <label key={fabric} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={activeFilter === fabric}
                                                    onChange={() => handleFilterChange(fabric)}
                                                    className="mr-2 rounded text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="text-sm capitalize">{fabric}</span>
                                            </label>
                                        ))}
                                    </div>
                                </details>
                            </div>

                            {/* Synthetic Fabrics Dropdown */}
                            <div className="border-b pb-2">
                                <details open className="group">
                                    <summary className="flex justify-between items-center cursor-pointer list-none">
                                        <h4 className="font-medium text-base">Synthetic Fabrics</h4>
                                        <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="mt-2 space-y-2 pl-2">
                                        {['polyester', 'nylon', 'rayon'].map((fabric) => (
                                            <label key={fabric} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    checked={activeFilter === fabric}
                                                    onChange={() => handleFilterChange(fabric)}
                                                    className="mr-2 rounded text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="text-sm capitalize">{fabric}</span>
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
                                {activeFilter ? `${activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)} ${title}` : title}
                            </h1>
                            
                            <div className="">
                                <div className="h-10 flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white shadow-sm focus-within:ring-2 focus-within:ring-yellow-600">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="flex-grow bg-transparent text-sm placeholder-gray-500 px-2 py-1 focus:outline-none focus:ring-0 focus:border-transparent border-none"
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

                        {filteredProducts.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-gray-500">No products found for this filter.</p>
                                <button 
                                    onClick={() => handleFilterChange(null)}
                                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
                                    {currentProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            className="group relative transition-transform duration-300 ease-out hover:scale-[1.05]"
                                        >
                                            <Link href={route('products.show', product.id)} className="block">
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
                                                            <span className="text-gray-400 text-sm line-through ml-2 pr-2">{product.originalPrice}</span>
                                                        )}
                                                        <span className="text-gray-900 text-xl font-bold">{product.price}</span>
                                                    </div>
                                                </div>
                                            </Link>

                                            <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition opacity-0 group-hover:opacity-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {/* Pagination */}
                                <div className="flex justify-center mt-8">
                                    <nav className="flex items-center gap-1">
                                        <button 
                                            onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                                            disabled={currentPage === 1}
                                            className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                                        >
                                            Previous
                                        </button>
                                        
                                        {Array.from({ length: totalPages }).map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => paginate(index + 1)}
                                                className={`px-3 py-1 border rounded ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                                            >
                                                {index + 1}
                                            </button>
                                        ))}
                                        
                                        <button 
                                            onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : currentPage)}
                                            disabled={currentPage === totalPages}
                                            className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                                        >
                                            Next
                                        </button>
                                    </nav>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

Products.layout = (page) => <FrontLayout>{page}</FrontLayout>;
export default Products;