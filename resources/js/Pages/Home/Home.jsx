import { useEffect, useState, useRef } from "react";
import Header from "./Header/Header";
import './Home.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade,EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-coverflow';

export default function Home() {
    //activetab
    const [activeTab, setActiveTab] = useState("all");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    // count down date
    const mainSwiperRef = useRef(null);
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
            id: 1,
            imgSrc: "/storage/img/products/product-fas-5.jpg",
            offer: "30% off",
            rating: 5,
            reviews: 25,
            title: "Jute Cotton",
            originalPrice: "$450",
            discountedPrice: "$289",
        },
        {
            id: 2,
            imgSrc: "/storage/img/products/product-fas-6.jpg",
            offer: "50% off",
            rating: 5,
            reviews: 25,
            title: "Visco Rayon",
            originalPrice: "$589",
            discountedPrice: "$289",
        },
        {
            id: 3,
            imgSrc: "/storage/img/products/product-fas-7.jpg",
            offer: "30% off",
            rating: 5,
            reviews: 25,
            title: "Tricot Nylon",
            originalPrice: "$239",
            discountedPrice: "$209",
        },
        {
            id: 4,
            imgSrc: "/storage/img/products/product-fas-8.jpg",
            offer: "35% off",
            rating: 5,
            reviews: 25,
            title: "Cupro Rayon",
            originalPrice: "$150",
            discountedPrice: "$100",
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

    // Render star rating
    const renderRating = (rating) => {
        return Array.from({ length: 5 }).map((_, i) => (
            <i key={i} className={`icon-star ${i < rating ? "filled" : ""}`}></i>
        ));
    };

    return (
        <>
            <Header />

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
                                <a href="mailto:harish.mozitz@gmail.com">need@help.com</a>
                            </li>
                            <li>
                                <i className="fa fa-phone-alt"></i>
                                <a href="tel:666-888-0000">666 888 0000</a>
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
                <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
                    {/* Main Swiper */}
                    <Swiper
                        modules={[Autoplay, EffectFade]}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        loop
                        speed={800}
                        slidesPerView={1}
                        spaceBetween={0}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                        style={{ height: '600px' }}
                    >
                        {sliderItems.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div
                                    className="slide-content-two-col"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        height: '100%',
                                    }}
                                >
                                    {/* Main Image with white circle */}
                                    <div
                                        className="slide-image"
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            position: 'relative',
                                            height: '500px',
                                            flex: '1',
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: '500px',
                                                height: '500px',
                                                backgroundColor: '#fff',
                                                borderRadius: '50%',
                                                position: 'absolute',
                                                zIndex: 1,
                                            }}
                                        ></div>
                                        <img
                                            src={item.imgSrc}
                                            alt={item.mainTitle}
                                            style={{
                                                zIndex: 2,
                                                position: 'relative',
                                            }}
                                        />
                                    </div>

                                    {/* Text */}
                                    <div className="slide-text" style={{ flex: '1', paddingLeft: '2rem' }}>
                                        <h4>{item.title}</h4>
                                        <h3>{item.subtitle}</h3>
                                        <h2>{item.mainTitle}</h2>
                                        <div className="xc-banner-eight-lg__btn" style={{ marginTop: '1rem' }}>
                                            <a className="swiftcart-btn-black2" href="#">
                                                Shop Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Thumbnail Swiper OUTSIDE the main Swiper */}
                    <div className="mt-5"
                        style={{
                            // marginTop: '2rem',
                            width: '100%',
                            maxWidth: '400px',
                            backgroundColor: '#fff',
                            padding: '1rem',
                            borderRadius: '10px',
                            margin: 'auto',
                        }}
                    >
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={10}
                            loop={false}
                            allowTouchMove
                        >
                            {sliderItems.map((subItem, i) => (
                                <SwiperSlide key={`thumb-${subItem.id}`}>
                                    <div
                                        style={{ textAlign: 'center', cursor: 'pointer' }}
                                        onClick={() => mainSwiperRef.current?.slideToLoop(i)}
                                    >
                                        <img
                                            src={subItem.imgSrc}
                                            alt={subItem.mainTitle}
                                            style={{
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '50%',
                                                objectFit: 'cover',
                                                border: '2px solid #ddd',
                                            }}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* Banner Section */}
                <div className="xc-banner-eight pt-10 pb-10">
                    <div className="container">
                        <div className="row gutter-y-20">
                            <div className="col-md-6 col-xl-3">
                                <div className="xc-banner-eight__item">
                                    <div className="xc-banner-eight__img w-img">
                                        <img src="/storage/img/banner/banner-8-1.png" alt="banner" />
                                    </div>
                                    <div className="xc-banner-eight__content">
                                        <h3 className="xc-banner-eight__title"><a href="#">NEW ARRIVALS</a></h3>
                                        <span className=".xc-banner-eight__subtitle">Hot Collection</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="xc-banner-eight__item">
                                    <div className="xc-banner-eight__img w-img">
                                        <img src="/storage/img/banner/banner-8-2.png" alt="banner" />
                                    </div>
                                    <div className="xc-banner-eight__content">
                                        <h3 className="xc-banner-eight__title"><a href="#">Merino Wool</a></h3>
                                        <span className=".xc-banner-eight__subtitle">Hot Collection</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="xc-banner-eight-lg">
                                    <div className="xc-banner-eight-lg__content">
                                        <span className="xc-banner-eight-lg__subtitle">UP TO 40% OFF</span>
                                        <h3 className="xc-banner-eight-lg__title">The Top Collections <br /> of fall 2025</h3>
                                        <div className="xc-banner-eight-lg__btn">
                                            <a className="swiftcart-btn" href="#">Shop Now</a>
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
                                            <div className="xc-product-eight__ratting">
                                                {renderRating(product.rating)}
                                                ({product.reviews} Reviews)
                                            </div>
                                            <h3 className="xc-product-eight__title"><a href="#">{product.title}</a></h3>
                                            <h5 className="xc-product-eight__price"><del>{product.originalPrice}</del> {product.discountedPrice}</h5>
                                        </div>
                                    </div>
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
                                            <a href="#" className="swiftcart-btn-black">Shop Now</a>
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
                                            <a href="#" className="swiftcart-btn-black">Shop Now</a>
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
                                    <li
                                        data-tab="#all"
                                        className={`tab-btn ${activeTab === "all" ? "active-btn" : ""}`}
                                        onClick={() => handleTabClick("all")}
                                    >
                                        <span>All</span>
                                    </li>
                                    <li
                                        data-tab="#new"
                                        className={`tab-btn ${activeTab === "new" ? "active-btn" : ""}`}
                                        onClick={() => handleTabClick("new")}
                                    >
                                        <span>New Arrivals</span>
                                    </li>
                                    <li
                                        data-tab="#trending"
                                        className={`tab-btn ${activeTab === "trending" ? "active-btn" : ""}`}
                                        onClick={() => handleTabClick("trending")}
                                    >
                                        <span>Trending</span>
                                    </li>
                                    <li
                                        data-tab="#top"
                                        className={`tab-btn ${activeTab === "top" ? "active-btn" : ""}`}
                                        onClick={() => handleTabClick("top")}
                                    >
                                        <span>Top Seller</span>
                                    </li>
                                    <li
                                        data-tab="#best"
                                        className={`tab-btn ${activeTab === "best" ? "active-btn" : ""}`}
                                        onClick={() => handleTabClick("best")}
                                    >
                                        <span>Best Offer</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="xc-product-man-woman__wrapper tabs-content">
                                {activeTab === "all" && (
                                    <div className="tab active-tab" id="all">
                                        <div className="row gutter-y-30">
                                            {/* All tab content */}
                                            {[1, 2, 3].map((item) => (
                                                <div key={`all-${item}`} className="col-lg-4 col-md-6">
                                                    <div className="xc-product-ten__item">
                                                        <div className="xc-product-ten__img w-img">
                                                            <img
                                                                src={`/storage/img/products/product-tending-${item}.jpg`}
                                                                alt="product"
                                                            />
                                                        </div>
                                                        <div className="xc-product-ten__content">
                                                            <h3 className="xc-product-ten__title">
                                                                <a href="#">Taffeta Polyster</a>
                                                            </h3>
                                                            <h4 className="xc-product-ten__price">
                                                                <del>$489</del> $289
                                                            </h4>
                                                            <div className="xc-product-ten__btn">
                                                                <a href="#">
                                                                    <i className="fas fa-search"></i>
                                                                </a>
                                                                <a href="#">
                                                                    <i className="fas fa-eye"></i>
                                                                </a>
                                                                <a href="#">
                                                                    <i className="fas fa-shopping-cart"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonial Section */}
                <div className="xc-testimonial-one pt-0 pb-10 include-bg "
                    data-bg="/storage/img/bg/testi-bg.jpg"
                >
                    <div className="container">
                        <div className="xc-sec-heading xc-sec-heading-three text-center mb-40 p-10"
                            style={{
                                backgroundColor: "rgb(243 232 203)"
                            }}>
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


                {/* Blog Section */}
                {/* <div className="xc-blog-one pb-50 pt-20">
                    <div className="container">
                        <div className="xc-sec-heading xc-sec-heading-three text-center">
                            <h3 className="xc-sec-heading__title xc-style-3">Our latest blog post</h3>
                            <div className="xc-sec-heading__shape pt-2 pb-2" align="center">
                                <img src="/storage/img/shapes/sec-title-border.png" alt="border" />
                            </div>
                        </div>
                        <div className="row gutter-y-30">
                            {blogs.map((blog) => (
                                <div key={blog.id} className="col-md-6 col-xl-4">
                                    <div className="xc-blog-one__item wow xcfadeUp" data-wow-delay={`${blog.id}00ms`}>
                                        <div className="xc-blog-one__thumb w-img">
                                            <img src={blog.imgSrc} alt={blog.imgSrc} />
                                            <div className="xc-blog-one__meta-2">
                                                <a href="#">{blog.author}</a>
                                                <span>{blog.date}</span>
                                            </div>
                                        </div>
                                        <div className="xc-blog-one__content">
                                            <h3 className="xc-blog-one__title"><a href="blog-details.html">{blog.title}</a></h3>
                                            <ul className="xc-blog-one__meta list-unstyled">
                                                <li className="xc-post-cat">
                                                    <a href="#">{blog.category}</a>
                                                </li>
                                                <li className="xc-post-comment">
                                                    <a href="#">{blog.comments}</a>
                                                </li>
                                                <li className="xc-post-view">
                                                    <span className="xc-post-view">{blog.views}</span>
                                                </li>
                                            </ul>
                                            <p className="xc-blog-one__except">{blog.excerpt}</p>
                                            <a href="blog-details.html" className="swiftcart-btn swiftcart-border-btn">read more</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}

                {/* Newsletter Section */}
                {/* <div className="xc-newsletter-form pt-60 pb-60 xc-has-overlay" data-bg="/storage/img/bg/newsletter-bg.jpg">
                    <div className="container">
                        <div className="xc-newsletter-form__inner">
                            <div className="row justify-content-center text-center">
                                <div className="col-lg-8">
                                    <h3 className="xc-newsletter-form__title">Subscribe Newslatter</h3>
                                    <form action="#" className="xc-newsletter-form__main">
                                        <input type="email" placeholder="enter Email address " defaultValue="" />
                                        <button type="submit">Send Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* Footer Section */}
                <footer>
                    <div className="xc-footer-one pt-10">
                        <div className="container">
                            <div className="xc-footer-one__wrapper pb-10">
                                <div className="row gutter-y-40">
                                    <div className="col-md-6 col-lg-6 col-xl-3">
                                        <div className="xc-footer-one__widget xc-widget-col-1">
                                            <div className="xc-footer-one__logo">
                                                <a href="index-2.html">
                                                    <img src="/storage/img/logo/logo.png" alt="swiftcart" width="180" />
                                                </a>
                                            </div>
                                            <p className="xc-footer-one__about">4517 Washington Ave. Manchester, Kentucky 39495</p>
                                            <div className="xc-footer-one__cta">
                                                <span><a href="tel:(629)-555-0129"><i className="icon-phone"></i>+54(0)24 6547 8796</a></span>
                                                <span><a href="mailto:demo123@gmail.com"><i className="icon-mail"></i>demo123@gmail.com</a></span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-xl-2">
                                        <div className="xc-footer-one__widget xc-widget-col-2">
                                            <h3 className="xc-footer-one__widget-title">Quick links</h3>
                                            <ul className="xc-footer-one__nav">
                                                <li><a href="about.html">About us</a></li>
                                                <li><a href="about.html">Our story</a></li>
                                                <li><a href="404-2.html">Our Vendor</a></li>
                                                <li><a href="blog-list.html">Latest News</a></li>
                                                <li><a href="blog-list.html">Privacy Policy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-xl-2">
                                        <div className="xc-footer-one__widget xc-widget-col-3">
                                            <h3 className="xc-footer-one__widget-title">Top Category</h3>
                                            <ul className="xc-footer-one__nav">
                                                <li><a href="shop.html">Shop Product</a></li>
                                                <li><a href="cart.html">Shoping Cart </a></li>
                                                <li><a href="shop.html">Wishlist</a></li>
                                                <li><a href="about.html">Our story</a></li>
                                                <li><a href="contact.html">Customer Help</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-2">
                                        <div className="xc-footer-one__widget xc-widget-col-4">
                                            <h3 className="xc-footer-one__widget-title">Download App</h3>
                                            <div className="xc-footer-one__download d-flex flex-column gap-3">
                                                <a href="#"><img src="/storage/img/resourse/playstore-download.png" alt="playsote" /></a>
                                                <a href="#"><img src="/storage/img/resourse/appstore-download.png" alt="playsote" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-3">
                                        <div className="xc-footer-one__widget xc-widget-col-4">
                                            <h3 className="xc-footer-one__widget-title">Social Links</h3>
                                            <div className="xc-footer-one__social" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                                <a href="https://facebook.com/" style={{ fontSize: '24px' }}>
                                                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                                    <span className="sr-only">Facebook</span>
                                                </a>
                                                <a href="https://twitter.com/" style={{ fontSize: '24px', }}>
                                                    <i className="fab fa-x-twitter" aria-hidden="true"></i>
                                                    <span className="sr-only">Twitter</span>
                                                </a>
                                                <a href="https://pinterest.com/" style={{ fontSize: '24px', }}>
                                                    <i className="fab fa-pinterest-p" aria-hidden="true"></i>
                                                    <span className="sr-only">Pinterest</span>
                                                </a>
                                                <a href="https://instagram.com/" style={{ fontSize: '24px', }}>
                                                    <i className="fab fa-instagram" aria-hidden="true"></i>
                                                    <span className="sr-only">Instagram</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                        <div className="xc-footer-one-copyright">
                            <div className="container">
                                <div className="xc-footer-one-copyright__wrapper">
                                    <p className="xc-footer-one-copyright__text">
                                        &copy; Copyright <span className="xc-dynamic-year"></span> by
                                        <a target="_blank" href="#"> Textile </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}