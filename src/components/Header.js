import React, { useState } from 'react';
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
            setTimeout(() => {
                window.location.reload();
                window.scrollTo(0, 0);
            }, 100);
        } else {
            window.location.reload();
            window.scrollTo(0, 0);
        }
    };

    return (
        <a href="/" onClick={handleClick} className={className}>
        {children}
        </a>
    );
}

function CustomScrollLink({ to, children, className, onClick, ...props }) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (e) => {
        // 受け取った onClick を呼び出してメニューを閉じる
        if (onClick) onClick();

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

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // スムーズスクロール
    });
};

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuClick = () => {
        setMenuOpen(false);
    };

    return (
        <>
        {/* ヘッダー */}
        <div className="headerContainer fadeInTop">
            <div className="headerInner">
            <TitleLink className="title FontLibreBodoniText">
                Kouya Arakaki
            </TitleLink>

            {/* ハンバーガーアイコン */}
            <div
                className={`hamburgerIcon ${menuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* ナビゲーションメニュー */}
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <CustomScrollLink to="works" className="link" onClick={handleMenuClick}>
                Works
                </CustomScrollLink>
                <CustomScrollLink to="skills" className="link" onClick={handleMenuClick}>
                Skills
                </CustomScrollLink>
                <CustomScrollLink to="profile" className="link" onClick={handleMenuClick}>
                Profile
                </CustomScrollLink>
                <CustomScrollLink to="contact" className="link" onClick={handleMenuClick}>
                Contact
                </CustomScrollLink>
            </nav>
            </div>
        </div>

        {/* 画面全体のぼかし・暗幕オーバーレイ (menuOpen が true のときに表示) */}
        {menuOpen && (
            <div className="menuOverlay" onClick={handleMenuClick}></div>
        )}
        <div className="backToTop" onClick={scrollToTop}>
            ↑
        </div>
        </>
    );
}

export default Header;
