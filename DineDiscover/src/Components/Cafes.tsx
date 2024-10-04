import React from 'react';
import './Restaurants.css';

const Restaurants = () => {
  const categories = [
    { image: './Images/Theory Patisserie & Cafe.jpg', title: 'Theory Patisserie & Cafe' },
    { image: './Images/Van Lavino Cafe & Patisserie.jpg', title: 'Van Lavino Cafe & Patisserie' },
    { image: './Images/Terra Cafe & Bistro.jpg', title: 'Terra Cafe & Bistro' },
    { image: '/Images/SAGE Farm Cafe.jpg', title: 'SAGE Farm Cafe' },
    { image: './Images/Cravery Cafe.jpg', title: 'Cravery Cafe' },
    { image: './Images/BEL POSTO THE CAFE.jpg', title: 'BEL POSTO THE CAFE' },
    { image: './Images/Lé Vantage Café Bar.jpg', title: 'Lé Vantage Café Bar' },
    { image: './Images/Farzi Cafe Hyderabad.jpg', title: 'Farzi Cafe Hyderabad' },
  ];

  return (
    <div className="restaurant-menu">
      <h2 className="menu-header">Explore Cafes of JubileeHills-Hyderabad</h2>
      <div className="menu-grid">
        {categories.map((category, index) => (
          <div key={category.title} className="menu-card">
            <img src={category.image} alt={category.title} className="menu-image" />
            <h3 className="menu-title">{category.title}</h3>
            <a href="#" className="menu-link">View More ➔</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;