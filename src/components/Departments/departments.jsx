import React, { useState } from "react";
import './departments.css';

function Departments() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            color: '#EEEEEE',
            imgSrc: 'src/assets/images/jonhdoe.jpg', // Replace with actual image paths
            name: 'John Doe',
            position: 'Head of Marketing',
            description1: 'John brings over 10 years of marketing expertise, during which he has successfully spearheaded numerous campaigns that significantly boosted brand awareness and customer engagement. His strategic vision and innovative approach have consistently delivered outstanding results, positioning brands for long-term success and strengthening their presence in competitive markets.',
            description2: 'His leadership has been instrumental in expanding our marketing department and broadening our reach. Through strategic initiatives and team development, he has driven significant growth, establishing a stronger presence in the market and achieving key objectives.'
        },
        {
            color: '#EEEEEE',
            imgSrc: 'src/assets/images/janesmith.jpg',
            name: 'Jane Smith',
            position: 'Chief Technology Officer',
            description1: 'Jane is a tech enthusiast whose passion for innovation drives her work. She has played a pivotal role in advancing the company’s technological capabilities, leading key projects that push the boundaries of innovation. Her forward-thinking approach has been critical in positioning the company at the forefront of the industry.',
            description2: 'Her expertise in software development has greatly enriched our product offerings. By implementing cutting-edge technologies and refining existing systems, she has improved functionality, user experience, and overall quality, making our products more competitive in the market.'
        },
        {
            color: '#EEEEEE',
            imgSrc: 'src/assets/images/mike johnson.jpg',
            name: 'Mike Johnson',
            position: 'HR Manager',
            description1: 'Mike is committed to creating a positive work environment where employees thrive. He prioritizes well-being and actively fosters a culture of collaboration, ensuring that team members feel valued and supported. His efforts have resulted in increased morale, stronger teamwork, and a more cohesive and productive workplace atmosphere.',
            description2: 'His HR strategies have significantly enhanced employee satisfaction and retention. By implementing effective policies and support systems, he has created a more engaging work environment, leading to increased morale, loyalty, and a stronger, more stable workforce.'
        },
        {
            color: '#EEEEEE',
            imgSrc: 'src/assets/images/sarahwilliams.jpg',
            name: 'Sarah Williams',
            position: 'Operations Manager',
            description1: 'Sarah is highly skilled in optimizing operational processes, consistently identifying inefficiencies that others might overlook. She implements innovative and effective solutions that significantly streamline workflows, enhance productivity, and reduce operational costs. Her strategic approach and attention to detail have been crucial in driving the company’s success and growth.',
            description2: 'Her work has resulted in a 20% increase in operational efficiency, significantly improving overall productivity. By streamlining processes and reducing inefficiencies, she has played a pivotal role in enhancing the company’s performance and achieving its goals.'
        },
        {
            color: '#EEEEEE',
            imgSrc: 'src/assets/images/emilyDavis.jpg',
            name: 'Emily Davis',
            position: 'Financial Analyst',
            description1: 'Emily boasts a robust background in finance and excels in delivering insightful analyses that inform our financial decisions and strategies. Her expertise enables us to navigate complex financial landscapes, optimize resource allocation, and make strategic choices that drive our company’s growth and financial stability with confidence.',
            description2: 'Her accurate forecasts have been crucial in helping the company sustain profitability during challenging periods. By providing valuable insights and anticipating market trends, she has ensured that we navigate financial difficulties effectively and maintain a strong economic position.'
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="departments-wrapper">
            <h1 className="departments-title">Departments</h1>
            <p className="departments-description">Brief description here.</p>
            <div className="departments-slider">
                <button className="departments-prev" onClick={prevSlide}>&#10094;</button>
                <div className="departments-slide" style={{ backgroundColor: slides[currentIndex].color }}>
                    <div className="departments-profile">
                        <img src={slides[currentIndex].imgSrc} alt={slides[currentIndex].name} className="departments-profile-pic" />
                        <div className="departments-name-position">
                            <h2 className="departments-name">{slides[currentIndex].name}</h2>
                            <h3 className="departments-position">{slides[currentIndex].position}</h3>
                        </div>
                    </div>
                    <div className="departments-slide-content">
                        <p className="departments-paragraph">{slides[currentIndex].description1}</p>
                        <p className="departments-paragraph">{slides[currentIndex].description2}</p>
                    </div>
                </div>
                <button className="departments-next" onClick={nextSlide}>&#10095;</button>
            </div>
        </div>
    );
}

export default Departments;
