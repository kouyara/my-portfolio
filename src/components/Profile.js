import React from 'react';
import '../App.css';

function Profile() {
    return (
        <section id="profile" className="section">
            <div className="titleContainer">
            <h2 className="sectionTitle FontTinos">
                Profile
            </h2>
            <p className="subtitle">基本情報と自己紹介</p>
            </div>
            <p className="text FontZenKakuGothicNewText">
            新垣 江耶（Arakaki Kouya）🚹 2002年5月28日、沖縄生まれ。<br />
            琉球大学 工学部 工学科 知能情報コース在籍 (2021年4月 - 2025年3月)。<br />
            株式会社タップでインターンシップとして現在も従事(2025年8月 - )。<br />
            大学ではプログラミングを用いた情報処理・自動化・AI開発などを学習。
            </p>
            <p className="text FontZenKakuGothicNewText">
            <strong>Name: </strong>Kouya Arakaki<br />
            <strong>Mail: </strong>
            <a href="mailto:e215705@ie.u-ryukyu.ac.jp" className="mailLink">
                e215705@ie.u-ryukyu.ac.jp
            </a><br />
            <strong>GitHub: </strong>
            <a href="https://github.com/kouyara" className="mailLink">
                https://github.com/kouyara
            </a>
            </p>
        </section>
    );
}

export default Profile;