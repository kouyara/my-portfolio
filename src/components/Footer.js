import React from 'react';
import '../App.css';

function Footer() {
    return (
        <section id="contact" className="footerSection">
            <div className="contactTitleContainer">
                <h2 className="contactTitle FontLibreBodoniText">
                Contact
                </h2>
            </div>

            <p className="mailLink">
                e215705※ie.u-ryukyu.ac.jp
            </p>

            <p className="contactText FontZenKakuGothicNewText">
            ※マークを@マークに変更してお送りください。
            </p>
            <div className="footer">
                <div className="footerText">
                    All Rights Reserved 2025 ©︎ Kouya Arakaki
                </div>
            </div>
        </section>
    );
}

export default Footer;