import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './categoriess.css';

const Categories = () => {
  const navigate = useNavigate();
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categoryData = [
    {
      title: "Women's Wear",
      images: [require('../../img/womens-wear1.jpg'), require('../../img/womens-wear2.jpg')],
      description: "High-quality textile raw materials for manufacturing",
      items: ["Cotton Fiber", "Wool", "Natural Silk", "Synthetic Fibers"]
    },
    {
      title: "Men's Wear",
      images: [require('../../img/mens-wear1.jpg'), require('../../img/mens-wear2.jpg')],
      description: "Premium cotton fabrics for various applications",
      items: ["Organic Cotton", "Printed Cotton", "Denim", "Canvas"]
    },
    {
      title: "Cultural Wear",
      images: [require('../../img/cultural-wear1.jpg'), require('../../img/cultural-wear2.jpg')],
      description: "Luxurious silk fabrics for elegant wear",
      items: ["Mulberry Silk", "Tussar Silk", "Crepe Silk", "Raw Silk"]
    },
    {
      title: "Hand Printed",
      images: [require('../../img/hand-printed1.jpg'), require('../../img/hand-printed2.jpg')],
      description: "Unique hand-printed textile designs",
      items: ["Block Print", "Batik", "Screen Print", "Kalamkari"]
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

export default Categories;

/* General Styles */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

.nav-bar {
  background-color: #333;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
}

.nav-bar a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav-bar a:hover {
  color: #ff9800;
}

/* Hero Section */
.categories-hero {
  text-align: center;
  padding: 50px 20px;
  background: linear-gradient(to right, #ff9800, #ff5722);
  color: white;
}

.categories-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.categories-hero p {
  font-size: 1.2rem;
}

/* Categories Grid */
.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Category Card */
.category-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.category-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.image-slider {
  display: flex;
  flex-direction: column;
  animation: scrollImages 3s linear infinite;
}

.image-slider img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

@keyframes scrollImages {
  0% {
    transform: translateY(0);
  }
  33% {
    transform: translateY(-100%);
  }
  66% {
    transform: translateY(-200%);
  }
  100% {
    transform: translateY(0);
  }
}

.category-content {
  padding: 20px;
  text-align: center;
}

.category-content h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}

.category-content p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 15px;
}

.category-content ul {
  list-style: none;
  padding: 0;
  margin: 0 0 15px;
}

.category-content ul li {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 5px;
}

.explore-btn {
  padding: 10px 20px;
  background-color: #ff5722;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.explore-btn:hover {
  background-color: #e64a19;
}

/* Footer */
.footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: auto;
}

.footer-links {
  margin-top: 10px;
}

.footer-links a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-size: 0.9rem;
}

.footer-links a:hover {
  text-decoration: underline;
}