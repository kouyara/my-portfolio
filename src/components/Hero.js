import React from 'react';
import '../App.css';

function Hero() {
    return (
        <section className="heroSection">
        <div className="heroInner">
            <div className="heroTextContainer">
            <h1 className="FontLibreBodoniText heroTitle">Welcome to Kouya Arakaki<br />Portfolio</h1>
            <p className="heroSubtitle">
                Software Engineer's Portfolio
            </p>
            </div>
            <img src="Hero.jpg" className="heroImage" alt="Hero" />
        </div>
        </section>
    );
}

export default Hero;