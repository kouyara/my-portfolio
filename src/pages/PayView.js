import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function PayViewPage() {
    return (
    <section className="section">
        <div className="pagesApp">
        <div className="titleContainer">
            <h2 className="FontLibreBodoniText pagesTitle">
            PayView
            </h2>
            <p className="subtitle">Web App</p>
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
            href="https://github.com/kosuke215135/PayView"
            className="pageLink"
            target="_blank"
            rel="noopener noreferrer"
            >
            https://github.com/kosuke215135/PayView
            </a>
        </p>
        
        <div className="pagesImageWrapper">
            <img
            src="../PayView.png"
            className="pagesImage"
            alt="PayView"
            />
        </div>
        <div className="pagesImageWrapper">
            <img
            src="../PayView2.png"
            className="pagesImage"
            alt="PayView 2"
            />
        </div>

        <p className="pagesOutlineText FontZenKakuGothicNewText">
        消費者向けのWebアプリで、現在地から利用可能な店舗を検索し、その店舗で使用できる決済サービスを事前に確認できる機能を備えている。
        ユーザーは検索機能を利用して登録されているお店を調べることができ、さらに「食べログ」とは異なり、利用可能な決済サービスのボタンを押すことで、対応する決済アプリへ直接移動することが可能。
        また、ユーザー自身が新たな店舗情報や決済サービスの対応状況を追加できる仕組みも備えている。
        </p>

        <div className="pagesOverviewRow">
            <p className="pagesSubTitle">使用ツール・言語</p>
            <p className="pagesOverviewText">
            Flask / Python / HTML / CSS / JavaScript / git
            </p>
        </div>
        
        <div className="pagesOverviewRow">
            <p className="pagesSubTitle">人数</p>
            <p className="pagesOverviewText">
            4人
            </p>
        </div>
        
        <div className="pagesOverviewRow">
            <p className="pagesSubTitle">制作期間</p>
            <p className="pagesOverviewText">
            2023年10月〜2024年02月
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

export default PayViewPage;
