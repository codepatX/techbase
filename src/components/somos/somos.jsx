import React from "react";
import './somos.css';

function Somos() {
    const teamMembers = [
        {
            name: "Carlos Machado",
            image: "path-to-image-1",
            linkedin: "https://linkedin.com/in/carlos-machado",
        },
        {
            name: "Leandro Komata",
            image: "path-to-image-2",
            linkedin: "https://linkedin.com/in/leandro-komata",
        },
        {
            name: "Lucas Rodrigues",
            image: "path-to-image-3",
            linkedin: "https://linkedin.com/in/lucas-rodrigues",
        },
        {
            name: "Luiz Machado",
            image: "path-to-image-4",
            linkedin: "https://linkedin.com/in/luiz-machado",
        },
        {
            name: "Roberto Araújo",
            image: "path-to-image-5",
            linkedin: "https://linkedin.com/in/roberto-araujo",
        },
    ];

    return (
        <div className="somos-container">
            <h2 className="somos-title">Quem Somos</h2>
            <p className="somos-subtitle">Os melhores profissionais em soluções de gestão do conhecimento</p>
            <div className="somos-cards">
                {teamMembers.map((member, index) => (
                    <div key={index} className="somos-card">
                        <img src={member.image} alt={member.name} className="somos-image" />
                        <p className="somos-name">
                            <img src="path-to-linkedin-icon" alt="LinkedIn" className="linkedin-icon" />
                            {member.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Somos;
