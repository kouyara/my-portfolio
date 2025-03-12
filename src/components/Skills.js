import React from 'react';
import '../App.css';

function Skills() {
    return (
    <section id="skills" className="skillsSection">
        <div className="titleContainer">
            <h2 className="sectionTitle FontLibreBodoniText">
            Skills
            </h2>
            <p className="subtitle">技術スキル</p>
        </div>

        <h3 className="techSubheading FontZenKakuGothicNewText">プログラミング言語</h3>
        <ul className="skillList techIconsList">
            <li>
            <img src="python.png" alt="Python" className="techIcon" />
            <span className="techSkillName">Python</span>
            </li>
            <li>
            <img src="csharp.png" alt="C#" className="techIcon" />
            <span className="techSkillName">C#</span>
            </li>
            <li>
            <img src="js.png" alt="JavaScript" className="techIcon" />
            <span className="techSkillName">JavaScript</span>
            </li>
            <li>
            <img src="dart.png" alt="Dart" className="techIcon" />
            <span className="techSkillName">Dart</span>
            </li>
        </ul>

        <h3 className="techSubheading FontZenKakuGothicNewText">ツール / フレームワーク</h3>
        <ul className="skillList techIconsList">
            <li>
            <img src="unity.png" alt="Unity" className="techIcon" />
            <span className="techSkillName">Unity</span>
            </li>
            <li>
            <img src="flask.png" alt="Flask" className="techIcon" />
            <span className="techSkillName">Flask</span>
            </li>
            <li>
            <img src="react.png" alt="React" className="techIcon" />
            <span className="techSkillName">React</span>
            </li>
            <li>
            <img src="flutter.png" alt="Flutter" className="techIcon" />
            <span className="techSkillName">Flutter</span>
            </li>
            <li>
            <img src="postgresql.png" alt="PostgreSQL" className="techIcon" />
            <span className="techSkillName">PostgreSQL</span>
            </li>
            <li>
            <img src="git.png" alt="Git" className="techIcon" />
            <span className="techSkillName">Git</span>
            </li>
            <li>
            <img src="docker.png" alt="Docker" className="techIcon" />
            <span className="techSkillName">Docker</span>
            </li>
        </ul>
    </section>
    );
}

export default Skills;
