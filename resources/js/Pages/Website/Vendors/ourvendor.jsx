import React from "react";
import FrontLayout from "@/Layouts/FrontLayout";
import { Head } from "@inertiajs/react";
import '@/Pages/Home/Home.css';

const vendors = [
    {
        id: 1,
        name: "P&G Fashion House",
        image: "/storage/img/seller/seller-1-1.png",
        rating: 5,
        reviews: 15,
        link: route('products.index', { title: 'Our Products' }),
    },
    {
        id: 2,
        name: "Best Electronics",
        image: "/storage/img/seller/seller-1-2.png",
        rating: 5,
        reviews: 15,
        link: route('products.index', { title: 'Our Products' }),
    },
    {
        id: 3,
        name: "Belle Cosmetics",
        image: "/storage/img/seller/seller-1-3.png",
        rating: 5,
        reviews: 15,
        link: route('products.index', { title: 'Our Products' }),
    },
    {
        id: 4,
        name: "The North Face",
        image: "/storage/img/seller/seller-1-4.png",
        rating: 5,
        reviews: 15,
        link: route('products.index', { title: 'Our Products' }),
    },
    {
        id: 5,
        name: "The North Face",
        image: "/storage/img/seller/seller-1-5.png",
        rating: 5,
        reviews: 15,
        link: route('products.index', { title: 'Our Products' }),
    },
    {
        id: 6,
        name: "The North Face",
        image: "/storage/img/seller/seller-1-6.png",
        rating: 5,
        reviews: 15,
        link: route('products.index', { title: 'Our Products' }),
    },
    {
        id: 7,
        name: "The North Face",
        image: "/storage/img/seller/seller-1-7.png",
        rating: 5,
        reviews: 15,
        link: route('products.index', { title: 'Our Products' }),
    },
    {
        id: 8,
        name: "The North Face",
        image: "/storage/img/seller/seller-1-8.png",
        rating: 5,
        reviews: 15,
        link: route('products.index', { title: 'Our Products' }),
    }
];

function OurVendors() {
    return (
        <FrontLayout>
            <Head title="Our Vendors" />
            <div className="xc-seller-two pt-20 pb-20 container">
                <div className="container">
                    <div className="xc-seller-two__wrapper">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {vendors.map(vendor => (
                                <div key={vendor.id} className="xc-seller-two__item">
                                    <div className="xc-seller-two__content">
                                        <img src={vendor.image} alt="seller" className="mx-auto" />
                                        <h3 className="xc-seller-two__title text-center mt-4">
                                            <a href="#">{vendor.name}</a>
                                        </h3>
                                        <span className="xc-seller-two__ratting flex justify-center gap-1 text-yellow-500">
                                            {[...Array(vendor.rating)].map((_, i) => (
                                                <i key={i} className="icon-star"></i>
                                            ))}
                                            <span className="ml-2 text-gray-500">({vendor.reviews})</span>
                                        </span>
                                    </div>
                                    <div className="xc-seller-two__button text-center mt-4">
                                        <a className="xc-seller-two__btn inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" href={vendor.link}>
                                            Visit Store
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </FrontLayout>
    );
}

export default OurVendors;
