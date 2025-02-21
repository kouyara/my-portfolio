import React from 'react';
import globalStyles from '../styles/globalStyles';
import '../styles/App.css';

function Hero() {
    return (
        <section style={globalStyles.heroSection} className="fadeInUpTarget">
        <div className="heroInner">
            {/* 左側のテキスト用コンテナ */}
            <div style={globalStyles.heroTextContainer}>
            <h1 style={globalStyles.heroTitle} className="FontDMSerifText">Welcome to Kouya Arakaki<br />Portfolio</h1>
            <p style={globalStyles.heroSubtitle}>
                Welcome to My Portfolio
            </p>
            </div>
            <img src="Profile.jpg" className="heroImage" alt="Hero" />
        </div>
        </section>
    );
}

export default Hero;