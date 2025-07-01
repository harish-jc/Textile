import React, { useState } from 'react';
import { Link, usePage, router } from '@inertiajs/react';
import { message /*, Modal*/ } from 'antd';

const Header = () => {
  const { auth } = usePage().props;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Notification version
  const handleWishlistClick = (e) => {
    if (!auth?.user) {
      e.preventDefault();
      message.warning('Please log in to view your wishlist. Redirecting...', 3);
      setTimeout(() => {
        router.visit(route('profile'));
      }, 3000);
    } else {
      router.visit(route('dashboard', { tab: 'wishlist' }));
    }
  };

  // Optional: Modal version (use this instead if you prefer)
  /*
  const handleWishlistClick = (e) => {
    if (!auth?.user) {
      e.preventDefault();
      Modal.info({
        title: 'Login Required',
        centered: true,
        width: 360,
        okText: 'Login',
        onOk: () => router.visit(route('login')),
        content: (
          <div className="text-center">
            <img
              src="/storage/img/login-required.png"
              alt="Login Required"
              className="mx-auto w-28 h-auto mb-2"
            />
            <p className="text-sm text-gray-600">Please log in to use the wishlist feature.</p>
          </div>
        ),
      });
    }
  };
  */

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
              <li><Link href={route('products.index', { title: 'Cotton Fabrics', filter: 'cotton' })}>Cotton</Link></li>
              <li><Link href={route('products.index', { title: 'Silk Fabrics', filter: 'silk' })}>Silk</Link></li>
              <li><Link href={route('products.index', { title: 'Wool Fabrics', filter: 'wool' })}>Wool</Link></li>
              <li><Link href={route('products.index', { title: 'Jute Fabrics', filter: 'jute' })}>Jute</Link></li>
              <li><Link href={route('products.index', { title: 'Linen Fabrics', filter: 'linen' })}>Linen</Link></li>
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
              <li><Link href={route('products.index', { title: 'Rayon Fabrics', filter: 'rayon' })}>Rayon</Link></li>
              <li><Link href={route('products.index', { title: 'Nylon Fabrics', filter: 'nylon' })}>Nylon</Link></li>
              <li><Link href={route('products.index', { title: 'Polyester Fabrics', filter: 'polyester' })}>Polyester</Link></li>
            </ul>
          </li>
        </ul>
      </li>

      {/* sarees */}
      <li className={`has-dropdown ${isMobile && openDropdowns['sarees'] ? 'open' : ''}`}>
        <Link
          href="#"
          onClick={(e) => isMobile && (e.preventDefault(), toggleDropdown('sarees'))}
        >
          Sarees
        </Link>
        <ul className="submenu">

          {/* By Fabric */}
          <li className={`has-dropdown ${isMobile && openDropdowns['sareeFabric'] ? 'open' : ''}`}>
            <Link
              href="#"
              onClick={(e) => isMobile && (e.preventDefault(), toggleDropdown('sareeFabric'))}
            >
              By Fabric
            </Link>
            <ul className="submenu">
              <li><Link href={route('products.index', { title: 'Cotton Sarees', filter: 'cotton' })}>Cotton</Link></li>
              <li><Link href={route('products.index', { title: 'Silk Sarees', filter: 'silk' })}>Silk</Link></li>
              <li><Link href={route('products.index', { title: 'Linen Sarees', filter: 'linen' })}>Linen</Link></li>
              <li><Link href={route('products.index', { title: 'Chiffon Sarees', filter: 'chiffon' })}>Chiffon</Link></li>
              <li><Link href={route('products.index', { title: 'Georgette Sarees', filter: 'georgette' })}>Georgette</Link></li>
            </ul>
          </li>

          {/* By Occasion */}
          <li className={`has-dropdown ${isMobile && openDropdowns['sareeOccasion'] ? 'open' : ''}`}>
            <Link
              href="#"
              onClick={(e) => isMobile && (e.preventDefault(), toggleDropdown('sareeOccasion'))}
            >
              By Occasion
            </Link>
            <ul className="submenu">
              <li><Link href={route('products.index', { title: 'Bridal Sarees', filter: 'bridal' })}>Bridal</Link></li>
              <li><Link href={route('products.index', { title: 'Party Wear Sarees', filter: 'party' })}>Party Wear</Link></li>
              <li><Link href={route('products.index', { title: 'Casual Sarees', filter: 'casual' })}>Casual</Link></li>
              <li><Link href={route('products.index', { title: 'Office Wear Sarees', filter: 'office' })}>Office Wear</Link></li>
              <li><Link href={route('products.index', { title: 'Festive Sarees', filter: 'festive' })}>Festive</Link></li>
            </ul>
          </li>

          {/* By Region */}
          <li className={`has-dropdown ${isMobile && openDropdowns['sareeRegion'] ? 'open' : ''}`}>
            <Link
              href="#"
              onClick={(e) => isMobile && (e.preventDefault(), toggleDropdown('sareeRegion'))}
            >
              By Region
            </Link>
            <ul className="submenu">
              <li><Link href={route('products.index', { title: 'Banarasi Sarees', filter: 'banarasi' })}>Banarasi</Link></li>
              <li><Link href={route('products.index', { title: 'Kanjivaram Sarees', filter: 'kanjivaram' })}>Kanjivaram</Link></li>
              <li><Link href={route('products.index', { title: 'Paithani Sarees', filter: 'paithani' })}>Paithani</Link></li>
              <li><Link href={route('products.index', { title: 'Chanderi Sarees', filter: 'chanderi' })}>Chanderi</Link></li>
              <li><Link href={route('products.index', { title: 'Sambalpuri Sarees', filter: 'sambalpuri' })}>Sambalpuri</Link></li>
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
    </ul>
  );

  return (
    <header style={{ backgroundColor: '#f8f9fa' }}>
      <div className="xc-header-two xc-header-three shadow-md z-50 relative" style={{ backgroundColor: '#fff' }}>
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
                {/* Wishlist Button */}
                <button
                  onClick={handleWishlistClick}
                  className="xc-header-two__btn"
                  style={{ color: '#dc3545' }}
                >
                  <i className="fas fa-heart"></i>
                </button>
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
            <Link href={route('cart.index')} className="xc-header-two__btn" style={{ color: '#007bff' }}>
              <i className="fas fa-shopping-cart"></i>
            </Link>
            {/* Wishlist Button */}
            <button
              onClick={handleWishlistClick}
              className="xc-header-two__btn"
              style={{ color: '#dc3545' }}
            >
              <i className="fas fa-heart"></i>
            </button>

            <Link href={route('profile')} className="xc-header-two__btn" style={{ color: '#fff' }}>
              <i className="fas fa-user"></i>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
