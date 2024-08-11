import React from "react";
import './services.css';

function Services() {
    return (
        <section className="services-section">
            <h2 className="services-title">Services</h2>
            <p className="services-subtitle">The best knowledge management solutions for the legal market</p>
            <div className="services-container">
                <div className="service-card">
                    <div className="service-icon">
                        <img src="src/assets/images/teamLogo-removebg-preview.png" alt="Consulting Icon" />
                    </div>
                    <h3 className="service-title">Consulting</h3>
                    <p className="service-description">
                        We apply our years of experience to create personalized solutions for law firms and legal departments.
                    </p>
                    <button className="learn-more-btn">Learn More</button>
                </div>
                <div className="service-card">
                    <div className="service-icon">
                        <img src="src/assets/images/documentLogo-removebg-preview.png" alt="Document Management Icon" />
                    </div>
                    <h3 className="service-title">Document Management</h3>
                    <p className="service-description">
                        Manage your office with a single software (fully secure), facilitating sharing and collaboration among teams.
                    </p>
                    <button className="learn-more-btn">Learn More</button>
                </div>
                <div className="service-card">
                    <div className="service-icon">
                        <img src="src/assets/images/SupportLogo-removebg-preview.png" alt="Support Icon" />
                    </div>
                    <h3 className="service-title">Support</h3>
                    <p className="service-description">
                        We are prepared to clarify any possible doubts and offer the best service to iManage Work users.
                    </p>
                    <button className="learn-more-btn">Learn More</button>
                </div>
            </div>
        </section>
    );
}

export default Services;
