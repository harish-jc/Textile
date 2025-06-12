import React from 'react';
// import '../Home.css';

const Header = () => {
  return (
    <header>

      <div className="xc-header-two xc-header-three" id="xc-header-sticky">
        <div className="container">
          <div className="xc-header-two__wrapper">
            <div className="xc-header-two__logo">
              <a href="#">
                <img src="/storage/img/logo/logo.png" alt="logo" width="158" />
              </a>
            </div>

            <div className="xc-header-two__right">
              <div className="xc-header-one__menu xc-main-menu">
                <ul className="ul-0">
                  <li><a href="#">Home</a></li>
                  {/* <li><a href="about.html">About</a></li> */}

                  <li className="has-dropdown">
                    <a href="#">Fabrics</a>
                    <ul className="submenu">
                      <li className="has-dropdown">
                        <a href="#">Natural Fabrics</a>
                        <ul className="submenu">
                          <li><a href="#">Cotton</a></li>
                          <li><a href="#">Silk</a></li>
                          <li><a href="#">Wool</a></li>
                          <li><a href="#">Jute</a></li>
                          <li><a href="#">Linen</a></li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="#">Synthetic Fabrics</a>
                        <ul className="submenu">
                          <li><a href="#">Rayon</a></li>
                          <li><a href="#">Nylon</a></li>
                          <li><a href="#">Polyester</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li className="has-dropdown">
                    <a href="#">Shop</a>
                    <ul className="submenu">
                      <li><a href="#">Shop</a></li>
                      <li><a href="#">Product Details</a></li>
                      <li><a href="#">Cart</a></li>
                      <li><a href="#">Checkout</a></li>
                    </ul>
                  </li>

                  <li><a href="#">Contact</a></li>
                </ul>
              </div>

              <div className="xc-header-two__btns d-none d-lg-flex">
                <a href="#" className="xc-header-two__btn">
                  <i className="fas fa-shopping-cart"></i>
                  {/* <span className="xc-cart-count">2</span> */}
                </a>
                <a href="#" className="xc-header-two__btn">
                  <i className="fas fa-heart"></i>
                </a>
                <a href="#" className="xc-header-two__btn">
                  <i className="fas fa-user"></i>
                </a>
              </div>

              <div className="xc-header-two__hamburger d-lg-none">
                <button
                  type="button"
                  className="xc-offcanvas-btn xc-header-two__btn"
                  onClick={() => {
                    const panel = document.getElementById('xc-offcanvas-mobile');
                    panel?.classList.toggle('show');
                  }}
                >
                  <i className="fas fa-bars"></i>
                </button>

                {/* Mobile Dropdown Panel */}
                <div id="xc-offcanvas-mobile" className="xc-offcanvas-panel">
                  <a href="#" className="xc-header-two__btn">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="xc-cart-count">2</span>
                  </a>
                  <a href="#" className="xc-header-two__btn">
                    <i className="fas fa-heart"></i>
                  </a>
                  <a href="#" className="xc-header-two__btn">
                    <i className="fas fa-user"></i>
                  </a>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
