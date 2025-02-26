import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';
import '../App.css';

// カスタムコンポーネント：クリック時にルート遷移＆スクロールする
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
        <Link 
            to="/" 
            onClick={() => {
                window.scrollTo(0, 0);
                window.location.reload();
            }}
            className="title"
            >
            Kouya Arakaki Portfolio
        </Link>
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
