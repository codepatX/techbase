import React from "react";
import './Blog.css';

function Blog() {
    return (
        <div className="blog-container">
            <h2 className="blog-heading">Latest Blog Posts</h2>
            <p className="blog-subtitle">Stay updated with our latest articles</p>
            <div className="blog-cards">
                <div className="blog-card">
                    <div className="blog-image">
                        <img src="src/assets/images/blogposttechtrends.jpg" alt="Blog Post 1" />
                    </div>
                    <div className="blog-info">
                        <p className="blog-activity">Tech Trends</p>
                        <p className="blog-date">
                            <i className="clock-icon"></i> August 12, 2024
                        </p>
                        <button className="read-more">Read More</button>
                    </div>
                </div>
                <div className="blog-card">
                    <div className="blog-image">
                        <img src="src/assets/images/blogpostgadgetreviews.jpg" alt="Blog Post 2" />
                    </div>
                    <div className="blog-info">
                        <p className="blog-activity">Gadget Reviews</p>
                        <p className="blog-date">
                            <i className="clock-icon"></i> August 11, 2024
                        </p>
                        <button className="read-more">Read More</button>
                    </div>
                </div>
                <div className="blog-card">
                    <div className="blog-image">
                        <img src="src/assets/images/blogpostinnovation insights.jpg" alt="Blog Post 3" />
                    </div>
                    <div className="blog-info">
                        <p className="blog-activity">Innovation Insights</p>
                        <p className="blog-date">
                            <i className="clock-icon"></i> August 10, 2024
                        </p>
                        <button className="read-more">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
