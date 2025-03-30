import React from 'react';
import '../App.css';
import OtherWorks from './OtherWorks';

function Torisan_game() {
    return (
    <section className="pagesSection">
        <div className="titleContainer">
            <h2 className="FontLibreBodoniText pagesTitle">
            Torisan_game
            </h2>
            <p className="subtitle">Unity Game</p>
        </div>

        <p className="pagesText">
            <strong>Web Site:</strong>{' '}
            <a
            href="https://ie.u-ryukyu.ac.jp/~e215705/Torisan_game/"
            className="pageLink"
            target="_blank"
            rel="noopener noreferrer"
            >
            https://ie.u-ryukyu.ac.jp/~e215705/Torisan_game/
            </a>
            <br />
        </p>

        <p className="pagesText">
            <strong>GitHub:</strong>{' '}
            <a
            href="https://github.com/kouyara/Torisan_game"
            className="pageLink"
            target="_blank"
            rel="noopener noreferrer"
            >
            https://github.com/kouyara/Torisan_game
            </a>
        </p>
        
        <div className="pagesImageWrapper">
            <img
            src="../Torisan_game.png"
            className="pagesImage"
            alt="PayView"
            />
        </div>

        <p className="pagesOutlineText FontZenKakuGothicNewText">
        学生向けハッカソン「KOZAHACKS」で開発したプロダクト。
        スイカゲームをUnityで再現しようと思い、模倣して作成した。
        UnityのWebGL機能を使用し、Webアプリとしてビルドしている。
        </p>

        <div className="pagesOverviewRow">
            <p className="pagesSubTitle">自分の担当した内容</p>
            <p className="pagesOverviewText">
            主に、C#でオブジェクトの当たり判定処理で、重力の影響を受けるようにしたり、スコア表示させるようにした。
            </p>
        </div>

        <div className="pagesOverviewRow">
            <p className="pagesSubTitle">使用ツール・言語</p>
            <p className="pagesOverviewText">
            Unity / C# / WebGL
            </p>
        </div>
        
        <div className="pagesOverviewRow">
            <p className="pagesSubTitle">人数</p>
            <p className="pagesOverviewText">
            2人
            </p>
        </div>
        
        <div className="pagesOverviewRow">
            <p className="pagesSubTitle">制作期間</p>
            <p className="pagesOverviewText">
            2024年08月〜2024年09月（1ヶ月）
            </p>
        </div>

        <OtherWorks />
    </section>
    );
}

export default Torisan_game;
