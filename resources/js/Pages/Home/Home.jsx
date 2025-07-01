import { useEffect, useState, useRef } from "react";
import { Link } from '@inertiajs/react';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import './Home.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade, EffectCoverflow, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';
import FrontLayout from "@/Layouts/FrontLayout";
import { usePage } from '@inertiajs/react';
import { notification } from "antd";
import { message } from 'antd';



export default function Home() {
    message.config({
        duration: 2,           // Message stays for 2 seconds
        maxCount: 3,           // Max visible messages
    });
    // show notification wishlist and cart if user not logged in
    const { auth } = usePage().props;
    const user = auth?.user;

    const addToWishlist = (product) => {
        if (!user) {
            message.info('Please login to add to wishlist');
            return;
        }

        const existing = JSON.parse(localStorage.getItem("wishlist")) || [];
        const alreadyExists = existing.find(item => item.id === product.id);

        if (!alreadyExists) {
            existing.push(product);
            localStorage.setItem("wishlist", JSON.stringify(existing));
            message.success('Added to wishlist!');
        } else {
            message.warning('Already in wishlist!');
        }
    };


    const addToCart = (product) => {
        if (!user) {
            message.info('Please login to add to cart');
            return;
        }

        const existing = JSON.parse(localStorage.getItem("cart")) || [];
        const alreadyExists = existing.find(item => item.id === product.id);

        if (!alreadyExists) {
            existing.push({ ...product, quantity: 1 });
            localStorage.setItem("cart", JSON.stringify(existing));
            message.success('Added to cart!');
        } else {
            message.warning('Already in cart!');
        }
    };

    // for quickview
    const [quickViewProduct, setQuickViewProduct] = useState(null);
    const [showQuickView, setShowQuickView] = useState(false);
    const openQuickView = (product) => {
        setQuickViewProduct(product);
        setShowQuickView(true);
    };

    const closeQuickView = () => {
        setShowQuickView(false);
        setQuickViewProduct(null);
    };


    //activetab
    const [activeTab, setActiveTab] = useState("all");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const sliderItems = [
        {
            id: "item1",
            imgSrc: "/storage/img/slider/slider-lg-3-5.png",
            title: "Fabrics",
            subtitle: "Polyster Fabrics",
            mainTitle: "FULL SLEEVE HOODED ZIPPER",
        },
        {
            id: "item2",
            imgSrc: "/storage/img/slider/slider-lg-3-2.png",
            title: "Fabrics",
            subtitle: "Jute Silk Shawl",
            mainTitle: "ETHNIC PAISLEY & FLORAL WORK IN WOOLLEN FABRIC",
        },
        {
            id: "item3",
            imgSrc: "/storage/img/slider/slider-lg-3-3.png",
            title: "Fabrics",
            subtitle: "Wool Cotton",
            mainTitle: "FLODDEN COWL WRAP SCARF",
        },
        {
            id: "item4",
            imgSrc: "/storage/img/slider/slider-lg-3-1.png",
            title: "Fabrics",
            subtitle: "TREND",
            mainTitle: "EXCLUSIVE COLLECTION",
        },
    ];

    // Data for thumbnails
    const thumbnails = [
        { id: "item1", imgSrc: "/storage/img/slider/slider-3-1.png" },
        { id: "item2", imgSrc: "/storage/img/slider/slider-3-2.png" },
        { id: "item3", imgSrc: "/storage/img/slider/slider-3-3.png" },
        { id: "item4", imgSrc: "/storage/img/slider/slider-3-4.png" },
    ];

    // Product data to avoid repetition
    const products = [
        {
            id: 61,
            imgSrc: "/storage/img/products/product-fas-5.jpg",
            offer: "30% off",
            rating: 5,
            reviews: 25,
            title: "Jute Cotton",
            originalPrice: "450",
            discountedPrice: "289",
        },
        {
            id: 62,
            imgSrc: "/storage/img/products/product-fas-6.jpg",
            offer: "50% off",
            rating: 5,
            reviews: 25,
            title: "Visco Rayon",
            originalPrice: "589",
            discountedPrice: "289",
        },
        {
            id: 63,
            imgSrc: "/storage/img/products/product-fas-7.jpg",
            offer: "30% off",
            rating: 5,
            reviews: 25,
            title: "Tricot Nylon",
            originalPrice: "239",
            discountedPrice: "209",
        },
        {
            id: 64,
            imgSrc: "/storage/img/products/product-fas-8.jpg",
            offer: "35% off",
            rating: 5,
            reviews: 25,
            title: "Cupro Rayon",
            originalPrice: "150",
            discountedPrice: "100",
        },
    ];

    // Testimonial data
    const testimonials = [
        {
            id: 1,
            imgSrc: "/storage/img/testimonial/testimonial-1-1.jpg",
            name: "Women Billie",
            role: "Customer",
            review: "Emet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
            rating: 5,
        },
        {
            id: 2,
            imgSrc: "/storage/img/testimonial/testimonial-1-2.jpg",
            name: "Esther Howard",
            role: "Customer",
            review: "Emet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
            rating: 5,
        },
        {
            id: 3,
            imgSrc: "/storage/img/testimonial/testimonial-1-3.jpg",
            name: "Wiliam Jonson",
            role: "Customer",
            review: "Emet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
            rating: 5,
        },
    ];

    // Blog data
    const blogs = [
        {
            id: 1,
            imgSrc: "/storage/img/blog/blog-1-1.jpg",
            author: "by - Swiftcart",
            date: "28 september",
            title: "How WooCommerce Can Transform Your Business",
            category: "Fashion",
            comments: "2 Comments",
            views: "147 View",
            excerpt: "Amet minim mollit non deserunt ullaest sit aliqua dolor do amet sint. Velit officia consequat duis enim lit Exercitation veniam consequat sunt nostrud amet.",
        },
        {
            id: 2,
            imgSrc: "/storage/img/blog/blog-1-2.jpg",
            author: "by - Swiftcart",
            date: "28 september",
            title: "Transforming Businesses in the Digital Age",
            category: "Digital",
            comments: "2 Comments",
            views: "147 View",
            excerpt: "Amet minim mollit non deserunt ullaest sit aliqua dolor do amet sint. Velit officia consequat duis enim lit Exercitation veniam consequat sunt nostrud amet.",
        },
        {
            id: 3,
            imgSrc: "/storage/img/blog/blog-1-3.jpg",
            author: "by - Swiftcart",
            date: "28 september",
            title: "Digital Fashion Trends with WooCommerce Shop",
            category: "Shop",
            comments: "2 Comments",
            views: "147 View",
            excerpt: "Amet minim mollit non deserunt ullaest sit aliqua dolor do amet sint. Velit officia consequat duis enim lit Exercitation veniam consequat sunt nostrud amet.",
        },
    ];

    const items = [
        {
            id: 51,
            imgSrc: "/storage/img/products/product-tending-1.jpg",
            title: "Taffeta Polyester",
            originalPrice: "489",
            discountedPrice: "289"
        },
        {
            id: 52,
            imgSrc: "/storage/img/products/product-tending-2.jpg",
            title: "Silk Blend",
            originalPrice: "599",
            discountedPrice: "399"
        },
        {
            id: 53,
            imgSrc: "/storage/img/products/product-tending-3.jpg",
            title: "Cotton Fabric",
            originalPrice: "199",
            discountedPrice: "149"
        }
    ];

    // Render star rating
    const renderRating = (rating) => {
        return Array.from({ length: 5 }).map((_, i) => (
            <i key={i} className={`icon-star ${i < rating ? "filled" : ""}`}></i>
        ));
    };

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (
            swiperRef.current &&
            swiperRef.current.params &&
            swiperRef.current.params.navigation
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;

            // Re-init navigation
            swiperRef.current.navigation.destroy();
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <>
            {/* <Header /> */}
            <FrontLayout>

                <div className="xc-page-wrapper">
                    <div className="xc-scrollbar_progress"></div>
                    <div className="xc-body-overlay xc-close-toggler"></div>

                    {/* Search Popup */}
                    <div className="xc-search-popup">
                        <div className="xc-search-popup__wrap">
                            <a href="#" className="xc-search-popup__close xc-close-toggler"></a>
                            <div className="xc-search-popup__form">
                                <form role="search" method="get" action="#">
                                    <input type="search" placeholder="Search Here..." defaultValue="" name="s" />
                                    <button type="submit"><i className="icon-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Nav */}
                    <div className="xc-mobile-nav__wrapper">
                        <div className="xc-mobile-nav__overlay xc-close-toggler"></div>
                        <div className="xc-mobile-nav__content">
                            <a href="#" className="xc-mobile-nav__close xc-search-popup__close xc-close-toggler"></a>
                            <div className="logo-box">
                                <a href="#"><img src="/storage/img/logo/white-logo.png" width="150" alt="" /></a>
                            </div>
                            <div className="xc-mobile-nav__menu"></div>
                            <ul className="xc-mobile-nav__contact list-unstyled">
                                <li>
                                    <i className="fa fa-envelope"></i>
                                    <a href="mailto:harish.mozitz@gmail.com">needhelp@textile.com</a>
                                </li>
                                <li>
                                    <i className="fa fa-phone-alt"></i>
                                    <a href="tel:9876543210">+91 9876543210</a>
                                </li>
                            </ul>
                            <div className="xc-mobile-nav__top">
                                <div className="xc-mobile-nav__social">
                                    <a href="#" className="fab fa-twitter"></a>
                                    <a href="#" className="fab fa-facebook-square"></a>
                                    <a href="#" className="fab fa-pinterest-p"></a>
                                    <a href="#" className="fab fa-instagram"></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Back to Top */}
                    <div className="xc-back-to-top-wrapper">
                        <button id="xc_back-to-top" type="button" className="xc-back-to-top-btn">
                            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <span className="xc-back-to-top-progress"></span>
                        </button>
                    </div>

                    {/* Slider Section */}
                    <div className="slider-wrapper" style={{ position: 'relative' }}>
                        <Swiper
                            modules={[Autoplay, EffectFade, Navigation]}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            loop
                            speed={800}
                            slidesPerView={1}
                            spaceBetween={0}
                            effect="fade"
                            fadeEffect={{ crossFade: true }}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            className="main-swiper"
                        >
                            {sliderItems.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="slide-content">
                                        <div className="slide-image">
                                            <div className="circle-bg"></div>
                                            <img src={item.imgSrc} alt={item.mainTitle} />
                                        </div>
                                        <div className="slide-text" style={{ flex: '1', paddingLeft: '3rem' }}>
                                            <h4>{item.title}</h4>
                                            <h3>{item.subtitle}</h3>
                                            <h2>{item.mainTitle}</h2>
                                            <div className="xc-banner-eight-lg__btn" style={{ marginTop: '1rem' }}>
                                                <a className="swiftcart-btn-black2" href={route('products.index', { title: 'our products' })}>
                                                    Shop Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom navigation buttons */}
                        <button
                            ref={prevRef}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '10px',
                                transform: 'translateY(-50%)',
                                zIndex: 10,
                                background: 'rgba(0,0,0,0.5)',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                cursor: 'pointer',
                            }}
                        >
                            &#10094;
                        </button>
                        <button
                            ref={nextRef}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: '10px',
                                transform: 'translateY(-50%)',
                                zIndex: 10,
                                background: 'rgba(0,0,0,0.5)',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                cursor: 'pointer',
                            }}
                        >
                            &#10095;
                        </button>
                    </div>

                    {/* Banner Section */}
                    <div className="xc-banner-eight pt-10 pb-10">
                        <div className="container">
                            <div className="row gutter-y-20">
                                <div className="col-md-6 col-xl-3">
                                    <div className="xc-banner-eight__item">
                                        {/* <Link href={route('collection.show', { title: 'gujarat' })}> */}
                                        <Link href={route('products.index', { title: 'Cotton Fabrics', filter: 'cotton' })}>
                                            <div className="xc-banner-eight__img w-img">
                                                <img src="/storage/img/banner/banner-8-2.png" alt="banner" />
                                            </div>
                                            <div className="xc-banner-eight__content">
                                                <h3 className="xc-banner-eight__title">
                                                    Natural Fabrics
                                                    {/* <a href="#" className="uppercase">Gujarat</a> */}
                                                </h3>
                                                <span className=".xc-banner-eight__subtitle">Cotton</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3">
                                    <div className="xc-banner-eight__item">
                                        <Link href={route('products.index', { title: 'Rayon Fabrics', filter: 'rayon' })}>
                                            <div className="xc-banner-eight__img w-img">
                                                <img src="/storage/img/banner/banner-8-1.png" alt="banner" />
                                            </div>
                                            <div className="xc-banner-eight__content">
                                                <h3 className="xc-banner-eight__title">
                                                    Synthetic Fabrics
                                                    {/* <a href="#" className="uppercase">Hyderabad</a> */}
                                                </h3>
                                                <span className=".xc-banner-eight__subtitle">Rayon Fabrics</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="xc-banner-eight-lg">
                                        <div className="xc-banner-eight-lg__content">
                                            <span className="xc-banner-eight-lg__subtitle">UP TO 40% OFF</span>
                                            <h3 className="xc-banner-eight-lg__title">The Top Collections <br /> of fall 2025</h3>
                                            <div className="xc-banner-eight-lg__btn">
                                                <a className="swiftcart-btn" href={route('products.index', { title: 'our products' })}>Shop Now</a>
                                            </div>
                                        </div>
                                        <div className="xc-banner-eight__img">
                                            <img src="/storage/img/banner/banner-8-3.png" alt="banner" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Section */}
                    <div className="xc-product-eight pt-20 pb-20">
                        <div className="container">
                            <div className="xc-sec-heading xc-sec-heading-three text-center">
                                <h3 className="xc-sec-heading__title xc-style-3">Synthetic Fabrics</h3>
                                <div className="xc-sec-heading__shape pt-2 pb-2" align="center">
                                    <img src="/storage/img/shapes/sec-title-border.png" alt="border" />
                                </div>
                            </div>
                            <div className="row gutter-y-30 ">
                                {products.map((product) => (
                                    <div key={product.id} className="col-lg-3 col-md-6">
                                        <a href={route('products.index', { title: 'Synthetic Fabrics', filter: 'synthetic' })}>
                                        <div className="xc-product-eight__item">
                                            <div className="xc-product-eight__img">
                                                <img src={product.imgSrc} alt="fas" />
                                                <span className="xc-product-eight__offer">{product.offer}</span>
                                                <div className="xc-product-eight__icons">
                                                    <button className="xc-product-eight__action"
                                                        onClick={() => addToWishlist(product)}>
                                                        <i className="fas fa-heart"></i>
                                                        <span className="xc-product-eight__tooltip">Add To Wishlist</span>
                                                    </button>
                                                    <button className="xc-product-eight__action"
                                                        onClick={() => openQuickView(product)}>
                                                        <i className="fas fa-eye"></i>
                                                        <span className="xc-product-eight__tooltip">Quick View</span>
                                                    </button>
                                                    <button className="xc-product-eight__action"
                                                        onClick={() => addToCart(product)}>
                                                        <i className="fas fa-shopping-bag"></i>
                                                        <span className="xc-product-eight__tooltip">Add To Cart</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="xc-product-eight__content">
                                                <div className="xc-product-eight__ratting">
                                                    {renderRating(product.rating)}
                                                    ({product.reviews} Reviews)
                                                </div>
                                                <h3 className="xc-product-eight__title"><a href="#">{product.title}</a></h3>
                                                {/* <h5 className="xc-product-eight__price"><del className="pr-2">{product.originalPrice}</del> {product.discountedPrice}</h5> */}
                                                {product.discountedPrice && (
                                                    <span className="text-gray-400 text-sm line-through pr-2">&#8377;{product.originalPrice}</span>
                                                )}
                                                <span className="text-gray-900 text-xl font-bold">&#8377;{product.discountedPrice}</span>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    {/* Banner Nine Section */}
                    <div className="xc-banner-nine pt-20 pb-40">
                        <div className="container">
                            <div className="row gutter-y-20">
                                <div className="col-lg-6">
                                    <div className="xc-banner-nine__box">
                                        <div className="xc-banner-nine__bg w-img">
                                            <img src="/storage/img/banner/banne-9-1.png" alt="banner nine" />
                                        </div>
                                        <div className="xc-banner-nine__content">
                                            <span className="xc-banner-nine__subtitle">New arrival collection</span>
                                            <h3 className="xc-banner-nine__title">off60%</h3>
                                            <div className="xc-banner-nine__btn">
                                                <a href={route('products.index', { title: 'our products' })} className="swiftcart-btn-black">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="xc-banner-nine__box xc-banner-nine__box-2">
                                        <div className="xc-banner-nine__bg w-img">
                                            <img src="/storage/img/banner/banne-9-2.png" alt="banner nine" />
                                        </div>
                                        <div className="xc-banner-nine__content">
                                            <span className="xc-banner-nine__subtitle">Check featured items</span>
                                            <h3 className="xc-banner-nine__title">SALE<span>50%</span></h3>
                                            <div className="xc-banner-nine__btn">
                                                <a href={route('products.index', { title: 'our products' })} className="swiftcart-btn-black">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Best Deal Section */}
                    <div className="xc-best-deal pb-20">
                        <div className="container">
                            <div className="xc-best-deal__filter-box has-border tabs-box">
                                <div className="xc-best-deal__filter-box-wrap mb-20">
                                    <ul className="xc-best-deal__filter-btn tab-buttons">
                                        {["all", "new", "trending", "top", "best"].map((tab) => (
                                            <li
                                                key={tab}
                                                data-tab={`#${tab}`}
                                                className={`tab-btn ${activeTab === tab ? "active-btn" : ""}`}
                                                onClick={() => handleTabClick(tab)}
                                            >
                                                <span>{tab === "all" ? "All" : tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", " ")}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="xc-product-man-woman__wrapper tabs-content">
                                    {["all", "new", "trending", "top", "best"].map((tab) => (
                                        activeTab === tab && (
                                            <div className="tab active-tab" id={tab} key={tab}>
                                                <div className="row gutter-y-30">
                                                    {items.map((item) => (
                                                        <div key={`${tab}-${item.id}`} className="col-lg-4 col-md-6">
                                                            <div className="xc-product-ten__item">
                                                                <div className="xc-product-ten__img w-img">
                                                                    <img src={item.imgSrc} alt={item.title} />
                                                                </div>
                                                                <div className="xc-product-ten__content">
                                                                    <h3 className="xc-product-ten__title">
                                                                        <a href="#">{item.title}</a>
                                                                    </h3>
                                                                    <h4 className="xc-product-ten__price">
                                                                        ₹{item.discountedPrice}
                                                                    </h4>
                                                                    <div className="xc-product-ten__btn">
                                                                        <a href="#" onClick={(e) => { e.preventDefault(); addToWishlist(item); }} title="Add to Wishlist">
                                                                            <i className="fas fa-heart"></i>
                                                                        </a>
                                                                        <a href="#" onClick={(e) => { e.preventDefault(); openQuickView(item); }} title="Quick View">
                                                                            <i className="fas fa-eye"></i>
                                                                        </a>
                                                                        <a href="#" onClick={(e) => { e.preventDefault(); addToCart(item); }} title="Add to Cart">
                                                                            <i className="fas fa-shopping-cart"></i>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Testimonial Section */}
                    <div className="xc-testimonial-one pt-0 pb-10 include-bg " style={{ backgroundColor: 'rgb(243 232 203)' }}
                        data-bg="/storage/img/bg/testi-bg.jpg"
                    >
                        <div className="container">
                            <div className="xc-sec-heading xc-sec-heading-three text-center mb-40 p-10">
                                <h3 className="xc-sec-heading__title xc-style-3">What Our Customers Say</h3>
                                <div className="row gutter-y-30">
                                    {testimonials.map((testimonial) => (
                                        <div
                                            key={testimonial.id}
                                            className="col-lg-4 col-md-6" // Adjust for responsiveness
                                        >
                                            <div className="xc-testimonial-one__item"
                                                style={{
                                                    backgroundColor: "rgb(243 232 203)", // light gray background
                                                    padding: "20px",
                                                    borderRadius: "8px"
                                                }}>
                                                <div className="xc-testimonial-one__head">
                                                    <div className="xc-testimonial-one__thumb">
                                                        <img src={testimonial.imgSrc} alt="" />
                                                    </div>
                                                    <div className="xc-testimonial-one__info">
                                                        <h3 className="xc-testimonial-one__name">{testimonial.name}</h3>
                                                        <p className="xc-testimonial-one__bio">{testimonial.role}</p>
                                                    </div>
                                                </div>
                                                <p className="xc-testimonial-one__review">{testimonial.review}</p>
                                                <div className="xc-testimonial-one__ratting">
                                                    {renderRating(testimonial.rating)}
                                                </div>
                                                <div className="xc-testimonial-one__quote">
                                                    <img src="/storage/img/icons/quote.png" alt="quote" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* for quick view */}
                {showQuickView && quickViewProduct && (
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 9999,
                            padding: '16px',
                            boxSizing: 'border-box',
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: '#fff',
                                borderRadius: '12px',
                                width: '100%',
                                maxWidth: '800px',
                                maxHeight: '90%',
                                overflowY: 'auto',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: window.innerWidth < 640 ? 'column' : 'row', // 💡 Responsive layout
                                gap: '24px',
                                padding: '20px',
                            }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeQuickView}
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                    fontSize: '24px',
                                    border: 'none',
                                    background: 'transparent',
                                    cursor: 'pointer',
                                }}
                            >
                                &times;
                            </button>

                            {/* Image Section */}
                            <div
                                style={{
                                    flex: '1',
                                    minWidth: '240px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <img
                                    src={quickViewProduct.imgSrc}
                                    alt={quickViewProduct.title}
                                    style={{
                                        width: '100%',
                                        maxWidth: '300px',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>

                            {/* Product Info Section */}
                            <div style={{ flex: '2', textAlign: window.innerWidth < 640 ? 'center' : 'left' }}>
                                <h2 style={{ marginBottom: '10px', fontSize: '20px' }}>{quickViewProduct.title}</h2>
                                <p style={{ marginBottom: '6px', fontSize: '16px' }}>
                                    <strong>Price:</strong> ₹{quickViewProduct.originalPrice}
                                </p>
                                {quickViewProduct.discountedPrice && (
                                    <p style={{ marginBottom: '6px', fontSize: '16px' }}>
                                        <strong>Offer:</strong> ₹{quickViewProduct.discountedPrice}
                                    </p>
                                )}
                                <div
                                    style={{
                                        marginTop: '20px',
                                        display: 'flex',
                                        flexDirection: window.innerWidth < 640 ? 'column' : 'row',
                                        gap: '10px',
                                        alignItems: 'center',
                                        justifyContent: window.innerWidth < 640 ? 'center' : 'flex-start',
                                    }}
                                >
                                    <button
                                        onClick={() => addToCart(quickViewProduct)}
                                        style={{
                                            backgroundColor: '#3182ce',
                                            color: '#fff',
                                            padding: '10px 20px',
                                            border: 'none',
                                            borderRadius: '6px',
                                            cursor: 'pointer',
                                            width: window.innerWidth < 640 ? '100%' : 'auto',
                                        }}
                                    >
                                        Add to Cart
                                    </button>
                                    <button
                                        onClick={() => addToWishlist(quickViewProduct)}
                                        style={{
                                            backgroundColor: '#e53e3e',
                                            color: '#fff',
                                            padding: '10px 20px',
                                            border: 'none',
                                            borderRadius: '6px',
                                            cursor: 'pointer',
                                            width: window.innerWidth < 640 ? '100%' : 'auto',
                                        }}
                                    >
                                        Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}


            </FrontLayout>
        </>
    );
}