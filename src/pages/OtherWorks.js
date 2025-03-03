import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function OtherWorks() {
    return (
        <div>
        <p className="pagesOtherWorksTitle FontLibreBodoniText">Other Works</p>

        <div className="worksRow">
        <Link to="/works/payview" className="workItemContainer">
            <img
            src="../PayView.png"
            alt="PayView"
            className="workItemImage"
            />
            <h3 className="workTitle">PayView</h3>
            <p className="workSubtitle">Web App</p>
        </Link>

        <Link to="/works/611-game" className="workItemContainer">
            <img
            src="../Game611.png"
            alt="611 game"
            className="workItemImage"
            />
            <h3 className="workTitle">611 game</h3>
            <p className="workSubtitle">VR Game</p>
        </Link>

        <Link to="/works/Portfolio" className="workItemContainer">
            <img
            src="../Portfolio.png"
            className="workItemImage"
            />
            <h3 className="workTitle">Portfolio</h3>
            <p className="workSubtitle">Web Site</p>
        </Link>

        <Link to="/works/Torisan_game" className="workItemContainer">
            <img
            src="../Torisan_game.png"
            className="workItemImage"
            />
            <h3 className="workTitle">Torisan_game</h3>
            <p className="workSubtitle">Unity Game</p>
        </Link>

        <Link to="/works/Bachelor_sThesis_Report" className="workItemContainer">
            <img
            src="../no_image.png"
            className="workItemImage"
            />
            <h3 className="workTitle">卒業論文</h3>
            <p className="workSubtitle">Research</p>
        </Link>
        </div>
        </div>
    );
}

export default OtherWorks;
