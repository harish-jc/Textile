import React from 'react';
import { Link } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';
import '@/Pages/Home/Home.css';

const products = [
    { id: 1, name: 'Cotton Poplin (Premium)', price: '₹550', image: '/storage/img/products/f-product-1-1.png' },
    { id: 2, name: 'Silk Chiffon (Printed)', price: '₹1,350', image: '/storage/img/products/f-product-1-2.png' },
    { id: 3, name: 'Linen-Cotton Blend', price: '₹850', image: '/storage/img/products/f-product-1-3.png' },
    { id: 4, name: 'Wool Tweed (Heavyweight)', price: '₹1,800', image: '/storage/img/products/f-product-1-4.png' },
    { id: 5, name: 'Polyester Georgette (Floral)', price: '₹650', image: '/storage/img/products/f-product-1-5.png' },
    { id: 6, name: 'Stretch Denim (Dark Wash)', price: '₹750', image: '/storage/img/products/f-product-1-6.png' },
    { id: 7, name: 'Velvet Jacquard (Embroidered)', price: '₹2,200', image: '/storage/img/products/f-product-1-7.png' },
    { id: 8, name: 'Organic Cotton (GOTS Certified)', price: '₹600', image: '/storage/img/products/f-product-1-8.png' },
    { id: 9, name: 'Satin Crepe (Draping)', price: '₹1,100', image: '/storage/img/products/f-product-1-9.png' },
    { id: 10, name: 'Tencel Lyocell (Eco-Friendly)', price: '₹1,250', image: '/storage/img/products/f-product-1-10.png' },
    { id: 11, name: 'Viscose Rayon (Breathable)', price: '₹700', image: '/storage/img/products/f-product-1-11.png' },
    { id: 12, name: 'Cashmere Wool (Luxury)', price: '₹3,000', image: '/storage/img/products/f-product-1-12.png' },
    { id: 13, name: 'Chanderi Silk (Handwoven)', price: '₹1,600', image: '/storage/img/products/f-product-1-1.png' },
    { id: 14, name: 'Mulmul Cotton (Soft)', price: '₹500', image: '/storage/img/products/f-product-1-2.png' },
    { id: 15, name: 'Net Fabric (Bridal)', price: '₹900', image: '/storage/img/products/f-product-1-3.png' },
    { id: 16, name: 'Corduroy (Textured)', price: '₹950', image: '/storage/img/products/f-product-1-4.png' },
    { id: 17, name: 'Bamboo Fabric (Anti-Bacterial)', price: '₹1,100', image: '/storage/img/products/f-product-1-5.png' },
    { id: 18, name: 'Faux Leather (Vegan)', price: '₹1,400', image: '/storage/img/products/f-product-1-6.png' },
    { id: 19, name: 'Muslin Cotton (Unbleached)', price: '₹450', image: '/storage/img/products/f-product-1-7.png' },
    { id: 20, name: 'Brocade (Zari Work)', price: '₹2,500', image: '/storage/img/products/f-product-1-8.png' },
    { id: 21, name: 'Chenille Fabric (Plush)', price: '₹1,300', image: '/storage/img/products/f-product-1-9.png' },
    { id: 22, name: 'Terry Cotton (Toweling)', price: '₹600', image: '/storage/img/products/f-product-1-10.png' },
    { id: 23, name: 'Organza (Sheer)', price: '₹800', image: '/storage/img/products/f-product-1-11.png' },
    { id: 24, name: 'Khadi Cotton (Handspun)', price: '₹700', image: '/storage/img/products/f-product-1-12.png' },
    { id: 25, name: 'Fleece (Winter Wear)', price: '₹1,200', image: '/storage/img/products/f-product-1-1.png' },
    { id: 26, name: 'Neoprene (Structured)', price: '₹1,700', image: '/storage/img/products/f-product-1-2.png' },
    { id: 27, name: 'Voile Cotton (Lightweight)', price: '₹550', image: '/storage/img/products/f-product-1-3.png' },
    { id: 28, name: 'Taffeta (Glossy)', price: '₹1,450', image: '/storage/img/products/f-product-1-4.png' },
    { id: 29, name: 'Jute Fabric (Natural)', price: '₹400', image: '/storage/img/products/f-product-1-5.png' },
    { id: 30, name: 'Spandex Blend (Stretchy)', price: '₹850', image: '/storage/img/products/f-product-1-6.png' },
];
const Products = ({ title }) => {
    return (
        <section className="py-6 bg-white min-h-screen">
            <div className="container mx-auto px-4">
                {/* Flex container for breadcrumb & search bar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                    {/* Breadcrumb (left-aligned) */}
                    <div className="text-sm lycoris-color">
                        <Link href="/" className="hover:text-blue-600">Home</Link> /
                        <Link href={route('products.index', { title: 'Our Products' })} className="hover:text-blue-600"> Shop</Link> /
                        <span className="text-gray-800"> {title}</span>
                    </div>

                    {/* Sort BY Bar (right-aligned) */}
                    <div className="flex items-center">
                        <span className="text-sm text-gray-600 mr-2">Sort by:</span>
                        <select className="border p-2 rounded text-sm">
                            <option>Recommended</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest First</option>
                        </select>
                    </div>
                </div>


                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-1/5">
                        <div className="bg-white p-4 rounded mb-4">
                            <h3 className="font-semibold text-xl mb-4 border-b pb-2 uppercase lycoris-color">Filters</h3>

                            {/* Price Dropdown */}
                            <div className="border-b pb-2 mb-4">
                                <details open className="group ">
                                    <summary className="flex justify-between items-center cursor-pointer list-none ">
                                        <h4 className="font-medium text-base text-yellow-700">Price</h4>
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
                                        <h4 className="font-medium text-base lycoris-color">Natural Fabrics</h4>
                                        <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="mt-2 space-y-2 pl-2">
                                        {['Cotton', 'Silk', 'Jute', 'Linen', 'Wool'].map((fabric) => (
                                            <label key={fabric} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="mr-2 rounded text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="text-sm">{fabric}</span>
                                            </label>
                                        ))}
                                    </div>
                                </details>
                            </div>

                            {/* Synthetic Fabrics Dropdown */}
                            <div className="border-b pb-2">
                                <details open className="group">
                                    <summary className="flex justify-between items-center cursor-pointer list-none">
                                        <h4 className="font-medium text-base lycoris-color">Synthetic Fabrics</h4>
                                        <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="mt-2 space-y-2 pl-2">
                                        {['Polyester', 'Nylon', 'Rayon'].map((fabric) => (
                                            <label key={fabric} className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="mr-2 rounded text-blue-600 focus:ring-blue-500"
                                                />
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
                            <h1 className="text-base md:text-base font-bold lycoris-color mb-2 md:mb-0 uppercase italic">
                                {title}
                            </h1>
                            {/* Compact Search Bar + Button */}
                            <div className="flex items-center gap-1">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="border border-gray-300 rounded text-xs w-38 md:w-40 focus:outline-none focus:ring-1 focus:ring-yellow-600"
                                    style={{ height: '2rem' }}
                                />
                                <button className="bg-yellow-700 hover:bg-yellow-800 text-white px-2 py-1 rounded text-xs"
                                    style={{ height: '2rem' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8" />
                                        <path d="m21 21-4.3-4.3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="group relative transition-transform duration-300 ease-out hover:scale-[1.05]"
                                >
                                    <Link href={route('products.show', product.id)} className="block">
                                        {/* Image container */}
                                        {/* rounded-tl-[12px] - we use a custom tailwind class to ensure the image scales properly */}
                                        <div className="bg-gray-100 overflow-hidden relative pb-[133%] rounded-tl-[15px] rounded-br-[15px]">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="absolute w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Product details - will scale with the parent */}
                                        <div className="mt-3">
                                            <h3 className="font-medium text-gray-900 text-xs">{product.name}</h3>
                                            <div className="mt-1">
                                                <span className="text-gray-900 text-xl font-bold italic">{product.price}</span>
                                                {product.originalPrice && (
                                                    <span className="text-gray-400 text-sm line-through ml-2">₹1,200</span>
                                                )}
                                            </div>
                                        </div>
                                    </Link>

                                    {/* Wishlist button */}
                                    <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition opacity-0 group-hover:opacity-100">
                                        <i className="far fa-heart text-gray-700"></i>
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center mt-8">
                            <nav className="flex items-center gap-1">
                                <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-100">
                                    Previous
                                </button>
                                {[1, 2, 3, 4, 5].map((page) => (
                                    <button
                                        key={page}
                                        className={`px-3 py-1 border rounded ${page === 1 ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-100">
                                    Next
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Products.layout = (page) => <FrontLayout>{page}</FrontLayout>;
export default Products;