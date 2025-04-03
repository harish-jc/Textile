import React, { useEffect, useState } from "react";
import "./home.css";

const images = [
  require("../../img/back1.png"),
];

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const categories = [
    "Raw Materials",
    "Cotton Fabrics",
    "Pure Handloom Fabrics",
    "Silk Fabrics",
    "Wholesale",
    "Hand Printed"
  ];

  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={require("../../img/logo.png")} alt="Company Logo" />
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="products">Products</a>
        <div 
          className="dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <a href="categories">All Categories</a>
          {showDropdown && (
            <div className="dropdown-content">
              {categories.map((category, index) => (
                <a key={index} href={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}>
                  {category}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Slide ${i + 1}`}
          className={i === index ? "active" : ""}
        />
      ))}
    </div>
  );
};

const SearchBar = () => (
  <div className="search-container">
    <h1>Search for Products</h1>
    <input type="text" placeholder="Search..." />
    <button>Search</button>
  </div>
);

const Icons = () => {
  const iconData = [
    { src: require("../../img/cotton.jpg"), label: "Cotton Types", categories: ["Shirts", "Pants", "Dresses"] },
    { src: require("../../img/slik.jpeg"), label: "Silk Types", categories: ["Sarees", "Scarves", "Gowns"] },
    { src: require("../../img/handloom.jpg"), label: "Handloom", categories: ["Traditional", "Modern", "Fusion"] },
    { src: require("../../img/linen.jpg"), label: "Linen", categories: ["Casual", "Formal", "Beach Wear"] },
  ];

  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <div className="scrolling-icons">
      {iconData.map((icon, i) => (
        <div 
          className="icon" 
          key={i}
          onClick={() => setActiveDropdown(activeDropdown === i ? null : i)}
        >
          <img src={icon.src} alt={icon.label} />
          <p>{icon.label}</p>
          {activeDropdown === i && (
            <div className="icon-dropdown">
              {icon.categories.map((category, j) => (
                <div key={j} className="dropdown-item">{category}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Home = () => (
  <div>
    <NavBar />
    <Slideshow />
    <SearchBar />
    <Icons />
  </div>
);

export default Home;
