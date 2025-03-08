import React from 'react';
import '../App.css';
import OtherWorks from './OtherWorks';

function Portfolio() {
    return (
    <section className="section">
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

        <OtherWorks />
    </section>
    );
}

export default Portfolio;
