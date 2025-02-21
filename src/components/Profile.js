import React from 'react';
import globalStyles from '../styles/globalStyles';
import '../styles/App.css';

function Profile() {
    return (
        <section id="profile" style={globalStyles.section}>
        <div style={globalStyles.card} className="fadeInUpTarget">
            <div style={globalStyles.titleContainer}>
            <h2 style={globalStyles.sectionTitle} className="FontTinos">
                Profile
            </h2>
            <p style={globalStyles.subtitle}>基本情報と自己紹介</p>
            </div>
            <p style={globalStyles.text}>
            新垣 江耶（Arakaki Kouya）🚹 2002年5月28日、沖縄生まれ。<br />
            琉球大学 工学部 工学科 知能情報コース在籍 (2021年4月 - 2025年3月)。<br />
            株式会社タップでインターンシップとして現在も従事(2025年8月 - )。<br />
            大学ではプログラミングを用いた情報処理・自動化・AI開発などを学習。
            </p>
            <p style={globalStyles.text}>
            <strong>Name: </strong>Kouya Arakaki<br />
            <strong>Mail: </strong>
            <a href="mailto:e215705@ie.u-ryukyu.ac.jp" style={globalStyles.mailLink}>
                e215705@ie.u-ryukyu.ac.jp
            </a><br />
            <strong>GitHub: </strong>
            <a href="https://github.com/kouyara" style={globalStyles.mailLink}>
                https://github.com/kouyara
            </a>
            </p>
        </div>
        </section>
    );
}

export default Profile;