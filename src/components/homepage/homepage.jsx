import React, { useState, useEffect } from 'react';
import './homepage.css';

// Array of slides with image URLs and text
const slides = [
  { image: 'url_to_image1.jpg', text: 'Special Offer 1' },
  { image: 'url_to_image2.jpg', text: 'Special Offer 2' },
  { image: 'url_to_image3.jpg', text: 'Special Offer 3' },
  { image: 'url_to_image4.jpg', text: 'Special Offer 4' },
  { image: 'url_to_image5.jpg', text: 'Special Offer 5' },
];

// Function-based component for HomePage
function HomePage() {
  // State to keep track of the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Effect to handle the slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
    }, 5000); // 5000ms or 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Render the slider
  return (
    
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-text">
            <h1>{slide.text}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
