import React, { useState } from 'react';
import './nav.css';
import { FaSearch, FaUser, FaBars } from 'react-icons/fa';
import flags from './flag';

const NavBar = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [navActive, setNavActive] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState(flags[0].src); // Default flag

  const toggleSearch = () => setSearchVisible(!searchVisible);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const toggleNav = () => setNavActive(!navActive);
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
  const selectFlag = (flagSrc) => {
    setSelectedFlag(flagSrc);
    setDropdownVisible(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-items">
        <div className="navbar-logo">
          <img src="src/assets/images/SmallSquareLogoJpg-removebg-preview.png" alt="Logo" />
        </div>
        <div className="hamburger-menu" onClick={toggleNav}>
          <FaBars />
        </div>
        <ul className={`navbar-links ${navActive ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
          <li className="search-container">
            {!searchVisible && <FaSearch onClick={toggleSearch} className="search-icon" />}
            {searchVisible && (
              <>
                <input
                  type="text"
                  className={`search-bar ${searchVisible ? 'visible' : ''}`}
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <button
                  className={`search-enter-btn ${searchTerm ? 'visible' : ''}`}
                  onClick={() => alert(`Searching for: ${searchTerm}`)}
                >
                  Enter
                </button>
              </>
            )}
          </li>
          <li className="flag-container">
            <img src={selectedFlag} alt="Selected Flag" className="flag-icon" onClick={toggleDropdown} />
            <div className={`flag-dropdown ${dropdownVisible ? 'show' : ''}`}>
              {flags.map((flag, index) => (
                <div key={index} className="flag-dropdown-item" onClick={() => selectFlag(flag.src)}>
                  <img src={flag.src} alt={flag.alt} />
                </div>
              ))}
            </div>
          </li>
          <li>
            <button className="login-signup-btn">
              <FaUser /> Login/Signup
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
