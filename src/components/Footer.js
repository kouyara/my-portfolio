import React from 'react';
import globalStyles from '../styles/globalStyles';
import '../styles/App.css';

function Footer() {
    return (
        <footer style={globalStyles.footer}>
        <div style={globalStyles.footerLinks}>
            <a href="#profile" style={globalStyles.footerLink}>profile</a>
            <a href="#skills" style={globalStyles.footerLink}>skills</a>
            <a href="#works" style={globalStyles.footerLink}>works</a>
            <a href="#contact" style={globalStyles.footerLink}>contact</a>
        </div>
        <div style={globalStyles.footerText}>
            All Rights Reserved 2025 ©︎ Kouya Arakaki
        </div>
        </footer>
    );
}

export default Footer;