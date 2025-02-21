import React from 'react';
import { Link } from 'react-router-dom';
import globalStyles from '../styles/globalStyles';
import '../styles/App.css';

function Works() {
    return (
        <section id="works" style={globalStyles.section}>
        <div style={globalStyles.card} className="fadeInUpTarget">
            <div style={globalStyles.titleContainer}>
            <h2 style={globalStyles.sectionTitle} className="FontTinos">
                Works
            </h2>
            <p style={globalStyles.subtitle}>制作物</p>
            </div>

            {/* PayView */}
            <Link to="/works/payview" style={globalStyles.workItemContainer} className="workItemLink">
            <h3 style={globalStyles.workTitle}>PayView</h3>
            <p style={globalStyles.text}>
                <strong>Webサイト:</strong>{' '}
                <span style={globalStyles.mailLink}>https://payview.st.ie.u-ryukyu.ac.jp</span><br />
                <strong>GitHub:</strong>{' '}
                <span style={globalStyles.mailLink}>https://github.com/kosuke215135/PayView</span>
            </p>
            <p style={globalStyles.text}>
                お店の決済サービスの詳細をマップで検索し、<br />
                例えば「Visaが使えるお店」のように検索が可能な Web アプリ。<br />
                <strong>使用ツール・言語:</strong> Python(Flask) / HTML / CSS / JavaScript / git<br />
                <strong>マネジメント人数:</strong> 5人以下<br />
                <strong>制作期間:</strong> 2023年10月〜2024年02月
            </p>
            </Link>

            {/* 611 game */}
            <Link to="/works/611-game" style={globalStyles.workItemContainer} className="workItemLink">
            <h3 style={globalStyles.workTitle}>611 game</h3>
            <p style={globalStyles.text}>
                <strong>GitHub:</strong>{' '}
                <span style={globalStyles.mailLink}>https://github.com/kouyara/611</span><br />
                <strong>プレイ動画:</strong>{' '}
                <span style={globalStyles.mailLink}>https://drive.google.com/file/d/1mbmEngVBGqn_JpQHES22yVqsLssbNRw2/view</span>
            </p>
            <p style={globalStyles.text}>
                Unity で作成した VR ゲーム。主人公は猫で、<br />
                敵に捕まる前にカップラーメンを 3 つ集めて先生に渡すコンセプト。<br />
                <strong>使用ツール・言語:</strong> Unity / Blender / LumaAI / C#<br />
                <strong>マネジメント人数:</strong> 3人<br />
                <strong>制作期間:</strong> 2023年10月〜2024年02月
            </p>
            </Link>
        </div>
        </section>
    );
}

export default Works;