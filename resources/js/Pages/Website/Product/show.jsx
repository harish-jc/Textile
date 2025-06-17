import React, { useState } from 'react';
import { useForm, usePage, router } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';
import '@/Pages/Home/Home.css'; // Importing CSS for styling

const Show = ({ product }) => {
    const [activeTab, setActiveTab] = useState('Description');
    const { post } = useForm();
    const [showQuickView, setShowQuickView] = useState(false);
    const [quickViewProduct, setQuickViewProduct] = useState(null);

    const products = [
        {
            id: 1,
            name: 'Cotton Poplin (Premium)',
            price: '₹550',
            imgSrc: '/storage/img/products/f-product-1-1.png',
            offer: "35% off",
            rating: 5,
            reviews: 25,
            title: "Premium Cotton Poplin Fabric",
            originalPrice: "₹850",
            discountedPrice: "₹550",
            specifications: {
                width: '44 inches',
                weight: '120 GSM',
                composition: '100% Cotton',
                color: 'White'
            }
        },
        {
            id: 2,
            name: 'Silk Chiffon (Printed Floral)',
            price: '₹1,350',
            imgSrc: '/storage/img/products/f-product-1-5.png',
            offer: "25% off",
            rating: 4,
            reviews: 18,
            title: "Luxury Silk Chiffon Fabric",
            originalPrice: "₹1,800",
            discountedPrice: "₹1,350",
            specifications: {
                width: '54 inches',
                weight: '60 GSM',
                composition: '100% Silk',
                color: 'Floral Print'
            }
        },
        {
            id: 3,
            name: 'Linen-Cotton Blend (Natural)',
            price: '₹850',
            imgSrc: '/storage/img/products/f-product-1-3.png',
            offer: "15% off",
            rating: 4.5,
            reviews: 32,
            title: "Breathable Linen-Cotton Mix",
            originalPrice: "₹1,000",
            discountedPrice: "₹850",
            specifications: {
                width: '58 inches',
                weight: '180 GSM',
                composition: '55% Linen, 45% Cotton',
                color: 'Natural Beige'
            }
        },
        {
            id: 4,
            name: 'Wool Tweed (Charcoal)',
            price: '₹1,500',
            imgSrc: '/storage/img/products/f-product-1-4.png',
            offer: "20% off",
            rating: 4.8,
            reviews: 14,
            title: "Premium Wool Tweed Fabric",
            originalPrice: "₹1,875",
            discountedPrice: "₹1,500",
            specifications: {
                width: '60 inches',
                weight: '320 GSM',
                composition: '100% Wool',
                color: 'Charcoal Grey'
            }
        },
    ];
    const renderRating = (rating) => {
        return Array.from({ length: 5 }).map((_, i) => (
            <i key={i} className={`icon-star ${i < rating ? "filled" : ""}`}></i>
        ));
    };
    const handleAddToCart = () => {
        post(route('cart.add', product.id), {
            data: {
                id: product.id,
                quantity: 1
            },
            onSuccess: () => {
                router.visit(route('cart.index')); // Navigate to Cart page after success
            },
        });
    };

    const handleQuickView = (product) => {
        setQuickViewProduct(product);
        setShowQuickView(true);
    };

    const closeQuickView = () => {
        setShowQuickView(false);
    };

    return (
        <>
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full md:w-1/2 h-96 object-cover rounded-lg shadow-md"
                        />
                        <div className="md:w-1/2">
                            <h1 className="text-2xl font-bold mb-3 lycoris-color">{product.name}</h1>

                            {/* Star Rating Component */}
                            <div className="flex items-center mb-4">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg
                                            key={star}
                                            className={`w-5 h-5 ${star <= Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="ml-2 text-gray-600">{product.rating.toFixed(1)}/5.0</span>
                            </div>

                            <p className="text-2xl font-semibold text-green-600 mb-6">{product.price}</p>
                            <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
                            <p className="text-gray-500 mb-6 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {product.address}
                            </p>

                            <div className="mt-6 flex items-center gap-3">
                                {/* Add to Cart Button (Primary) */}
                                <button
                                    onClick={handleAddToCart}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex-1 sm:flex-none"
                                >
                                    Add to Cart
                                </button>


                                <button
                                    type="button"
                                    className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex-1 sm:flex-none"
                                    onClick={() => alert('Added to Wishlist!')}
                                >
                                    <i className="fas fa-heart text-white-700"></i>  {/* For wishlist */}
                                    <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        Add To Wishlist
                                    </span>
                                </button>
                                <button
                                    type="button"
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-black transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex-1 sm:flex-none"
                                    onClick={() => setShowQuickView(true)}
                                    aria-label="Quick view"
                                >
                                    <i className="fas fa-eye"></i>
                                </button>
                            </div>

                            {/* Quick View Modal */}
                            {showQuickView && (
                                <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
                                    <div className="relative max-w-3xl w-full p-4">
                                        {/* Close Icon */}
                                        <button
                                            className="absolute top-2 right-2 text-white text-2xl"
                                            onClick={() => setShowQuickView(false)}
                                        >
                                            &times;
                                        </button>

                                        {/* Full Image */}
                                        <img
                                            src={product.image} // You can pass product.image as prop
                                            alt={product.name}
                                            className="w-full h-auto object-contain rounded-lg shadow-lg"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 bg-gray-50">
                <div className="mt-10 container mx-auto px-4">
                    <div className="border-b border-gray-200 mb-4">
                        <nav className="flex space-x-8" aria-label="Tabs">
                            {['Description', 'Additional Info',].map((tab) => (
                                <button
                                    key={tab}
                                    className={`py-2 px-1 border-b-2 text-xl ${activeTab === tab
                                        ? 'border-blue-600 text-blue-600'
                                        : 'border-transparent text-black hover:text-gray-700 hover:border-gray-300'
                                        }`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Tab Contents */}
                    <div className="text-left text-gray-900 leading-relaxed space-y-4">
                        {activeTab === 'Description' && (
                            <p className='text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, quo excepturi, consequuntur blanditiis libero qui quod rerum quae odio commodi dicta expedita reiciendis corrupti dolore nulla aliquam iste ratione, incidunt consequatur sapiente placeat? Consequuntur similique, possimus vero dolor praesentium, dicta aspernatur odio expedita, beatae eum non nisi. Id quis dolores animi atque nihil beatae commodi dolore expedita necessitatibus, velit ex rem eius voluptatem molestiae, cupiditate sunt autem temporibus consectetur. Ut, nihil nobis, eligendi tenetur ab ipsa eveniet repudiandae dolorem corrupti eius quaerat eum! Alias quia sapiente illum et totam tenetur. Facilis, tempora. Pariatur illum distinctio voluptatum nisi adipisci esse corrupti?</p>
                        )}
                        {activeTab === 'Additional Info' && (
                            <>
                                <p><strong className='text-black'>Category :</strong> Fashion</p>
                                <p><strong className='text-black'>Material :</strong> Cotton</p>
                                <p><strong className='text-black'>Color :</strong> Blue</p>
                                <p><strong className='text-black'>Size :</strong> M, L, XL</p>
                            </>
                        )}
                        {/* {activeTab === 'Reviews' && (
                            <>
                                <p>No reviews yet.</p>
                                <button
                                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                    onClick={() => alert('Open review modal')}
                                >
                                    Write a Review
                                </button>
                            </>
                        )} */}
                    </div>
                </div>
            </section>
            <section>

                <div className="xc-product-eight pb-20">
                    <div className="container">
                        <div className="xc-sec-heading xc-sec-heading-three text-left">
                            <h4 className="lycoris-color">Related Products</h4>
                        </div>
                        <div className="row gutter-y-30 ">
                            {products.map((product) => (
                                <div key={product.id} className="col-lg-3 col-md-6">
                                    <div className="xc-product-eight__item">
                                        <div className="xc-product-eight__img">
                                            <img src={product.imgSrc} alt="fas" />
                                            <span className="xc-product-eight__offer">{product.offer}</span>
                                            <div className="xc-product-eight__icons">
                                                <button className="xc-product-eight__action">
                                                    <i className="fas fa-heart"></i>
                                                    <span className="xc-product-eight__tooltip">Add To Wishlist</span>
                                                </button>
                                                <button className="xc-product-eight__action">
                                                    <i className="fas fa-eye"></i>
                                                    <span className="xc-product-eight__tooltip">Quick View</span>
                                                </button>
                                                <button className="xc-product-eight__action">
                                                    <i className="fas fa-shopping-bag"></i>
                                                    <span className="xc-product-eight__tooltip">Add To Cart</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="xc-product-eight__content">
                                            {/* <div className="xc-product-eight__ratting">
                                                {renderRating(product.rating)}
                                                ({product.reviews} Reviews)
                                            </div> */}
                                            {/* <h5 className="xc-product-eight__price"><del className='pr-2'>{product.originalPrice}</del> {product.discountedPrice}</h5> */}
                                            <h3 className="xc-product-eight__title"><a href="#">{product.title}</a></h3>
                                             <div className="mt-0">
                                                {product.originalPrice && (
                                                    <span className="text-gray-400 text-sm line-through ml-0 pr-2">{product.originalPrice}</span>
                                                )}
                                                <span className="text-gray-900 text-xl font-bold">{product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

Show.layout = (page) => <FrontLayout>{page}</FrontLayout>;

export default Show;
