import FrontLayout from '@/Layouts/FrontLayout';
import '@/Pages/Home/Home.css';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const testimonials = [
    {
        id: 1,
        image: "/storage/img/testimonial/testimonial-1-1.jpg",
        name: "Women Billie",
        role: "Customer",
        message: "Emet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",

    },
    {
        id: 2,
        image: "/storage/img/testimonial/testimonial-1-2.jpg",
        name: "Esther Howard",
        role: "Customer",
        message: "Emet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",

    },
    {
        id: 3,
        image: "/storage/img/testimonial/testimonial-1-3.jpg",
        name: "Wiliam Jonson",
        role: "Customer",
        message: "Emet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",

    },
    {
        id: 4,
        image: "/storage/img/testimonial/testimonial-1-2.jpg",
        name: "Wiliam Bullack",
        role: "Customer",
        message: "Emet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",

    },
];

const AboutUs = () => {
    const [counters, setCounters] = useState({
        vendors: 0,
        categories: 0,
        fabricSold: 0,
        productsSold: 0
    });

    useEffect(() => {
        const animateCounters = () => {
            const duration = 1500; // Animation duration in ms
            const increments = {
                vendors: 3070,
                categories: 56,
                fabricSold: 78,
                productsSold: 86
            };

            const startTime = Date.now();

            const updateCounters = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);

                setCounters({
                    vendors: Math.floor(progress * increments.vendors),
                    categories: Math.floor(progress * increments.categories),
                    fabricSold: Math.floor(progress * increments.fabricSold),
                    productsSold: Math.floor(progress * increments.productsSold)
                });

                if (progress < 1) {
                    requestAnimationFrame(updateCounters);
                }
            };

            requestAnimationFrame(updateCounters);
        };

        // Trigger animation when component mounts
        animateCounters();
    }, []);

    return (
        <FrontLayout>
            <Head title="About Us" />
            <div className="xc-page-wrapper">

                {/* About Section */}
                <section className="xc-about-one pt-20 pb-20">
                    <div className="container mx-auto p-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-gray-200 rounded-xl p-6">
                            {/* Left Column - Images Grid */}
                            <div className="grid grid-rows-2 gap-4">
                                {/* Large Top Image */}
                                <div className="row-span-1">
                                    <img
                                        src='/storage/img/about/about-1-1.jpg'
                                        alt="Fabric showcase"
                                        className="w-full h-64 object-cover rounded-lg shadow-sm"
                                    />
                                </div>

                                {/* Bottom Two Images */}
                                <div className="grid grid-cols-2 gap-4 row-span-1">
                                    <img
                                        src='/storage/img/about/about-1-2.jpg'
                                        alt="Fabric detail"
                                        className="w-full h-48 object-cover rounded-lg shadow-sm"
                                    />
                                    <img
                                        src='/storage/img/about/about-1-3.jpg'
                                        alt="Fabric texture"
                                        className="w-full h-48 object-cover rounded-lg shadow-sm"
                                    />
                                </div>
                            </div>

                            {/* Right Column - Content */}
                            <div className="border-gray-100 pl-6">
                                <span className="text-blue-600 font-semibold text-xl">DISCOVER US</span>
                                <div className="flex flex-col pt-4 justify-center space-y-5">
                                    <h2 className="text-lg font-bold text-gray-800">
                                        Enjoy Shopping <br />With Premium Fabrics
                                    </h2>

                                    <div className="space-y-4">
                                        <p className="text-gray-600 leading-relaxed">
                                            We source only the finest materials globally, ensuring luxury and comfort in every thread.
                                        </p>

                                        <ul className="space-y-3">
                                            {[
                                                "✓ 100+ fabric varieties in stock",
                                                "✓ Eco-friendly production",
                                                "✓ Custom tailoring available"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-700">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-2">
                                        <a
                                            href={route('products.index')}
                                            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                                        >
                                            Explore Collections →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Counter Section */}
                <section className="bg-blue-700 py-16 xc-counter-one">
                    <div className="container">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {/* Vendor Counter */}
                            <div className="xc-counter-one__item">
                                <div>
                                    <h3 className="text-3xl font-bold text-blue-800 xc-counter-one__count">
                                        <span className="xc-counter-up">{counters.vendors}</span>+
                                    </h3>
                                    <br />
                                    <p className="text-white">Total Vendors</p>
                                </div>
                            </div>

                            {/* Categories Counter */}
                            <div className="xc-counter-one__item">
                                <div>
                                    <h3 className="text-3xl font-bold text-blue-800 xc-counter-one__count">
                                        <span className="xc-counter-up">{counters.categories}</span>+
                                    </h3>
                                    <br />
                                    <p className="text-white">Categories</p>
                                </div>
                            </div>

                            {/* Fabric Sold Counter */}
                            <div className="xc-counter-one__item">
                                <div>
                                    <h3 className="text-3xl font-bold text-blue-800 xc-counter-one__count">
                                        <span className="xc-counter-up">{counters.fabricSold}</span>m+
                                    </h3>
                                    <br />
                                    <p className="text-white">Fabric Sold (Meters)</p>
                                </div>
                            </div>

                            {/* Products Sold Counter */}
                            <div className="xc-counter-one__item">
                                <div>
                                    <h3 className="text-3xl font-bold text-blue-800 xc-counter-one__count">
                                        <span className="xc-counter-up">{counters.productsSold}</span>m+
                                    </h3>
                                    <br />
                                    <p className="text-white">Products Sold</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-20 bg-white">
                    <div className="container">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-800">What Our Customers Say</h2>
                        </div>

                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            breakpoints={{
                                768: { slidesPerView: 1 },
                                1024: { slidesPerView: 3 },
                            }}
                        >
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="p-6 rounded max-w-md mx-auto text-center">
                                        {/* Image centered at top */}
                                        <div className="flex justify-center ">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-36 h-36 rounded-full object-cover mx-auto"
                                            />
                                        </div>

                                        {/* Name and role below image */}
                                        <div className="">
                                            <h4 className="font-semibold text-lg">{item.name}</h4>
                                            <p className="text-gray-700">Customer, {item.role}</p>
                                        </div>

                                        {/* Testimonial text */}
                                        <p className="text-gray-700 italic">"{item.message}"</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </section>

                {/* Brands Section */}
                <section className="py-20 bg-blue-50">
                    <div className="container">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-800">Top Brands</h3>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
                            {[...Array(12)].map((_, i) => (
                                <div key={i} className="text-center">
                                    <img src={`/storage/img/brand/brand-1-${(i % 12) + 1}.png`} alt="brand" className="mx-auto h-10" />
                                    <p className="text-gray-700 text-xs mt-2">Brand {(i % 12) + 1}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </FrontLayout>
    );
    // };
};

export default AboutUs;
