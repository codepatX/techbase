import React, { useState } from "react";
import './premier.css';

function Premier() {
    const [activeYear, setActiveYear] = useState(2020);

    const awards = {
        2020: [
            { 
                imgSrc: "https://via.placeholder.com/150", // Replace with actual image link
                title: "CLOUD EXCELLENCE",
                description: "iMANAGE PARTNER SOUTH AMERICA"
            },
            { 
                imgSrc: "https://via.placeholder.com/150", // Replace with actual image link
                title: "iMANAGE PARTNER OF THE YEAR",
                description: "2020 SOUTH AMERICA"
            }
        ],
        2019: [
            { 
                imgSrc: "https://via.placeholder.com/150", // Replace with actual image link
                title: "INNOVATION LEADER",
                description: "iMANAGE PARTNER GLOBAL"
            },
            { 
                imgSrc: "https://via.placeholder.com/150", // Replace with actual image link
                title: "EXCELLENCE IN SERVICE",
                description: "iMANAGE PARTNER BRAZIL"
            }
        ],
        2018: [
            { 
                imgSrc: "https://via.placeholder.com/150", // Replace with actual image link
                title: "TECHNOLOGY AWARD",
                description: "iMANAGE PARTNER LATIN AMERICA"
            },
            { 
                imgSrc: "https://via.placeholder.com/150", // Replace with actual image link
                title: "PARTNER OF THE YEAR",
                description: "2018 BRAZIL"
            }
        ],
        2017: [
            { 
                imgSrc: "https://via.placeholder.com/150", // Replace with actual image link
                title: "INNOVATION EXCELLENCE",
                description: "iMANAGE PARTNER SOUTH AMERICA"
            },
            { 
                imgSrc: "https://via.placeholder.com/150", // Replace with actual image link
                title: "SERVICE AWARD",
                description: "2017 SOUTH AMERICA"
            }
        ],
        2016: [
            { 
                imgSrc: "https://via.placeholder.com/150", // Replace with actual image link
                title: "GLOBAL EXCELLENCE",
                description: "iMANAGE PARTNER WORLDWIDE"
            },
            { 
                imgSrc: "https://via.placeholder.com/150", // Replace with actual image link
                title: "TECH LEADER",
                description: "2016 SOUTH AMERICA"
            }
        ],
    };

    const years = [2020, 2019, 2018, 2017, 2016];

    return (
        <div className="premier-container">
            <h2 className="premier-title">Awards</h2>
            <p className="premier-subtitle">
                The most awarded company in Brazil and South America by iManage
            </p>

            <div className="awards-display">
                {awards[activeYear] && awards[activeYear].map((award, index) => (
                    <div key={index} className="award-card">
                        <img src={award.imgSrc} alt={award.title} />
                        <div className="award-info">
                            <h3>{award.title}</h3>
                            <p>{award.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="timeline">
                <div className="timeline-line"></div>
                {years.map((year) => (
                    <div 
                        key={year} 
                        className={`timeline-dot ${activeYear === year ? 'active' : ''}`}
                        onClick={() => setActiveYear(year)}
                    >
                        <span className={`timeline-year ${activeYear === year ? 'active-year' : ''}`}>
                            {year}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Premier;
