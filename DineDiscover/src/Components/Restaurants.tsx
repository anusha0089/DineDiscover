import React from 'react';
import './Restaurants.css';

const Restaurants = () => {
  const categories = [
    { image: './Images/Absolute Barbecues1.jpg', title: 'Absolute Barbecues' },
    { image: './Images/Tatva.jpg', title: 'Tatva' },
    { image: './Images/AnTeRa Kitchen and Bar.jpg', title: 'AnTeRa Kitchen and Bar' },
    { image: '/Images/Chutneys.jpg', title: 'Chutneys' },
    { image: './Images/Chandra haveli star restaurant.jpg', title: 'Chandra haveli star restaurant' },
    { image: './Images/Krishnapatnam.jpg', title: 'Krishnapatnam' },
    { image: './Images/President Dhaba Bar and Kitchen.jpg', title: 'President Dhaba Bar and Kitchen' },
    { image: './Images/Kodi Kura Chitti Gaare.jpg', title: 'Kodi Kura Chitti Gaare' },
  ];

  return (
    <div className="restaurant-menu">
      <h2 className="menu-header">Explore Restaurants of JubileeHills-Hyderabad</h2>
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