import React, { useState, useEffect } from 'react';
import '../homepage/homepage.css';

const images = [
  'url("src/assets/images/sliderthree.jpg")',
  'url("src/assets/images/sliderfour.webp")',
  'url("src/assets/images/sliderfive.webp")',
  'url("src/assets/images/slidersix.webp")',
  'url("src/assets/images/sliderone.jpg")'
];

const texts = [
  { title: "Cutting-Edge Technology Solutions", subtitle: "Innovating the future" },
  { title: "Your Data, Our Expertise", subtitle: "Unlocking insights with AI" },
  { title: "Transforming the Digital Landscape", subtitle: "Building tomorrow, today" },
  { title: "Empowering Businesses with Tech", subtitle: "Solutions for every challenge" },
  { title: "Join the Tech Revolution", subtitle: "Where ideas meet execution" }
];

function Homepage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentIndex]);

  return (
    <div className="slider">
      <div 
        className="slide" 
        style={{ backgroundImage: images[currentIndex] }}
      >
        <button className="prev" onClick={handlePrev}>&lt;</button>
        <div className="text-container">
          <h1>{texts[currentIndex].title}</h1>
          <p>{texts[currentIndex].subtitle}</p>
        </div>
        <button className="next" onClick={handleNext}>&gt;</button>
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${currentIndex === index ? 'active' : ''}`} 
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
