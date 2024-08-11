import React from "react";
import './sponsors.css';
import logo1 from '../../assets/images/logo1.jpg';
import logo2 from '../../assets/images/logo2.jpg';
import logo3 from '../../assets/images/logo3.jpg';
import logo4 from '../../assets/images/logo4.jpg';
import logo5 from '../../assets/images/logo5.jpg';
import logo6 from '../../assets/images/logo6.jpg';
import logo7 from '../../assets/images/logo7.jpg';
import logo8 from '../../assets/images/logo8.jpg';
import logo9 from '../../assets/images/logo9.jpg';
import logo10 from '../../assets/images/logo10.jpg';
import logo11 from '../../assets/images/logo11.jpg';
import logo12 from '../../assets/images/logo12.jpg';

const sponsorImages = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12
];

function Sponsors() {
    return (
        <div className="sponsors-container">
            <div className="sponsors-slider">
                <div className="sponsors-slide">
                    {sponsorImages.map((image, index) => (
                        <img key={index} src={image} alt={`Sponsor ${index + 1}`} />
                    ))}
                    {sponsorImages.map((image, index) => (
                        <img key={sponsorImages.length + index} src={image} alt={`Sponsor ${index + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sponsors;
