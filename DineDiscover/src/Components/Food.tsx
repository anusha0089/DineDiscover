import React from 'react';
import './Food.css';

const Restaurants = () => {
    const categories = [
        { image: './Images/Non-Veg Starters.jpg', title: 'Non-Veg' },
        { image: './Images/Veg Starters.jpg', title: 'Veg' },
        { image: './Images/Soups.jpg', title: 'Soups' },
        { image: './Images/Fish & Sea food.jpg', title: 'Fish & Sea food' },
        { image: './Images/Main Course.jpg', title: 'Main Course' },
        { image: './Images/Italian.jpg', title: 'Italian' },
        { image: './Images/Salads.jpg', title: 'Salads' },
        { image: './Images/Desserts.jpg', title: 'Desserts' },
    ];

    return (
        <div className="restaurant-menu">
            <h2 className="menu-header">Explore Food</h2>
            <div className="menu-grid">
                {categories.map((category, index) => (
                    <div key={index} className="menu-card">
                        <img src={category.image} alt={category.title} className="menu-image" />
                        <h3 className="menu-title">{category.title}</h3>
                        <a href="#" className="menu-link">View More ➔</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Restaurants;
