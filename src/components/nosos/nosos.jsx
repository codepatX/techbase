import React, { useRef, useState } from "react";
import "./nosos.css";

function Nosos() {
  const sliderRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const slideLeft = () => {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    setAtEnd(false);
    if (sliderRef.current.scrollLeft <= sliderRef.current.offsetWidth) {
      setAtStart(true);
    }
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    setAtStart(false);
    if (
      sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
      sliderRef.current.scrollWidth - sliderRef.current.offsetWidth
    ) {
      setAtEnd(true);
    }
  };

  return (
    <div className="materials-container">
      <h2 className="materials-title">Download Our Materials</h2>
      <p className="materials-subtitle">
        Get access to our available Docwise contents!
      </p>

      <div className="materials-section">
        {/* First big card */}
        <div className="materials-card">
          <img
            src="https://via.placeholder.com/200"
            alt="General Catalog"
            className="materials-image"
          />
          <div className="materials-content">
            <h3 className="materials-card-title">General Catalog</h3>
            <p className="materials-card-description">
              A complete guide on Docwise solutions and the challenges faced by
              law firms, along with how we can help you overcome them.
            </p>
            <a href="#" className="materials-button">
              DOWNLOAD EBOOK
            </a>
          </div>
        </div>

        {/* Second big card */}
        <div className="materials-card">
          <img
            src="https://via.placeholder.com/200"
            alt="Success Case"
            className="materials-image"
          />
          <div className="materials-content">
            <h3 className="materials-card-title">Success Case</h3>
            <p className="materials-card-description">
              Learn how Docwise helped a law firm optimize security and
              productivity with around 90 users.
            </p>
            <a href="#" className="materials-button">
              DOWNLOAD EBOOK
            </a>
          </div>
        </div>
      </div>

      {/* More cases slider */}
      <h2 className="more-cases-title">More Cases</h2>
      <div className="slider-container">
        <button
          className="slider-button left"
          onClick={slideLeft}
          disabled={atStart}
        >
          &lt;
        </button>
        <div className="more-cases-section" ref={sliderRef}>
          <div className="more-cases-card">
            <h3 className="more-cases-card-title">Success Case</h3>
            <p className="more-cases-card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="#" className="materials-button">
              DOWNLOAD EBOOK
            </a>
          </div>
          <div className="more-cases-card">
            <h3 className="more-cases-card-title">Success Case</h3>
            <p className="more-cases-card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="#" className="materials-button">
              DOWNLOAD EBOOK
            </a>
          </div>
          <div className="more-cases-card">
            <h3 className="more-cases-card-title">Success Case</h3>
            <p className="more-cases-card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="#" className="materials-button">
              DOWNLOAD EBOOK
            </a>
          </div>
          <div className="more-cases-card">
            <h3 className="more-cases-card-title">Success Case</h3>
            <p className="more-cases-card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="#" className="materials-button">
              DOWNLOAD EBOOK
            </a>
          </div>
        </div>
        <button
          className="slider-button right"
          onClick={slideRight}
          disabled={atEnd}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Nosos;
