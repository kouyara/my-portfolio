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

        <div className="profileDetailContentRow">
        <div className="profileTextContainer">
            <p className="profileName FontZenKakuGothicNewText">
                新垣 江耶（Kouya Arakaki）</p>
            <p className="profileText FontZenKakuGothicNewText">
            🚹 2002年5月28日、沖縄生まれ。<br />
            琉球大学 工学部 工学科 知能情報コース在籍 (2021年4月 - 2025年3月)。<br />
            大学では情報工学を専攻しており、特に授業ではコンピュータ技術、ネットワーク技術、人工知能技術について学んでいる。<br />
            現在も発展し続けるIT技術を、社会や身近な人々に役立てることができるエンジニアを目指している。<br />
            研究室は、玉城絵美先生のBodySharingLabに所属しており、BodySharingやXR、HCIの研究を行っている。<br />
            趣味は、カラオケ、散歩すること、旅行すること、楽器を弾くこと。
            </p>

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

        <div className="profileImageContainer">
            <img
            src="../Profile2.jpg"
            alt="Profile"
            className="profileImage"
            />
        </div>
        </div>

        <h2 className="profileSubTitle FontZenKakuGothicNewText">
            技術スキル
        </h2>
        <h3 className="techSubheading FontZenKakuGothicNewText">プログラミング言語</h3>
        <ul className="skillList techIconsList">
            <li>
            <img src="../python.png" alt="Python" className="techIcon" />
            <span className="techSkillName">Python</span>
            </li>
            <li>
            <img src="../csharp.png" alt="C#" className="techIcon" />
            <span className="techSkillName">C#</span>
            </li>
            <li>
            <img src="../js.png" alt="JavaScript" className="techIcon" />
            <span className="techSkillName">JavaScript</span>
            </li>
            <li>
            <img src="../dart.png" alt="Dart" className="techIcon" />
            <span className="techSkillName">Dart</span>
            </li>
        </ul>

        <h3 className="techSubheading FontZenKakuGothicNewText">ツール / フレームワーク</h3>
        <ul className="skillList techIconsList">
            <li>
            <img src="../unity.png" alt="Unity" className="techIcon" />
            <span className="techSkillName">Unity</span>
            </li>
            <li>
            <img src="../flask.png" alt="Flask" className="techIcon" />
            <span className="techSkillName">Flask</span>
            </li>
            <li>
            <img src="../react.png" alt="React" className="techIcon" />
            <span className="techSkillName">React</span>
            </li>
            <li>
            <img src="../flutter.png" alt="Flutter" className="techIcon" />
            <span className="techSkillName">Flutter</span>
            </li>
            <li>
            <img src="../postgresql.png" alt="PostgreSQL" className="techIcon" />
            <span className="techSkillName">PostgreSQL</span>
            </li>
            <li>
            <img src="../git.png" alt="Git" className="techIcon" />
            <span className="techSkillName">Git</span>
            </li>
            <li>
            <img src="../docker.png" alt="Docker" className="techIcon" />
            <span className="techSkillName">Docker</span>
            </li>
        </ul>

        <h2 className="profileSubTitle FontZenKakuGothicNewText">
            アルバイトでは、、
        </h2>

    </section>
    );
}

export default ProfileDetail;
