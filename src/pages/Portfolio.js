import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Portfolio() {
    return (
    <section className="section">
        <div className="pagesApp">
        <div className="titleContainer">
            <h2 className="FontLibreBodoniText pagesTitle">
            Portfolio
            </h2>
            <p className="subtitle">Web Site</p>
        </div>

        <p className="pagesText">
            <strong>Web Site:</strong>{' '}
            <a
            href="https://payview.st.ie.u-ryukyu.ac.jp"
            className="pageLink"
            target="_blank"
            rel="noopener noreferrer"
            >
            https://payview.st.ie.u-ryukyu.ac.jp
            </a>
            <br />
        </p>

        <p className="pagesText">
            <strong>GitHub:</strong>{' '}
            <a
            href="https://github.com/kouyara/my-portfolio"
            className="pageLink"
            target="_blank"
            rel="noopener noreferrer"
            >
            https://github.com/kouyara/my-portfolio
            </a>
        </p>
        
        <div className="pagesImageWrapper">
            <img
            src="../Portfolio.png"
            className="pagesImage"
            />
        </div>

        <p className="pagesOutlineText FontZenKakuGothicNewText">
            就職活動のために1人で開発しました。
        </p>

        <div className="pagesOverviewRow">
            <p className="pagesSubTitle">使用ツール・言語</p>
            <p className="pagesOverviewText">
            React / JavaScript / CSS
            </p>
        </div>
        
        <div className="pagesOverviewRow">
            <p className="pagesSubTitle">人数</p>
            <p className="pagesOverviewText">
            1人
            </p>
        </div>
        
        <div className="pagesOverviewRow">
            <p className="pagesSubTitle">制作期間</p>
            <p className="pagesOverviewText">
            2025年2月〜
            </p>
        </div>

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
        </div>
        </div>
    </section>
    );
}

export default Portfolio;
