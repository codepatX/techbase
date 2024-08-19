import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faVimeo, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="left-section">
                    <div className="logo">
                        <img src="https://via.placeholder.com/150x50?text=DocWise+Logo" alt="DocWise Logo" />
                    </div>
                    <div className="social-icons">
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                        <a href="#"><FontAwesomeIcon icon={faVimeo} /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                    <div className="contact-info">
                        <p><i className="fa fa-phone"></i> +55 (11) 4681-2400</p>
                        <p><i className="fa fa-envelope"></i> contact@docwise.com.br</p>
                    </div>
                    <div className="address">
                        <p><i className="fa fa-map-marker"></i> Av. Angélica, 2223 - Santa Cecília, São Paulo - SP, 01227-200</p>
                    </div>
                </div>

                <div className="middle-section">
                    <ul className="footer-links">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">iManage Work</a></li>
                        <li><a href="#">iManage Cloud</a></li>
                        <li><a href="#">Prosperoware CAM</a></li>
                        <li><a href="#">HSRO Solutions</a></li>
                        <li><a href="#">BlueCar Technologies</a></li>
                        <li><a href="#">Lexsoft T3</a></li>
                    </ul>
                </div>

                <div className="right-section">
                    <ul className="footer-links">
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Consulting</a></li>
                        <li><a href="#">Document Management</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">EN</a></li>
                    </ul>
                    <div className="footer-awards">
                        <img src="https://via.placeholder.com/150x50?text=Award+1" alt="Award 1" />
                        <img src="https://via.placeholder.com/150x50?text=Award+2" alt="Award 2" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
