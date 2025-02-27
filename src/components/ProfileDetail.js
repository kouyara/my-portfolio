import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function ProfileDetail() {
    return (
    <section id="profile" className="section">
        <div className="titleContainer">
        <h2 className="sectionTitle FontLibreBodoniText">
            Profile
        </h2>
        <p className="subtitle">基本情報と自己紹介</p>
        </div>

        <div className="profileContentRow">
        <div className="profileImageContainer">
            <img
            src="../Profile.jpg"
            alt="Profile"
            className="profileImage"
            />
        </div>
        <div className="profileTextContainer">
            <p className="text FontZenKakuGothicNewText">
            新垣 江耶（Kouya Arakaki）🚹 2002年5月28日、沖縄生まれ。<br />
            琉球大学 工学部 工学科 知能情報コース在籍 (2021年4月 - 2025年3月)。<br />
            株式会社タップでインターンシップとして現在も従事(2025年8月 - )。<br />
            大学ではプログラミングを用いた情報処理・自動化・AI開発などを学習。
            </p>
            <div className="viewMoreContainer">
            <Link to="/profile/detail" className="viewMoreButton">
                View more
            </Link>
            </div>
            <p className="text FontZenKakuGothicNewText">
            <a
                href="https://github.com/kouyara"
                className="mailLink"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src="../github.png" alt="GitHub" className="githubIcon" />
            </a>
            </p>
        </div>
        </div>
    </section>
    );
}

export default ProfileDetail;
