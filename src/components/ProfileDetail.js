import React from 'react';
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
            🚹 2002年、沖縄生まれ。<br />
            琉球大学 工学部 工学科 知能情報コース在籍 (2021年4月 - 2025年3月)。<br />
            大学では情報工学を専攻しており、特に授業ではコンピュータ技術、ネットワーク技術、人工知能技術について学んでいる。<br />
            研究室は、玉城絵美先生のBodySharingLabに所属しており、BodySharingやXR、HCIの研究を行っている。<br />
            現在も発展し続けるIT技術を、社会や身近な人々に役立てることができるエンジニアを目指している。<br />
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
        技術系のアルバイトでは、、
        </h2>

        <div className="profileOverviewRow">
            <p className="profileOverviewSubTitle">Project1</p>
            <p className="profileOverviewText">
            PythonのBeautifulSoupで、Webスクレイピング機能の実装。
            Dockerを用いてデータベースコンテナとアプリ起動コンテナに分割する環境の構築
            </p>
        </div>

        <div className="profileOverviewRow">
            <p className="profileOverviewSubTitle">Project2</p>
            <p className="profileOverviewText">
            Flutterを利用して社内用アプリのUIを直感的かつ使いやすいデザインで実装
            </p>
        </div>

        <div className="profileOverviewRow">
            <p className="profileOverviewSubTitle">Project3</p>
            <p className="profileOverviewText">
            PythonのFastAPIをバックエンド、Flutterをフロントエンドに採用した簡易掲示板システムを開発
            </p>
        </div>

        <ul className="profileTechIconsList">
            <li>
            <img src="../python.png" alt="Python" className="profileTechIcon" />
            <span className="profileTechSkillName">Python</span>
            </li>
            <li>
            <img src="../dart.png" alt="Dart" className="profileTechIcon" />
            <span className="profileTechSkillName">Dart</span>
            </li>
            <li>
            <img src="../flutter.png" alt="Flutter" className="profileTechIcon" />
            <span className="profileTechSkillName">Flutter</span>
            </li>
            <li>
            <img src="../postgresql.png" alt="PostgreSQL" className="profileTechIcon" />
            <span className="profileTechSkillName">PostgreSQL</span>
            </li>
            <li>
            <img src="../git.png" alt="Git" className="profileTechIcon" />
            <span className="profileTechSkillName">Git</span>
            </li>
            <li>
            <img src="../docker.png" alt="Docker" className="profileTechIcon" />
            <span className="profileTechSkillName">Docker</span>
            </li>
        </ul>

        <h2 className="profileSubTitle FontZenKakuGothicNewText">
        技術系以外のアルバイトでは、、
        </h2>
        <div className="profileOverviewRow">
            <p className="profileOverviewSubTitle">飲食店でのアルバイト</p>
            <p className="profileOverviewText">
            キッチン業務、レジ業務、清掃業務などの業務を担当。
            主に、レジ業務をすることが多く、お客様とのやり取りを通じて、ミスなく正確に会計を行うよう努めた。
            </p>
        </div>

        <div className="profileOverviewRow">
            <p className="profileOverviewSubTitle">雑貨屋でのアルバイト</p>
            <p className="profileOverviewText">
            品出し、接客業務、会計・精算業務、清掃業務などの業務を担当。
            ここでは接客業務をすることが多く、お客様とのコミュニケーションを心がけ、
            商品案内や購入手続きなどの対応を適切に行うよう努めた。
            </p>
        </div>

        <ul className="profileParttimejobList">
            <li>
            <img src="../part_time_job1.png" className="profileParttimejob" />
            </li>
            <li>
            <img src="../part_time_job2.png" className="profileParttimejob" />
            </li>
        </ul>

        <h2 className="profileSubTitle FontZenKakuGothicNewText">
        研究室では、、
        </h2>
        <div className="profileOverviewRow">
            <p className="profileOverviewText">
            研究室は、玉城絵美先生の指導の下、BodySharingLabに所属しており、BodySharingやXR、HCIの研究に取り組んでいる。
            卒業論文では、H2L社のFirstVRを用いて筋変位を測定し、握力推定モデルの精度向上に関する研究を行った。
            修士研究では、筋変位センサと握力推定モデルを応用し、VR/ARコントローラへの実装を目指している。
            </p>
        </div>

    </section>
    );
}

export default ProfileDetail;
