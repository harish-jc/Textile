import React, { useState } from 'react';
import { useForm, router } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';
import '@/Pages/Home/Home.css';
import BuyerRfqForm from '../RFQ/buyerrfqform';

const products = [
    {
        id: 1,
        name: 'Cotton Poplin (Premium)',
        price: '550',
        imgSrc: '/storage/img/products/f-product-1-1.png',
        offer: "35% off",
        rating: 5,
        reviews: 25,
        title: "Premium Cotton Poplin Fabric",
        originalPrice: "850",
        discountedPrice: "550",
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
        price: '1,350',
        imgSrc: '/storage/img/products/f-product-1-5.png',
        offer: "25% off",
        rating: 4,
        reviews: 18,
        title: "Luxury Silk Chiffon Fabric",
        originalPrice: "1,800",
        discountedPrice: "1,350",
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
        price: '850',
        imgSrc: '/storage/img/products/f-product-1-3.png',
        offer: "15% off",
        rating: 4.5,
        reviews: 32,
        title: "Breathable Linen-Cotton Mix",
        originalPrice: "1,000",
        discountedPrice: "850",
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
        price: '1,500',
        imgSrc: '/storage/img/products/f-product-1-4.png',
        offer: "20% off",
        rating: 4.8,
        reviews: 14,
        title: "Premium Wool Tweed Fabric",
        originalPrice: "1,875",
        discountedPrice: "1,500",
        specifications: {
            width: '60 inches',
            weight: '320 GSM',
            composition: '100% Wool',
            color: 'Charcoal Grey'
        }
    },
];

const Show = ({ product }) => {
    const [activeTab, setActiveTab] = useState('Description');
    const { post } = useForm();
    const [showQuickView, setShowQuickView] = useState(false);
    const [quantity, setQuantity] = useState(1);

    // Parse price from string like "550"
    const pricePerMeter = parseFloat(product.price.replace(/[^0-9.]/g, '')) || 0;
    const totalPrice = (pricePerMeter * quantity).toFixed(2);

    const handleAddToCart = () => {
        post(route('cart.add', product.id), {
            data: {
                id: product.id,
                quantity: quantity,
            },
            onSuccess: () => {
                router.visit(route('cart.index'));
            },
        });
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

                            {/* Rating */}
                            <div className="flex items-center mb-4">
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
                                <span className="ml-2 text-gray-600">{product.rating.toFixed(1)}/5.0</span>
                            </div>

                            <p className="text-lg font-semibold text-green-600 mb-4">&#8377;{product.price} / meter</p>
                            <p className="text-gray-700 mb-4">{product.description}</p>

                            {/* Quantity + Total  */}
                            <div className="mb-6">
                                <label className="block mb-1 font-medium text-gray-700">
                                    Quantity (in meters)
                                </label>
                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-xl"
                                        onClick={() => setQuantity(prev => Math.max(0.25, (prev - 0.25)))}
                                    >
                                        −
                                    </button>
                                    <span className="px-3 py-1 border rounded bg-white w-20 text-center">{quantity}</span>
                                    <button
                                        type="button"
                                        className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-xl"
                                        onClick={() => setQuantity(prev => parseFloat((prev + 0.25).toFixed(2)))}
                                    >
                                        +
                                    </button>
                                </div>
                                <p className="mt-2 text-gray-700">
                                    <strong>Total Price:</strong> &#8377;{totalPrice}
                                </p>
                            </div>


                            {/* Buttons */}
                            <div className="mt-6 flex items-center gap-3">
                                <button
                                    onClick={handleAddToCart}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Add to Cart
                                </button>
                                <button
                                    type="button"
                                    className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
                                    onClick={() => alert('Added to Wishlist!')}
                                >
                                    <i className="fas fa-heart"></i>
                                </button>
                                <button
                                    type="button"
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-black"
                                    onClick={() => setShowQuickView(true)}
                                    aria-label="Quick view"
                                >
                                    <i className="fas fa-eye"></i>
                                </button>
                                <BuyerRfqForm />

                            </div>

                            {/* Quick View Modal */}
                            {showQuickView && (
                                <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
                                    <div className="relative max-w-3xl w-full p-4">
                                        <button
                                            className="absolute top-2 right-2 text-white text-2xl"
                                            onClick={() => setShowQuickView(false)}
                                        >
                                            &times;
                                        </button>
                                        <img
                                            src={product.image}
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
                                                    <span className="text-gray-400 text-sm line-through ml-0 pr-2">&#8377;{product.originalPrice}</span>
                                                )}
                                                <span className="text-gray-900 text-xl font-bold">&#8377;{product.price}</span>
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
