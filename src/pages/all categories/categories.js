import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './categoriess.css';

const Categories = () => {
  const navigate = useNavigate();
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categoryData = [
    {
      title: "Ikat Sarees",
      images: [require('../../img/ikat sarees.jpg')],
      description: "Beautiful handwoven Ikat sarees.",
      items: ["Cotton Ikat", "Silk Ikat"]
    },
    {
      title: "Jute Fabrics",
      images: [require('../../img/jute.jpeg')],
      description: "Eco-friendly jute fabrics for sustainable fashion.",
      items: ["Jute Bags", "Jute Sarees"]
    }
  ];

  return (
    <div className="categories-container">
      <div className="categories-hero">
        <h1>Textile Categories</h1>
        <p>Explore our wide range of textile products</p>
      </div>

      <div className="categories-grid">
        {categoryData.map((category, index) => (
          <div
            className="category-card"
            key={category.title} // Use unique title as key
            onMouseEnter={() => setHoveredCategory(index)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <div className="category-image">
              {hoveredCategory === index ? (
                <div className="image-slider">
                  {category.images.map((image, i) => (
                    <img key={i} src={image} alt={`${category.title} ${i + 1}`} />
                  ))}
                </div>
              ) : (
                <img src={category.images[0]} alt={category.title} />
              )}
            </div>
            <div className="category-content">
              <h2>{category.title}</h2>
              <p>{category.description}</p>
              <ul>
                {category.items.map((item, i) => (
                  <li key={`${item}-${i}`}>{item}</li>
                ))}
              </ul>
              <button
                className="explore-btn"
                onClick={() =>
                  navigate(`/categories/${category.title.toLowerCase().replace(/\s+/g, '-')}`)
                }
              >
                Explore {category.title}
              </button>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>&copy; 2025 Textile Categories</p>
        <div className="footer-links">
          <a href="/contact">Contact Us</a>
          <a href="/about">About</a>
        </div>
      </footer>
    </div>
  );
};

