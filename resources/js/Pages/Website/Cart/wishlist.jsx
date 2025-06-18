import React from 'react';
import { Link, useForm } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';
import '@/Pages/Home/Home.css';

const Wishlist = () => {
    const wishlist = [
        {
            id: 1,
            name: 'Elegant Cotton',
            price: 1499,
            image: '/storage/img/products/product-1-7.png',
        },
        {
            id: 2,
            name: 'Silk Kurti Set',
            price: 2299,
            image: '/storage/img/products/product-1-8.png',
        },
        {
            id: 3,
            name: 'Printed Fabric',
            price: 699,
            image: '/storage/img/products/product-1-6.png',
        },
        {
            id: 4,
            name: 'Khadi Cotton',
            price: 499,
            image: '/storage/img/products/product-1-5.png',
        },
    ];

    const { post } = useForm();

    const handleAddToCart = (productId) => {
        post(route('cart.add', productId), {
            data: {
                id: productId,
                quantity: 1,
            },
            onSuccess: () => {
                router.visit(route('cart.index'));
            },
        });
    };

    return (
        <FrontLayout title="My Wishlist">
            <div className="container mx-auto py-10 px-4">
                <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {wishlist.map((product) => (
                        <div
                            key={product.id}
                            className="group relative transition-transform duration-300 ease-out hover:scale-[1.03] rounded shadow-sm p-2"
                        >
                            {/* Image */}
                            <div className="bg-gray-100 overflow-hidden relative pb-[120%] rounded-tl-[12px] rounded-br-[12px]">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="absolute w-full h-full object-cover"
                                />
                            </div>

                            {/* Product Info Row */}
                            <div className="mt-2 flex justify-between items-center">
                                <div>
                                    <p className="font-medium text-gray-900">{product.name}</p>
                                    <div className="text-base font-bold text-gray-900">
                                        &#8377;{product.price}
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleAddToCart(product.id)}
                                    className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </FrontLayout>
    );
};

export default Wishlist;
