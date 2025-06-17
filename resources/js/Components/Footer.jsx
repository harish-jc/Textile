import React from "react";

export default function Footer() {
    return (
        <footer id="footer">
            <div className="xc-footer-one pt-10" style={{ backgroundColor: '#000', color: '#ccc' }}>
                <div className="container">
                    <div className="xc-footer-one__wrapper pb-10">
                        <div className="row gutter-y-40">

                            {/* Column 1: Logo & Contact Info */}
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="xc-footer-one__widget xc-widget-col-1">
                                    <div className="xc-footer-one__logo">
                                        <a href="index-2.html">
                                            <img src="/storage/img/logo/logo.png" alt="swiftcart" width="180" />
                                        </a>
                                    </div>
                                    <p className="xc-footer-one__about" style={{ color: '#ccc' }}>
                                        4517 Washington Ave. Manchester, Kentucky 39495
                                    </p>
                                    <div className="xc-footer-one__cta">
                                        <a href="tel:(629)-555-0129" style={{ color: '#ccc' }}>
                                            <i className="icon-phone"></i> +91 9876543210
                                        </a>
                                        <br />
                                        <a href="mailto:demo123@gmail.com" style={{ color: '#ccc' }}>
                                            <i className="icon-mail"></i> textile@trust.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Column 2: Quick Links */}
                            <div className="col-md-6 col-lg-3 col-xl-2">
                                <div className="xc-footer-one__widget xc-widget-col-2">
                                    <h3 className="xc-footer-one__widget-title" style={{ color: '#fff' }}>Quick links</h3>
                                    <ul className="xc-footer-one__nav">
                                        <li><a href="/" style={{ color: '#ccc' }}>About us</a></li>
                                        <li><a href="/" style={{ color: '#ccc' }}>Our story</a></li>
                                        <li><a href="/" style={{ color: '#ccc' }}>Our Vendor</a></li>
                                        <li><a href="/" style={{ color: '#ccc' }}>Latest News</a></li>
                                        <li><a href="/" style={{ color: '#ccc' }}>Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Column 3: Top Category */}
                            <div className="col-md-6 col-lg-3 col-xl-2">
                                <div className="xc-footer-one__widget xc-widget-col-3">
                                    <h3 className="xc-footer-one__widget-title" style={{ color: '#fff' }}>Top Category</h3>
                                    <ul className="xc-footer-one__nav">
                                        <li><a href={route('products.index', { title: 'Our Products' })} style={{ color: '#ccc' }}>Shop Product</a></li>
                                        <li><a href={route('cart.index')} style={{ color: '#ccc' }}>Shoping Cart</a></li>
                                        <li><a href={route('cart.index')} style={{ color: '#ccc' }}>Wishlist</a></li>
                                        <li><a href="/" style={{ color: '#ccc' }}>Our story</a></li>
                                        <li><a href={route('contact')} style={{ color: '#ccc' }}>Customer Help</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Column 4: Download App */}
                            <div className="col-md-6 col-lg-6 col-xl-2">
                                <div className="xc-footer-one__widget xc-widget-col-4">
                                    <h3 className="xc-footer-one__widget-title" style={{ color: '#fff' }}>Download App</h3>
                                    <div className="xc-footer-one__download d-flex flex-column gap-3">
                                        <a href="#"><img src="/storage/img/resourse/playstore-download.png" alt="playstore" /></a>
                                        <a href="#"><img src="/storage/img/resourse/appstore-download.png" alt="appstore" /></a>
                                    </div>
                                </div>
                            </div>

                            {/* Column 5: Social Links */}
                            <div className="col-md-6 col-lg-6 col-xl-3">
                                <div className="xc-footer-one__widget xc-widget-col-4">
                                    <h3 className="xc-footer-one__widget-title" style={{ color: '#fff' }}>Social Links</h3>
                                    <div className="xc-footer-one__social" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                        <a href="https://facebook.com/" style={{ fontSize: '24px', color: '#ccc' }}>
                                            <i className="fab fa-facebook-f" aria-hidden="true"></i>
                                            <span className="sr-only">Facebook</span>
                                        </a>
                                        <a href="https://twitter.com/" style={{ fontSize: '24px', color: '#ccc' }}>
                                            <i className="fab fa-x-twitter" aria-hidden="true"></i>
                                            <span className="sr-only">Twitter</span>
                                        </a>
                                        <a href="https://pinterest.com/" style={{ fontSize: '24px', color: '#ccc' }}>
                                            <i className="fab fa-pinterest-p" aria-hidden="true"></i>
                                            <span className="sr-only">Pinterest</span>
                                        </a>
                                        <a href="https://instagram.com/" style={{ fontSize: '24px', color: '#ccc' }}>
                                            <i className="fab fa-instagram" aria-hidden="true"></i>
                                            <span className="sr-only">Instagram</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div style={{ backgroundColor: '#111', padding: '10px 0' }}>
                    <div className="container">
                        <div className="text-center">
                            <p style={{ margin: 0, color: '#ccc' }}>
                                &copy; {new Date().getFullYear()} by
                                <a target="_blank" href="#" style={{ color: '#ccc', marginLeft: '5px' }}>Textile</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
