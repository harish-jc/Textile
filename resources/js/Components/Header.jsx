import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const MenuItems = ({ isMobile = false }) => (
    <ul className="ul-0">
      <li><Link href="/">Home</Link></li>

      <li className={`has-dropdown ${isMobile && openDropdowns['fabrics'] ? 'open' : ''}`}>
        <Link
          href="#"
          onClick={(e) => isMobile && (e.preventDefault(), toggleDropdown('fabrics'))}
        >
          Fabrics
        </Link>
        <ul className="submenu">
          <li className={`has-dropdown ${isMobile && openDropdowns['natural'] ? 'open' : ''}`}>
            <Link
              href="#"
              onClick={(e) => isMobile && (e.preventDefault(), toggleDropdown('natural'))}
            >
              Natural Fabrics
            </Link>
            <ul className="submenu">
              <li><Link href={route('products.index', { title: 'Cotton Fabrics' })}>Cotton</Link></li>
              <li><Link href={route('products.index', { title: 'Silk Fabrics' })}>Silk</Link></li>
              <li><Link href={route('products.index', { title: 'Wool fabrics' })}>Wool</Link></li>
              <li><Link href={route('products.index', { title: 'Jute fabrics' })}>Jute</Link></li>
              <li><Link href={route('products.index', { title: 'Linen fabrics' })}>Linen</Link></li>
            </ul>
          </li>
          <li className={`has-dropdown ${isMobile && openDropdowns['synthetic'] ? 'open' : ''}`}>
            <Link
              href="#"
              onClick={(e) => isMobile && (e.preventDefault(), toggleDropdown('synthetic'))}
            >
              Synthetic Fabrics
            </Link>
            <ul className="submenu">
              <li><Link href={route('products.index', { title: 'Rayon fabrics' })}>Rayon</Link></li>
              <li><Link href={route('products.index', { title: 'Nylon fabrics' })}>Nylon</Link></li>
              <li><Link href={route('products.index', { title: 'Polyester fabrics' })}>Polyester</Link></li>
            </ul>
          </li>
        </ul>
      </li>

      <li className={`has-dropdown ${isMobile && openDropdowns['shop'] ? 'open' : ''}`}>
        <Link
          href="#"
          onClick={(e) => isMobile && (e.preventDefault(), toggleDropdown('shop'))}
        >
          Shop
        </Link>

        <ul className="submenu">
          <li><Link href={route('products.index', { title: 'Our Products' })}>Shop</Link></li>
          <li><Link href={route('products.show', 2)}>Product Details</Link></li>
          <li><Link href={route('cart.index')}>Cart</Link></li>
          <li><Link href={route('checkout')}>Checkout</Link></li>
        </ul>
      </li>

      <li><Link href={route('contact')}>Contact</Link></li>
      {/* <li>
        <a
          href="#footer"
          onClick={(e) => {
            e.preventDefault();
            const footerEl = document.getElementById('footer');
            footerEl?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Contact
        </a>
      </li> */}

    </ul>
  );

  return (
    <header style={{ backgroundColor: '#f8f9fa' }}>
      <div className="xc-header-two xc-header-three shadow-md z-50 relative" id="xc-header-sticky" style={{ backgroundColor: '#fff' }}>

        <div className="container">
          <div className="xc-header-two__wrapper">
            <div className="xc-header-two__logo">
              <Link href="/">
                <img src="/storage/img/logo/logo.png" alt="logo" width="158" />
              </Link>
            </div>

            <div className="xc-header-two__right">
              {/* Desktop Menu */}
              <div className="xc-header-one__menu xc-main-menu d-none d-lg-block">
                <MenuItems />
              </div>

              <div className="xc-header-two__btns d-none d-lg-flex">
                <Link href={route('cart.index')} className="xc-header-two__btn" style={{ color: '#007bff' }}>
                  <i className="fas fa-shopping-cart"></i>
                </Link>
                <Link href={route('cart.index')} className="xc-header-two__btn" style={{ color: '#dc3545' }}>
                  <i className="fas fa-heart"></i>
                </Link>
                <Link href={route('profile')} className="xc-header-two__btn" style={{ color: '#343a40' }}>
                  <i className="fas fa-user"></i>
                </Link>
              </div>

              {/* Mobile Toggle */}
              <div className="xc-header-two__hamburger d-lg-none">
                <button
                  type="button"
                  className="xc-offcanvas-btn xc-header-two__btn"
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  style={{ color: '#343a40' }}
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xc-mobile-menu-panel d-lg-none transition-all duration-300 ${mobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="xc-mobile-menu-container bg-black shadow-lg p-2">
          <div style={{ color: '#fff' }}>
            <MenuItems isMobile={true} />
          </div>

          <div className="xc-mobile-menu-buttons mt-4 flex gap-4">
            <Link href="/cart" className="xc-header-two__btn" style={{ color: '#007bff' }}>
              <i className="fas fa-shopping-cart"></i>
            </Link>
            <Link href="/wishlist" className="xc-header-two__btn" style={{ color: '#dc3545' }}>
              <i className="fas fa-heart"></i>
            </Link>
            <Link href="/profile" className="xc-header-two__btn" style={{ color: '#fff' }}>
              <i className="fas fa-user"></i>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
