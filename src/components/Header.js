import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';
import '../App.css';

function TitleLink({ children, className }) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (e) => {
        e.preventDefault();
        if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => window.scrollTo(0, 0), 100);
        } else {
        window.scrollTo(0, 0);
        }
    };

    return (
        <a href="/" onClick={handleClick} className={className}>
        {children}
        </a>
    );
}

function CustomScrollLink({ to, children, className, ...props }) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (e) => {
    if (location.pathname !== '/') {
        e.preventDefault();
        navigate('/');

        setTimeout(() => {
        scroller.scrollTo(to, {
            duration: 500,
            smooth: true,
            offset: -70,
        });
        }, 100);
    }
    };

    return (
    <ScrollLink
        to={to}
        smooth={true}
        duration={500}
        offset={-70}
        onClick={handleClick}
        className={className}
        {...props}
    >
        {children}
    </ScrollLink>
    );
}

function Header() {
    return (
    <div className="headerContainer fadeInTop">
        <div className="headerInner">
        <TitleLink className="title FontLibreBodoniText">
            Kouya Arakaki Portfolio
        </TitleLink>
        <nav className="nav">
            <CustomScrollLink to="works" className="link">
            Works
            </CustomScrollLink>
            <CustomScrollLink to="skills" className="link">
            Skills
            </CustomScrollLink>
            <CustomScrollLink to="profile" className="link">
            Profile
            </CustomScrollLink>
            <CustomScrollLink to="contact" className="link">
            Contact
            </CustomScrollLink>
        </nav>
        </div>
    </div>
    );
}

export default Header;
