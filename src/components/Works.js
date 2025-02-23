import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Works() {
    return (
    <section id="works" className="section">
        <div className="titleContainer">
        <h2 className="sectionTitle FontTinos">
            Works
        </h2>
        <p className="subtitle">制作物</p>
        </div>

        <div className="worksRow">
        <Link to="/works/payview" className="workItemContainer">
            <img
            src="PayView.png"
            alt="PayView"
            className="workItemImage"
            />
            <h3 className="workTitle">PayView</h3>
            <p className="workSubtitle">Web App</p>
        </Link>

        <Link to="/works/611-game" className="workItemContainer">
            <img
            src="Game611.png"
            alt="611 game"
            className="workItemImage"
            />
            <h3 className="workTitle">611 game</h3>
            <p className="workSubtitle">VR Game</p>
        </Link>

        <Link to="/works/Portfolio" className="workItemContainer">
            <img
            src="Portfolio.png"
            className="workItemImage"
            />
            <h3 className="workTitle">Portfolio</h3>
            <p className="workSubtitle">Web Site</p>
        </Link>
        </div>
    </section>
    );
}

export default Works;
