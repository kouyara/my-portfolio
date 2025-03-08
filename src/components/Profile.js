import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Profile() {
    return (
    <section id="profile" className="section">
        <div className="titleContainer">
        <h2 className="sectionTitle FontLibreBodoniText">
            Profile
        </h2>
        <p className="subtitle">基本情報と自己紹介</p>
        </div>

        <div className="profileContentRow">
            <img
            src="Profile.jpg"
            alt="Profile"
            className="profileImage"
            />
            <div className="profileTextContainer">
                <p className="profileName FontZenKakuGothicNewText">
                    新垣 江耶（Kouya Arakaki）</p>
                <p className="profileText FontZenKakuGothicNewText">
                🚹 2002年、沖縄生まれ。<br />
                琉球大学 工学部 工学科 知能情報コース在籍 (2021年4月 - 2025年3月)。<br />
                株式会社タップでインターンシップとして現在も従事(2025年8月 - )。<br />
                大学では情報工学を専攻しており、特に授業ではコンピュータ技術、ネットワーク技術、人工知能技術について学んでいる。<br />
                研究室は、玉城絵美先生のBodySharingLabに所属しており、BodySharingやXR、HCIの研究を行っている。
                </p>
                
                <p className="text FontZenKakuGothicNewText">
                <a
                    href="https://github.com/kouyara"
                    className="mailLink"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="github.png" alt="GitHub" className="githubIcon" />
                </a>
                </p>

                <div className="viewMoreContainer">
                <Link to="/profile/ProfileDetail" className="FontLibreBodoniText viewMoreButton">
                    View more
                </Link>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Profile;
