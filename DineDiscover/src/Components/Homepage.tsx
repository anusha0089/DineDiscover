import React, { useState } from 'react';
import './Homepage.css';

const images = [
  'Images/food1.jpg',
  'Images/food2.jpg',
  'Images/food3.jpg',
  'Images/1.jpg',
  'Images/2.jpg',
  'Images/3.jpg',
  'Images/4.jpg',
  'Images/5.jpg',
  'Images/6.jpg',
  'Images/7.jpg',
  'Images/8.jpg',
  'Images/9.jpg',
  'Images/10.jpg',
  'Images/11.jpg',
  'Images/12.jpg',
  'Images/13.jpg',
  'Images/14.jpg',
  'Images/15.jpg',
  'Images/16.jpg',
];

const Homepage: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="container">
      <div className="slideshow">
        <img src={images[currentImage]} alt="Slideshow" className="slide-image" />
        <button className="arrow prev" onClick={handlePrev}>&lsaquo;</button>
        <button className="arrow next" onClick={handleNext}>&rsaquo;</button>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentImage ? 'active' : ''}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
      <div className="welcome-message">
      <button className="explore-now">Explore Now !</button>
        <h1 className="welcome-header">Welcome Dine Discover</h1>
        <p className="welcome-subheader">Explore the best dining experiences tailored just for you.</p>
      </div>
    </div>
  );
};

export default Homepage;
