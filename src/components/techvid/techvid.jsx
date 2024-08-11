import React from "react";
import './techvid.css';

function Techvid() {
    return (    
        <div className="techvid-container">
            <div className="techvid-text">
                <h2>Organização, proteção e colaboração em apenas um lugar</h2>
                <p>
                    O <span className="highlight">iManage Work</span> é um sistema que permite realizar o gerenciamento de todos os documentos e e-mails do seu escritório de advocacia ou departamento jurídico, utilizando apenas um ambiente de trabalho para a equipe.
                </p>
            </div>
            <div className="techvid-video">
                <iframe
                    className="video-frame"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Example video link; replace with your actual link
                    title="Tech Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default Techvid;
