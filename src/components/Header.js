import React from 'react';
import globalStyles from '../styles/globalStyles';
import '../styles/App.css';

function Header() {
    return (
        <div className="headerContainer fadeInTop">
        <div className="headerInner">
            <h1 style={globalStyles.title}>Kouya Arakaki Portfolio</h1>
            <nav style={globalStyles.nav}>
            <a href="#profile" style={globalStyles.link}>Profile</a>
            <a href="#skills" style={globalStyles.link}>Skills</a>
            <a href="#works" style={globalStyles.link}>Works</a>
            <a href="#contact" style={globalStyles.link}>Contact</a>
            </nav>
        </div>
        </div>
    );
}

export default Header;