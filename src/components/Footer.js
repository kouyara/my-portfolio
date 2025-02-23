import React from 'react';
import '../App.css';

function Footer() {
    return (
        <footer className="footer">
        <div className="footerLinks">
            <a href="#profile" className="footerLink">profile</a>
            <a href="#skills" className="footerLink">skills</a>
            <a href="#works" className="footerLink">works</a>
            <a href="#contact" className="footerLink">contact</a>
        </div>
        <div className="footerText">
            All Rights Reserved 2025 ©︎ Kouya Arakaki
        </div>
        </footer>
    );
}

export default Footer;