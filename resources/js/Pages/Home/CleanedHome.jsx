import React from "react";
import Header from "./Header/Header";
// import './Home.css';


export default function Home() {
    return (
        <>
            <Header />
            {/* <div className="xc-preloader">
                <div className="xc-preloader__image">
                    <img src="/storage/img/preloader/preloader.png" alt="preloader" />
                </div>
            </div> */}

            <div className="xc-page-wrapper">
                <div className="xc-scrollbar_progress"></div>
                <div className="xc-body-overlay xc-close-toggler"></div>
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
                <div className="xc-mobile-nav__wrapper">
                    <div className="xc-mobile-nav__overlay xc-close-toggler"></div>

                    <div className="xc-mobile-nav__content">
                        <a href="#" className="xc-mobile-nav__close xc-search-popup__close xc-close-toggler"></a>
                        <div className="logo-box">
                            <a href="index-2.html"><img src="/storage/img/logo/white-logo.png" width="150" alt="" /></a>
                        </div>

                        <div className="xc-mobile-nav__menu"></div>


                        <ul className="xc-mobile-nav__contact list-unstyled">
                            <li>
                                <i className="fa fa-envelope"></i>
                                <a href="mailto:needhelp@swiftcart.com">needhelp@corpai.com</a>
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

                <div className="xc-back-to-top-wrapper">
                    <button id="xc_back-to-top" type="button" className="xc-back-to-top-btn">
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                strokeLinejoin="round"></path>
                        </svg>
                        <span className="xc-back-to-top-progress"></span>
                    </button>
                </div>


                <div className="xc-slider-three p-relative">
                    <div className="xc-slider-three__carousel swiftcart-owl__carousel owl-theme owl-carousel" data-owl-options='{
            "items": 1,
            "animateOut": "fadeOut",
		    "animateIn": "fadeIn",
            "margin": 0,
            "smartSpeed": 700,
            "loop":true,
            "autoplay": true,
            "nav":false,
            "URLhashListener":true,
            "dots":false,
            "navText": ["<span className=\"icon-arrow-left\"></span>","<span className=\"icon-arrow\"></span>"]
            }'>
                        <div className="item" data-hash="item1">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="xc-slider-three__img">
                                            <img src="/storage/img/slider/slider-lg-3-1.png" alt="slider image" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="xc-slider-three__content">
                                            <h4 className="xc-slider-three__bigtitle">Women’s</h4>
                                            <span className="xc-slider-three__subtitle"><i>women</i> Fashion</span>
                                            <h3 className="xc-slider-three__title"><span>Exclusive </span>Summer <br />
                                                Collection</h3>
                                            <a href="#" className="xc-slider-three__btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-hash="item2">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="xc-slider-three__img">
                                            <img src="/storage/img/slider/slider-lg-3-2.jpg" alt="slider image" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="xc-slider-three__content">
                                            <h4 className="xc-slider-three__bigtitle">Women’s</h4>
                                            <span className="xc-slider-three__subtitle"><i>women</i> Fashion</span>
                                            <h3 className="xc-slider-three__title"><span>Exclusive </span>Summer <br />
                                                Collection</h3>
                                            <a href="#" className="xc-slider-three__btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-hash="item3">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="xc-slider-three__img">
                                            <img src="/storage/img/slider/slider-lg-3-3.jpg" alt="slider image" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="xc-slider-three__content">
                                            <h4 className="xc-slider-three__bigtitle">Women’s</h4>
                                            <span className="xc-slider-three__subtitle"><i>women</i> Fashion</span>
                                            <h3 className="xc-slider-three__title"><span>Exclusive </span>Summer <br />
                                                Collection</h3>
                                            <a href="#" className="xc-slider-three__btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item" data-hash="item4">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="xc-slider-three__img">
                                            <img src="/storage/img/slider/slider-lg-3-4.jpg" alt="slider image" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="xc-slider-three__content">
                                            <h4 className="xc-slider-three__bigtitle">Women’s</h4>
                                            <span className="xc-slider-three__subtitle"><i>women</i> Fashion</span>
                                            <h3 className="xc-slider-three__title"><span>Exclusive </span>Summer <br />
                                                Collection</h3>
                                            <a href="#" className="xc-slider-three__btn">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xc-slider-three__carousel-thumb swiftcart-owl__carousel owl-theme owl-carousel"
                        data-owl-options='{
        "items":4,
        "margin": 40,
        "smartSpeed": 700,
        "loop":true,
        "autoplay": true,
        "URLhashListener":true,
        "dots":false,
        "responsive": {
            "0": {
                "items": 3
            },
            "1200": {
                "items": 4
            }
        }
        }'>

                        <a href="#item1" className="item">
                            <span className="xc-slider-three__thumb"><img src="/storage/img/slider/slider-3-1.png" alt="solox" /></span>
                        </a>
                        <a href="#item2" className="item">
                            <span className="xc-slider-three__thumb"><img src="/storage/img/slider/slider-3-2.png" alt="solox" /></span>
                        </a>
                        <a href="#item3" className="item">
                            <span className="xc-slider-three__thumb"><img src="/storage/img/slider/slider-3-3.png" alt="solox" /></span>
                        </a>
                        <a href="#item4" className="item">
                            <span className="xc-slider-three__thumb"><img src="/storage/img/slider/slider-3-4.png" alt="solox" /></span>
                        </a>
                    </div>
                </div>



                <div className="xc-banner-eight pt-80 pb-80">
                    <div className="container">
                        <div className="row gutter-y-20">
                            <div className="col-md-6 col-xl-3">
                                <div className="xc-banner-eight__item">
                                    <div className="xc-banner-eight__img w-img">
                                        <img src="/storage/img/banner/banner-8-1.jpg" alt="banner" />
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
                                        <img src="/storage/img/banner/banner-8-2.jpg" alt="banner" />
                                    </div>
                                    <div className="xc-banner-eight__content">
                                        <h3 className="xc-banner-eight__title"><a href="#">Women</a></h3>
                                        <span className=".xc-banner-eight__subtitle">Hot Collection</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="xc-banner-eight-lg">
                                    <div className="xc-banner-eight-lg__content">
                                        <span className="xc-banner-eight-lg__subtitle">UP TO 40% OFF</span>
                                        <h3 className="xc-banner-eight-lg__title">The Top Collections <br />
                                            of fall 2021</h3>
                                        <div className="xc-banner-eight-lg__btn">
                                            <a className="swiftcart-btn" href="shop.html">Shop Now</a>
                                        </div>
                                    </div>
                                    <div className="xc-banner-eight-lg__img">
                                        <img src="/storage/img/banner/banner-8-3.png" alt="banner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="xc-product-eight pb-80">
                    <div className="container">
                        <div className="xc-sec-heading xc-sec-heading-three text-center">
                            <h3 className="xc-sec-heading__title xc-style-3">Trending Outfits</h3>
                            <div className="xc-sec-heading__shape">
                                <img src="/storage/img/shapes/sec-title-border.png" alt="border" />
                            </div>
                        </div>
                        <div className="row gutter-y-30">
                            <div className="col-lg-3 col-md-6">
                                <div className="xc-product-eight__item">
                                    <div className="xc-product-eight__img">
                                        <img src="/storage/img/products/product-fas-5.png" alt="fas" />
                                        <span className="xc-product-eight__offer">30% off</span>
                                        <div className="xc-product-eight__icons">
                                            <button className="xc-product-eight__action">
                                                <i className="icon-love"></i>
                                                <span className="xc-product-eight__tooltip">Add To Wishlist</span>
                                            </button>
                                            <button className="xc-product-eight__action">
                                                <i className="icon-magnifying-glass"></i>
                                                <span className="xc-product-eight__tooltip">Quick view</span>
                                            </button>
                                            <button className="xc-product-eight__action">
                                                <i className="icon-shopping-cart"></i>
                                                <span className="xc-product-eight__tooltip">Add To Cart</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="xc-product-eight__content">
                                        <div className="xc-product-eight__ratting">
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            (25 Reviews)
                                        </div>
                                        <h3 className="xc-product-eight__title"><a href="product-details.html">women Billie Eilish
                                            n21</a>
                                        </h3>
                                        <h5 className="xc-product-eight__price"><del>$489</del> $289</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="xc-product-eight__item">
                                    <div className="xc-product-eight__img">
                                        <img src="/storage/img/products/product-fas-6.png" alt="fas" />
                                        <span className="xc-product-eight__offer">30% off</span>
                                        <div className="xc-product-eight__icons">
                                            <button className="xc-product-eight__action">
                                                <i className="icon-love"></i>
                                                <span className="xc-product-eight__tooltip">Add To Wishlist</span>
                                            </button>
                                            <button className="xc-product-eight__action">
                                                <i className="icon-magnifying-glass"></i>
                                                <span className="xc-product-eight__tooltip">Quick view</span>
                                            </button>
                                            <button className="xc-product-eight__action">
                                                <i className="icon-shopping-cart"></i>
                                                <span className="xc-product-eight__tooltip">Add To Cart</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="xc-product-eight__content">
                                        <div className="xc-product-eight__ratting">
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            (25 Reviews)
                                        </div>
                                        <h3 className="xc-product-eight__title"><a href="product-details.html">women Billie Eilish
                                            n21</a>
                                        </h3>
                                        <h5 className="xc-product-eight__price"><del>$489</del> $289</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="xc-product-eight__item">
                                    <div className="xc-product-eight__img">
                                        <img src="/storage/img/products/product-fas-7.png" alt="fas" />
                                        <span className="xc-product-eight__offer">30% off</span>
                                        <div className="xc-product-eight__icons">
                                            <button className="xc-product-eight__action">
                                                <i className="icon-love"></i>
                                                <span className="xc-product-eight__tooltip">Add To Wishlist</span>
                                            </button>
                                            <button className="xc-product-eight__action">
                                                <i className="icon-magnifying-glass"></i>
                                                <span className="xc-product-eight__tooltip">Quick view</span>
                                            </button>
                                            <button className="xc-product-eight__action">
                                                <i className="icon-shopping-cart"></i>
                                                <span className="xc-product-eight__tooltip">Add To Cart</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="xc-product-eight__content">
                                        <div className="xc-product-eight__ratting">
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            (25 Reviews)
                                        </div>
                                        <h3 className="xc-product-eight__title"><a href="product-details.html">women Billie Eilish
                                            n21</a>
                                        </h3>
                                        <h5 className="xc-product-eight__price"><del>$489</del> $289</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="xc-product-eight__item">
                                    <div className="xc-product-eight__img">
                                        <img src="/storage/img/products/product-fas-8.png" alt="fas" />
                                        <span className="xc-product-eight__offer">30% off</span>
                                        <div className="xc-product-eight__icons">
                                            <button className="xc-product-eight__action">
                                                <i className="icon-love"></i>
                                                <span className="xc-product-eight__tooltip">Add To Wishlist</span>
                                            </button>
                                            <button className="xc-product-eight__action">
                                                <i className="icon-magnifying-glass"></i>
                                                <span className="xc-product-eight__tooltip">Quick view</span>
                                            </button>
                                            <button className="xc-product-eight__action">
                                                <i className="icon-shopping-cart"></i>
                                                <span className="xc-product-eight__tooltip">Add To Cart</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="xc-product-eight__content">
                                        <div className="xc-product-eight__ratting">
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            (25 Reviews)
                                        </div>
                                        <h3 className="xc-product-eight__title"><a href="product-details.html">women Billie Eilish
                                            n21</a>
                                        </h3>
                                        <h5 className="xc-product-eight__price"><del>$489</del> $289</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="xc-ads-countdown grey-bg-2">
                    <div className="xc-ads-countdown__shape-2">
                        <img src="/storage/img/shapes/count-down-border-2.png" alt="border" />
                    </div>
                    <div className="container">
                        <div className="row align-items-center gutter-y-30">
                            <div className="col-lg-6">
                                <div className="xc-ads-countdown__img w-img">
                                    <img src="/storage/img/ads/count-down.png" alt="count" />
                                    <div className="xc-ads-countdown__shape">
                                        <img src="/storage/img/shapes/count-down-border.png" alt="border" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="xc-ads-countdown__content">
                                    <span className="xc-ads-countdown__subtitle">sumer collection</span>
                                    <h3 className="xc-ads-countdown__title">Buy one <u>get one</u></h3>
                                    <p className="xc-ads-countdown__info">Worttitor ut magna a hendrerit. Ut consequat lacinia magna
                                        <br />
                                        sed faucibus. Sed non odio justo. Nulla lao convallis orci <br /> placerat purus elementum
                                        molestie</p>
                                    <div className="xc-ads-countdown__count" data-countdown data-date="Nov 31 2025 20:20:22">
                                        <div className="xc-ads-countdown__count-inner">

                                            <ul>
                                                <li><span data-days>0</span> Days</li>
                                                <li><span data-hours>0</span> Hrs</li>
                                                <li><span data-minutes>0</span> min</li>
                                                <li><span data-seconds>0</span> sec</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="xc-ads-countdown__btn">
                                        <a className="swiftcart-btn-black swiftcart-btn-black-large" href="shop.html">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="xc-product-eight pt-80 pb-80">
                    <div className="container">
                        <div className="xc-sec-heading xc-sec-heading-three text-center">
                            <h3 className="xc-sec-heading__title xc-style-3">Trending Outfits</h3>
                            <div className="xc-sec-heading__shape">
                                <img src="/storage/img/shapes/sec-title-border.png" alt="border" />
                            </div>
                        </div>
                        <div className="row gutter-y-30">
                            <div className="col-lg-3 col-md-6">
                                <div className="xc-product-eight__item">
                                    <div className="xc-product-eight__img">
                                        <img src="/storage/img/products/product-fas-1.png" alt="fas" />
                                        <span className="xc-product-eight__offer">30% off</span>
                                        <div className="xc-product-eight__icons">
                                            <button className="xc-product-eight__action">
                                                <i className="icon-love"></i>
                                                <span className="xc-product-eight__tooltip">Add To Wishlist</span>
                                            </button>
                                            <button className="xc-product-eight__action">
                                                <i className="icon-magnifying-glass"></i>
                                                <span className="xc-product-eight__tooltip">Quick view</span>
                                            </button>
                                            <button className="xc-product-eight__action">
                                                <i className="icon-shopping-cart"></i>
                                                <span className="xc-product-eight__tooltip">Add To Cart</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="xc-product-eight__content">
                                        <div className="xc-product-eight__ratting">
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            (25 Reviews)
                                        </div>
                                        <h3 className="xc-product-eight__title"><a href="product-details.html">women Billie Eilish
                                            n21</a>
                                        </h3>
                                        <h5 className="xc-product-eight__price"><del>$489</del> $289</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="xc-product-eight__item">
                                    <div className="xc-product-eight__img">
                                        <img src="/storage/img/products/product-fas-2.png" alt="fas" />
                                        <span className="xc-product-eight__offer">30% off</span>
                                        <div className="xc-product-eight__icons">
                                            <button className="xc-product-eight__action">
                                                <i className="icon-love"></i>
                                                <span className="xc-product-eight__tooltip">Add To Wishlist</span>
                                            </button>
                                            <button className="xc-product-eight__action">
                                                <i className="icon-magnifying-glass"></i>
                                                <span className="xc-product-eight__tooltip">Quick view</span>
                                            </button>
                                            <button className="xc-product-eight__action">
                                                <i className="icon-shopping-cart"></i>
                                                <span className="xc-product-eight__tooltip">Add To Cart</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="xc-product-eight__content">
                                        <div className="xc-product-eight__ratting">
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            (25 Reviews)
                                        </div>
                                        <h3 className="xc-product-eight__title"><a href="product-details.html">women Billie Eilish
                                            n21</a>
                                        </h3>
                                        <h5 className="xc-product-eight__price"><del>$489</del> $289</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="xc-product-eight__item">
                                    <div className="xc-product-eight__img">
                                        <img src="/storage/img/products/product-fas-3.png" alt="fas" />
                                        <span className="xc-product-eight__offer">30% off</span>
                                        <div className="xc-product-eight__icons">
                                            <button className="xc-product-eight__action">
                                                <i className="icon-love"></i>
                                                <span className="xc-product-eight__tooltip">Add To Wishlist</span>
                                            </button>
                                            <button className="xc-product-eight__action">
                                                <i className="icon-magnifying-glass"></i>
                                                <span className="xc-product-eight__tooltip">Quick view</span>
                                            </button>
                                            <button className="xc-product-eight__action">
                                                <i className="icon-shopping-cart"></i>
                                                <span className="xc-product-eight__tooltip">Add To Cart</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="xc-product-eight__content">
                                        <div className="xc-product-eight__ratting">
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            (25 Reviews)
                                        </div>
                                        <h3 className="xc-product-eight__title"><a href="product-details.html">women Billie Eilish
                                            n21</a>
                                        </h3>
                                        <h5 className="xc-product-eight__price"><del>$489</del> $289</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="xc-product-eight__item">
                                    <div className="xc-product-eight__img">
                                        <img src="/storage/img/products/product-fas-4.png" alt="fas" />
                                        <span className="xc-product-eight__offer">30% off</span>
                                        <div className="xc-product-eight__icons">
                                            <button className="xc-product-eight__action">
                                                <i className="icon-love"></i>
                                                <span className="xc-product-eight__tooltip">Add To Wishlist</span>
                                            </button>
                                            <button className="xc-product-eight__action">
                                                <i className="icon-magnifying-glass"></i>
                                                <span className="xc-product-eight__tooltip">Quick view</span>
                                            </button>
                                            <button className="xc-product-eight__action">
                                                <i className="icon-shopping-cart"></i>
                                                <span className="xc-product-eight__tooltip">Add To Cart</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="xc-product-eight__content">
                                        <div className="xc-product-eight__ratting">
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            <i className="icon-star"></i>
                                            (25 Reviews)
                                        </div>
                                        <h3 className="xc-product-eight__title"><a href="product-details.html">women Billie Eilish
                                            n21</a>
                                        </h3>
                                        <h5 className="xc-product-eight__price"><del>$489</del> $289</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="xc-banner-nine pb-80">
                    <div className="container">
                        <div className="row gutter-y-20">
                            <div className="col-lg-6">
                                <div className="xc-banner-nine__box">
                                    <div className="xc-banner-nine__bg w-img">
                                        <img src="/storage/img/banner/banne-9-1.jpg" alt="banner nine" />
                                    </div>
                                    <div className="xc-banner-nine__content">
                                        <span className="xc-banner-nine__subtitle">New arrival collection</span>
                                        <h3 className="xc-banner-nine__title">off60%</h3>
                                        <div className="xc-banner-nine__btn">
                                            <a href="shop.html" className="swiftcart-btn-black">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="xc-banner-nine__box xc-banner-nine__box-2">
                                    <div className="xc-banner-nine__bg w-img">
                                        <img src="/storage/img/banner/banne-9-2.jpg" alt="banner nine" />
                                    </div>
                                    <div className="xc-banner-nine__content">
                                        <span className="xc-banner-nine__subtitle">Check featured items</span>
                                        <h3 className="xc-banner-nine__title">SALE<span>50%</span></h3>
                                        <div className="xc-banner-nine__btn">
                                            <a href="shop.html" className="swiftcart-btn-black">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="xc-best-deal pb-80">
                    <div className="container">
                        <div className="xc-best-deal__filter-box has-border tabs-box">
                            <div className="xc-best-deal__filter-box-wrap mb-20">
                                <ul className="xc-best-deal__filter-btn tab-buttons">
                                    <li data-tab="#all" className="tab-btn active-btn"><span>All</span>
                                    </li>
                                    <li data-tab="#new" className="tab-btn"><span>New Arrivals</span>
                                    </li>
                                    <li data-tab="#trending" className="tab-btn"><span>Trending</span></li>
                                    <li data-tab="#top" className="tab-btn"><span>Top Seller</span></li>
                                    <li data-tab="#best" className="tab-btn"><span>Best offer</span></li>
                                </ul>
                            </div>
                            <div className="xc-product-man-woman__wrapper tabs-content">
                                <div className="tab active-tab" id="all">
                                    <div className="row gutter-y-30">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="xc-product-ten__item">
                                                <div className="xc-product-ten__img w-img">
                                                    <img src="/storage/img/products/product-tending-1.png" alt="product" />
                                                </div>
                                                <div className="xc-product-ten__content">
                                                    <h3 className="xc-product-ten__title"><a href="product-details.html">women
                                                        Billie Eilish</a></h3>
                                                    <h4 className="xc-product-ten__price"><del>$489</del> $289</h4>
                                                    <div className="xc-product-ten__btn">
                                                        <a href="#"><i className="icon-magnifying-glass"></i></a>
                                                        <a href="product-details.html"><i className="icon-eye"></i></a>
                                                        <a href="cart.html"><i className="icon-grocery-store"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="xc-product-ten__item">
                                                <div className="xc-product-ten__img w-img">
                                                    <img src="/storage/img/products/product-tending-2.png" alt="product" />
                                                </div>
                                                <div className="xc-product-ten__content">
                                                    <h3 className="xc-product-ten__title"><a href="product-details.html">women
                                                        Billie Eilish</a></h3>
                                                    <h4 className="xc-product-ten__price"><del>$489</del> $289</h4>
                                                    <div className="xc-product-ten__btn">
                                                        <a href="#"><i className="icon-magnifying-glass"></i></a>
                                                        <a href="product-details.html"><i className="icon-eye"></i></a>
                                                        <a href="cart.html"><i className="icon-grocery-store"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="xc-product-ten__item">
                                                <div className="xc-product-ten__img w-img">
                                                    <img src="/storage/img/products/product-tending-3.png" alt="product" />
                                                </div>
                                                <div className="xc-product-ten__content">
                                                    <h3 className="xc-product-ten__title"><a href="product-details.html">women
                                                        Billie Eilish</a></h3>
                                                    <h4 className="xc-product-ten__price"><del>$489</del> $289</h4>
                                                    <div className="xc-product-ten__btn">
                                                        <a href="#"><i className="icon-magnifying-glass"></i></a>
                                                        <a href="product-details.html"><i className="icon-eye"></i></a>
                                                        <a href="cart.html"><i className="icon-grocery-store"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab" id="new">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="xc-product-ten__item">
                                                <div className="xc-product-ten__img w-img">
                                                    <img src="/storage/img/products/product-tending-2.png" alt="product" />
                                                </div>
                                                <div className="xc-product-ten__content">
                                                    <h3 className="xc-product-ten__title"><a href="product-details.html">women
                                                        Billie Eilish</a></h3>
                                                    <h4 className="xc-product-ten__price"><del>$489</del> $289</h4>
                                                    <div className="xc-product-ten__btn">
                                                        <a href="#"><i className="icon-magnifying-glass"></i></a>
                                                        <a href="product-details.html"><i className="icon-eye"></i></a>
                                                        <a href="cart.html"><i className="icon-grocery-store"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="xc-product-ten__item">
                                                <div className="xc-product-ten__img w-img">
                                                    <img src="/storage/img/products/product-tending-1.png" alt="product" />
                                                </div>
                                                <div className="xc-product-ten__content">
                                                    <h3 className="xc-product-ten__title"><a href="product-details.html">women
                                                        Billie Eilish</a></h3>
                                                    <h4 className="xc-product-ten__price"><del>$489</del> $289</h4>
                                                    <div className="xc-product-ten__btn">
                                                        <a href="#"><i className="icon-magnifying-glass"></i></a>
                                                        <a href="product-details.html"><i className="icon-eye"></i></a>
                                                        <a href="cart.html"><i className="icon-grocery-store"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="xc-product-ten__item">
                                                <div className="xc-product-ten__img w-img">
                                                    <img src="/storage/img/products/product-tending-3.png" alt="product" />
                                                </div>
                                                <div className="xc-product-ten__content">
                                                    <h3 className="xc-product-ten__title"><a href="product-details.html">women
                                                        Billie Eilish</a></h3>
                                                    <h4 className="xc-product-ten__price"><del>$489</del> $289</h4>
                                                    <div className="xc-product-ten__btn">
                                                        <a href="#"><i className="icon-magnifying-glass"></i></a>
                                                        <a href="product-details.html"><i className="icon-eye"></i></a>
                                                        <a href="cart.html"><i className="icon-grocery-store"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab" id="trending">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="xc-product-ten__item">
                                                <div className="xc-product-ten__img w-img">
                                                    <img src="/storage/img/products/product-tending-3.png" alt="product" />
                                                </div>
                                                <div className="xc-product-ten__content">
                                                    <h3 className="xc-product-ten__title"><a href="product-details.html">women
                                                        Billie Eilish</a></h3>
                                                    <h4 className="xc-product-ten__price"><del>$489</del> $289</h4>
                                                    <div className="xc-product-ten__btn">
                                                        <a href="#"><i className="icon-magnifying-glass"></i></a>
                                                        <a href="product-details.html"><i className="icon-eye"></i></a>
                                                        <a href="cart.html"><i className="icon-grocery-store"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="xc-product-ten__item">
                                                <div className="xc-product-ten__img w-img">
                                                    <img src="/storage/img/products/product-tending-1.png" alt="product" />
                                                </div>
                                                <div className="xc-product-ten__content">
                                                    <h3 className="xc-product-ten__title"><a href="product-details.html">women
                                                        Billie Eilish</a></h3>
                                                    <h4 className="xc-product-ten__price"><del>$489</del> $289</h4>
                                                    <div className="xc-product-ten__btn">
                                                        <a href="#"><i className="icon-magnifying-glass"></i></a>
                                                        <a href="product-details.html"><i className="icon-eye"></i></a>
                                                        <a href="cart.html"><i className="icon-grocery-store"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="xc-product-ten__item">
                                                <div className="xc-product-ten__img w-img">
                                                    <img src="/storage/img/products/product-tending-2.png" alt="product" />
                                                </div>
                                                <div className="xc-product-ten__content">
                                                    <h3 className="xc-product-ten__title"><a href="product-details.html">women
                                                        Billie Eilish</a></h3>
                                                    <h4 className="xc-product-ten__price"><del>$489</del> $289</h4>
                                                    <div className="xc-product-ten__btn">
                                                        <a href="#"><i className="icon-magnifying-glass"></i></a>
                                                        <a href="product-details.html"><i className="icon-eye"></i></a>
                                                        <a href="cart.html"><i className="icon-grocery-store"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab" id="top">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="xc-product-ten__item">
                                                <div className="xc-product-ten__img w-img">
                                                    <img src="/storage/img/products/product-tending-1.png" alt="product" />
                                                </div>
                                                <div className="xc-product-ten__content">
                                                    <h3 className="xc-product-ten__title"><a href="product-details.html">women
                                                        Billie Eilish</a></h3>
                                                    <h4 className="xc-product-ten__price"><del>$489</del> $289</h4>
                                                    <div className="xc-product-ten__btn">
                                                        <a href="#"><i className="icon-magnifying-glass"></i></a>
                                                        <a href="product-details.html"><i className="icon-eye"></i></a>
                                                        <a href="cart.html"><i className="icon-grocery-store"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="xc-product-ten__item">
                                                <div className="xc-product-ten__img w-img">
                                                    <img src="/storage/img/products/product-tending-2.png" alt="product" />
                                                </div>
                                                <div className="xc-product-ten__content">
                                                    <h3 className="xc-product-ten__title"><a href="product-details.html">women
                                                        Billie Eilish</a></h3>
                                                    <h4 className="xc-product-ten__price"><del>$489</del> $289</h4>
                                                    <div className="xc-product-ten__btn">
                                                        <a href="#"><i className="icon-magnifying-glass"></i></a>
                                                        <a href="product-details.html"><i className="icon-eye"></i></a>
                                                        <a href="cart.html"><i className="icon-grocery-store"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="xc-product-ten__item">
                                                <div className="xc-product-ten__img w-img">
                                                    <img src="/storage/img/products/product-tending-3.png" alt="product" />
                                                </div>
                                                <div className="xc-product-ten__content">
                                                    <h3 className="xc-product-ten__title"><a href="product-details.html">women
                                                        Billie Eilish</a></h3>
                                                    <h4 className="xc-product-ten__price"><del>$489</del> $289</h4>
                                                    <div className="xc-product-ten__btn">
                                                        <a href="#"><i className="icon-magnifying-glass"></i></a>
                                                        <a href="product-details.html"><i className="icon-eye"></i></a>
                                                        <a href="cart.html"><i className="icon-grocery-store"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab" id="best">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="xc-product-ten__item">
                                                <div className="xc-product-ten__img w-img">
                                                    <img src="/storage/img/products/product-tending-1.png" alt="product" />
                                                </div>
                                                <div className="xc-product-ten__content">
                                                    <h3 className="xc-product-ten__title"><a href="product-details.html">women
                                                        Billie Eilish</a></h3>
                                                    <h4 className="xc-product-ten__price"><del>$489</del> $289</h4>
                                                    <div className="xc-product-ten__btn">
                                                        <a href="#"><i className="icon-magnifying-glass"></i></a>
                                                        <a href="product-details.html"><i className="icon-eye"></i></a>
                                                        <a href="cart.html"><i className="icon-grocery-store"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="xc-product-ten__item">
                                                <div className="xc-product-ten__img w-img">
                                                    <img src="/storage/img/products/product-tending-3.png" alt="product" />
                                                </div>
                                                <div className="xc-product-ten__content">
                                                    <h3 className="xc-product-ten__title"><a href="product-details.html">women
                                                        Billie Eilish</a></h3>
                                                    <h4 className="xc-product-ten__price"><del>$489</del> $289</h4>
                                                    <div className="xc-product-ten__btn">
                                                        <a href="#"><i className="icon-magnifying-glass"></i></a>
                                                        <a href="product-details.html"><i className="icon-eye"></i></a>
                                                        <a href="cart.html"><i className="icon-grocery-store"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="xc-product-ten__item">
                                                <div className="xc-product-ten__img w-img">
                                                    <img src="/storage/img/products/product-tending-2.png" alt="product" />
                                                </div>
                                                <div className="xc-product-ten__content">
                                                    <h3 className="xc-product-ten__title"><a href="product-details.html">women
                                                        Billie Eilish</a></h3>
                                                    <h4 className="xc-product-ten__price"><del>$489</del> $289</h4>
                                                    <div className="xc-product-ten__btn">
                                                        <a href="#"><i className="icon-magnifying-glass"></i></a>
                                                        <a href="product-details.html"><i className="icon-eye"></i></a>
                                                        <a href="cart.html"><i className="icon-grocery-store"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="xc-seller-one pb-80">
                    <div className="container">
                        <div className="xc-sec-heading xc-has-btn">
                            <h3 className="xc-sec-heading__title xc-style-3">Top Seller</h3>
                            <div className="xc-sec-heading__btn">
                                <a href="shop.html" className="xc-sec-heading-btn">show all</a>
                            </div>
                        </div>
                        <div className="xc-seller-one__wrapper">
                            <div className="row g-0">
                                <div className="col-md-6 col-xl-3">
                                    <div className="xc-seller-one__item">
                                        <div className="xc-seller-one__content">
                                            <img src="/storage/img/seller/seller-1-1.png" alt="seller" />
                                            <h3 className="xc-seller-one__title"><a href="#">P&G Fashion House</a></h3>
                                            <span className="xc-seller-one__ratting">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                (15 reviews)
                                            </span>
                                        </div>
                                        <div className="xc-seller-one__button">
                                            <a className="xc-seller-one__btn" href="vendor.html">Visit Store <i
                                                className="icon-next"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3">
                                    <div className="xc-seller-one__item">
                                        <div className="xc-seller-one__content">
                                            <img src="/storage/img/seller/seller-1-2.png" alt="seller" />
                                            <h3 className="xc-seller-one__title"><a href="#">Best Electronics</a></h3>
                                            <span className="xc-seller-one__ratting">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                (15 reviews)
                                            </span>
                                        </div>
                                        <div className="xc-seller-one__button">
                                            <a className="xc-seller-one__btn" href="vendor.html">Visit Store <i
                                                className="icon-next"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3">
                                    <div className="xc-seller-one__item">
                                        <div className="xc-seller-one__content">
                                            <img src="/storage/img/seller/seller-1-3.png" alt="seller" />
                                            <h3 className="xc-seller-one__title"><a href="#">Belle Cosmetics</a></h3>
                                            <span className="xc-seller-one__ratting">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                (15 reviews)
                                            </span>
                                        </div>
                                        <div className="xc-seller-one__button">
                                            <a className="xc-seller-one__btn" href="vendor.html">Visit Store <i
                                                className="icon-next"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3">
                                    <div className="xc-seller-one__item">
                                        <div className="xc-seller-one__content">
                                            <img src="/storage/img/seller/seller-1-4.png" alt="seller" />
                                            <h3 className="xc-seller-one__title"><a href="#">The North Face</a></h3>
                                            <span className="xc-seller-one__ratting">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                (15 reviews)
                                            </span>
                                        </div>
                                        <div className="xc-seller-one__button">
                                            <a className="xc-seller-one__btn" href="vendor.html">Visit Store <i
                                                className="icon-next"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="xc-testimonial-one pt-80 pb-80 include-bg" data-bg="/storage/img/bg/testi-bg.jpg">
                    <div className="container">
                        <div className="xc-testimonial-one__carousel swiftcart-owl__carousel owl-theme owl-carousel"
                            data-owl-options='{
            "items": 3,
            "margin": 30,
            "smartSpeed": 700,
            "loop":true,
            "autoplay": true,
            "nav":false,
            "URLhashListener":true,
            "dots":false,
            "navText": ["<span className=\"icon-arrow-left\"></span>","<span className=\"icon-arrow\"></span>"],
            "responsive": {
                "0": {
                    "items": 1
                },
                "768": {
                    "items": 2
                },
                "1200": {
                    "items": 3
                }
            }
            }'>
                            <div className="item">
                                <div className="xc-testimonial-one__item">
                                    <div className="xc-testimonial-one__head">
                                        <div className="xc-testimonial-one__thumb">
                                            <img src="/storage/img/testimonial/testimonial-1-1.jpg" alt="" />
                                        </div>
                                        <div className="xc-testimonial-one__info">
                                            <h3 className="xc-testimonial-one__name">Women Billie</h3>
                                            <p className="xc-testimonial-one__bio">Customer</p>
                                        </div>
                                    </div>
                                    <p className="xc-testimonial-one__review">Emet minim mollit non deserunt ullamco est sit aliqua
                                        dolor do
                                        amet sint</p>
                                    <div className="xc-testimonial-one__ratting">
                                        <span><i className="icon-star"></i></span>
                                        <span><i className="icon-star"></i></span>
                                        <span><i className="icon-star"></i></span>
                                        <span><i className="icon-star"></i></span>
                                        <span><i className="icon-star"></i></span>
                                    </div>
                                    <div className="xc-testimonial-one__quote">
                                        <img src="/storage/img/icons/quote.png" alt="quote" />
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="xc-testimonial-one__item">
                                    <div className="xc-testimonial-one__head">
                                        <div className="xc-testimonial-one__thumb">
                                            <img src="/storage/img/testimonial/testimonial-1-2.jpg" alt="" />
                                        </div>
                                        <div className="xc-testimonial-one__info">
                                            <h3 className="xc-testimonial-one__name">Esther Howard</h3>
                                            <p className="xc-testimonial-one__bio">Customer</p>
                                        </div>
                                    </div>
                                    <p className="xc-testimonial-one__review">Emet minim mollit non deserunt ullamco est sit aliqua
                                        dolor do
                                        amet sint</p>
                                    <div className="xc-testimonial-one__ratting">
                                        <span><i className="icon-star"></i></span>
                                        <span><i className="icon-star"></i></span>
                                        <span><i className="icon-star"></i></span>
                                        <span><i className="icon-star"></i></span>
                                        <span><i className="icon-star"></i></span>
                                    </div>
                                    <div className="xc-testimonial-one__quote">
                                        <img src="/storage/img/icons/quote.png" alt="quote" />
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="xc-testimonial-one__item">
                                    <div className="xc-testimonial-one__head">
                                        <div className="xc-testimonial-one__thumb">
                                            <img src="/storage/img/testimonial/testimonial-1-3.jpg" alt="" />
                                        </div>
                                        <div className="xc-testimonial-one__info">
                                            <h3 className="xc-testimonial-one__name">Wiliam Jonson</h3>
                                            <p className="xc-testimonial-one__bio">Customer</p>
                                        </div>
                                    </div>
                                    <p className="xc-testimonial-one__review">Emet minim mollit non deserunt ullamco est sit aliqua
                                        dolor do
                                        amet sint</p>
                                    <div className="xc-testimonial-one__ratting">
                                        <span><i className="icon-star"></i></span>
                                        <span><i className="icon-star"></i></span>
                                        <span><i className="icon-star"></i></span>
                                        <span><i className="icon-star"></i></span>
                                        <span><i className="icon-star"></i></span>
                                    </div>
                                    <div className="xc-testimonial-one__quote">
                                        <img src="/storage/img/icons/quote.png" alt="quote" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="xc-blog-one pb-50 pt-80">
                    <div className="container">
                        <div className="xc-sec-heading xc-sec-heading-three text-center">
                            <h3 className="xc-sec-heading__title xc-style-3">Our latest blog post</h3>
                            <div className="xc-sec-heading__shape">
                                <img src="/storage/img/shapes/sec-title-border.png" alt="border" />
                            </div>
                        </div>
                        <div className="row gutter-y-30">
                            <div className="col-md-6 col-xl-4">
                                <div className="xc-blog-one__item wow xcfadeUp" data-wow-delay='100ms'>
                                    <div className="xc-blog-one__thumb w-img">
                                        <img src="/storage/img/blog/blog-1-1.jpg" alt="/storage/img/blog/blog-1-1.jpg" />
                                        <div className="xc-blog-one__meta-2">
                                            <a href="#">by - Swiftcart </a>
                                            <span>28 september</span>
                                        </div>
                                    </div>
                                    <div className="xc-blog-one__content">
                                        <h3 className="xc-blog-one__title"><a href="blog-details.html">How WooCommerce Can Transform
                                            Your Business</a></h3>
                                        <ul className="xc-blog-one__meta list-unstyled">
                                            <li className="xc-post-cat">
                                                <a href="#">Fashion</a>
                                            </li>
                                            <li className="xc-post-comment">
                                                <a href="#">2 Comments</a>
                                            </li>
                                            <li className="xc-post-view">
                                                <span className="xc-post-view">147 View</span>
                                            </li>
                                        </ul>
                                        <p className="xc-blog-one__except">Amet minim mollit non deserunt ullaest sit aliqua dolor
                                            do amet sint. Velit officia consequat duis enim lit Exercitation veniam consequat
                                            sunt nostrud amet.</p>
                                        <a href="blog-details.html" className="swiftcart-btn swiftcart-border-btn">read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="xc-blog-one__item wow xcfadeUp" data-wow-delay='200ms'>
                                    <div className="xc-blog-one__thumb w-img">
                                        <img src="/storage/img/blog/blog-1-2.jpg" alt="/storage/img/blog/blog-1-2.jpg" />
                                        <div className="xc-blog-one__meta-2">
                                            <a href="#">by - Swiftcart </a>
                                            <span>28 september</span>
                                        </div>
                                    </div>
                                    <div className="xc-blog-one__content">
                                        <h3 className="xc-blog-one__title"><a href="blog-details.html">Transforming Businesses in
                                            the Digital Age</a></h3>
                                        <ul className="xc-blog-one__meta list-unstyled">
                                            <li className="xc-post-cat">
                                                <a href="#">Digital</a>
                                            </li>
                                            <li className="xc-post-comment">
                                                <a href="#">2 Comments</a>
                                            </li>
                                            <li className="xc-post-view">
                                                <span className="xc-post-view">147 View</span>
                                            </li>
                                        </ul>
                                        <p className="xc-blog-one__except">Amet minim mollit non deserunt ullaest sit aliqua dolor
                                            do amet sint. Velit officia consequat duis enim lit Exercitation veniam consequat
                                            sunt nostrud amet.</p>
                                        <a href="blog-details.html" className="swiftcart-btn swiftcart-border-btn">read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="xc-blog-one__item wow xcfadeUp" data-wow-delay='300ms'>
                                    <div className="xc-blog-one__thumb w-img">
                                        <img src="/storage/img/blog/blog-1-3.jpg" alt="/storage/img/blog/blog-1-3.jpg" />
                                        <div className="xc-blog-one__meta-2">
                                            <a href="#">by - Swiftcart </a>
                                            <span>28 september</span>
                                        </div>
                                    </div>
                                    <div className="xc-blog-one__content">
                                        <h3 className="xc-blog-one__title"><a href="blog-details.html">Digital Fashion Trends with
                                            WooCommerce Shop</a></h3>
                                        <ul className="xc-blog-one__meta list-unstyled">
                                            <li className="xc-post-cat">
                                                <a href="#">Shop</a>
                                            </li>
                                            <li className="xc-post-comment">
                                                <a href="#">2 Comments</a>
                                            </li>
                                            <li className="xc-post-view">
                                                <span className="xc-post-view">147 View</span>
                                            </li>
                                        </ul>
                                        <p className="xc-blog-one__except">Amet minim mollit non deserunt ullaest sit aliqua dolor
                                            do amet sint. Velit officia consequat duis enim lit Exercitation veniam consequat
                                            sunt nostrud amet.</p>
                                        <a href="blog-details.html" className="swiftcart-btn swiftcart-border-btn">read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="xc-newsletter-form pt-60 pb-60 xc-has-overlay" data-bg="/storage/img/bg/newsletter-bg.jpg">
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
                </div>

                <footer>
                    <div className="xc-footer-one black-bg-2 pt-80">
                        <div className="container">
                            <div className="xc-footer-one__wrapper pb-60">
                                <div className="row gutter-y-40">
                                    <div className="col-md-6 col-lg-6 col-xl-3">
                                        <div className="xc-footer-one__widget xc-widget-col-1">
                                            <div className="xc-footer-one__logo">
                                                <a href="index-2.html">
                                                    <img src="/storage/img/logo/white-logo.png" alt="swiftcart"
                                                        width="180" /></a>
                                            </div>
                                            <p className="xc-footer-one__about">4517 Washington Ave. Manchester, Kentucky 39495</p>
                                            <div className="xc-footer-one__cta">
                                                <span><a href="tel:(629)-555-0129"><i className="icon-phone"></i>+54(0)24 6547
                                                    8796</a></span>
                                                <span><a href="mailto:demo123@gmail.com"><i
                                                    className="icon-mail"></i>demo123@gmail.com</a></span>
                                            </div>
                                            <div className="xc-footer-one__social">
                                                <a href="https://facebook.com/">
                                                    <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                                    <span className="sr-only">Facebook</span>
                                                </a>
                                                <a href="https://twitter.com/">
                                                    <i className="fab fa-x-twitter" aria-hidden="true"></i>
                                                    <span className="sr-only">Twitter</span>
                                                </a>
                                                <a href="https://pinterest.com/">
                                                    <i className="fab fa-pinterest-p" aria-hidden="true"></i>
                                                    <span className="sr-only">Pinterest</span>
                                                </a>
                                                <a href="https://instagram.com/">
                                                    <i className="fab fa-instagram" aria-hidden="true"></i>
                                                    <span className="sr-only">Instagram</span>
                                                </a>
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
                                                <a href="#"><img src="/storage/img/resourse/playstore-download.png"
                                                    alt="playsote" /></a>
                                                <a href="#"><img src="/storage/img/resourse/appstore-download.png"
                                                    alt="playsote" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-3">
                                        <div className="xc-footer-one__widget xc-widget-col-4">
                                            <h3 className="xc-footer-one__widget-title">Popular Tag</h3>
                                            <div className="tagcloud tagcloud-style-2">
                                                <a href="blog-details.html">Software</a>
                                                <a href="blog-details.html">Outsourcing</a>
                                                <a href="blog-details.html">Online</a>
                                                <a href="blog-details.html">Business</a>
                                                <a href="blog-details.html">Security</a>
                                                <a href="blog-details.html">Technology</a>
                                                <a href="blog-details.html">UI/UX</a>
                                                <a href="blog-details.html">People</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xc-footer-one-copyright">
                            <div className="container">
                                <div className="xc-footer-one-copyright__wrapper">
                                    <p className="xc-footer-one-copyright__text">&copy; Copyright <span
                                        className="xc-dynamic-year"></span> by
                                        <a target="_blank" href="https://themeforest.net/user/SolverWp"> SolverWp </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>


            <script src="/storage/vendors/jquery/jquery-3.7.0.min.js"></script>
            <script src="/storage/vendors/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="/storage/vendors/nice-select/js/nice-select.js"></script>
            <script src="/storage/vendors/wow/wow.js"></script>
            <script src="/storage/vendors/meanmenu/js/meanmenu.js"></script>
            <script src="/storage/vendors/jarallax/jarallax.min.js"></script>
            <script src="/storage/vendors/jquery-ui/jquery-ui.js"></script>
            <script src="/storage/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js"></script>
            <script src="/storage/vendors/jquery-appear/jquery.appear.min.js"></script>
            <script src="/storage/vendors/jquery-circle-progress/jquery.circle-progress.min.js"></script>
            <script src="/storage/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js"></script>
            <script src="/storage/vendors/jquery-validate/jquery.validate.min.js"></script>
            <script src="/storage/vendors/nouislider/nouislider.min.js"></script>
            <script src="/storage/vendors/tiny-slider/tiny-slider.js"></script>
            <script src="/storage/vendors/wnumb/wNumb.min.js"></script>
            <script src="/storage/vendors/owl-carousel/js/owl.carousel.min.js"></script>
            <script src="/storage/vendors/swiper/js/swiper.min.js"></script>
            <script src="/storage/vendors/imagesloaded/imagesloaded.min.js"></script>
            <script src="/storage/vendors/isotope/isotope.js"></script>
            <script src="/storage/vendors/countdown/countdown.min.js"></script>
            <script src="/storage/vendors/jquery-circleType/jquery.circleType.js"></script>
            <script src="/storage/vendors/jquery-lettering/jquery.lettering.min.js"></script>
            <script src="/storage/vendors/ion.rangeSlider/ion.rangeSlider.min.js"></script>
            <script src="/storage/vendors/jquery-ui/jquery-ui.js"></script>
            <script src="/storage/vendors/glightbox/js/glightbox.min.js"></script>
            <script src="../unpkg.com/splitting%401.1.0/dist/splitting.min.js"></script>
            <script src="../unpkg.com/scroll-out%402.2.12/dist/scroll-out.min.js"></script>


            <script src="/storage/js/swiftcart.js"></script>
        </>
    );
}
