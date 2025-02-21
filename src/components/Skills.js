import React from 'react';
import globalStyles from '../styles/globalStyles';
import '../styles/App.css';

function Skills() {
    return (
        <section id="skills" style={globalStyles.section}>
        <div style={globalStyles.card} className="fadeInUpTarget">
            <div style={globalStyles.titleContainer}>
            <h2 style={globalStyles.sectionTitle} className="FontTinos">
                Skills
            </h2>
            <p style={globalStyles.subtitle}>技術スキル</p>
            </div>
            <ul style={globalStyles.skillList}>
            <li><strong>プログラミング言語:</strong> Python, C#, JavaScript, Dart</li>
            <li><strong>ツール/フレームワーク:</strong> Unity, Flask, React, Flutter, SQL, Git, Docker</li>
            </ul>
        </div>
        </section>
    );
}

export default Skills;