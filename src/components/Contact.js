import React from 'react';
import '../App.css';

function Contact() {
    return (
        <section id="contact" className="section">
            <h2 className="sectionTitle FontTinos">
            Contact
            </h2>
            <p className="text FontZenKakuGothicNewText">
            お問い合わせは以下のメールアドレスへお願いします。<br />
            <a href="mailto:e215705@ie.u-ryukyu.ac.jp" className="mailLink">
                e215705@ie.u-ryukyu.ac.jp
            </a>
            </p>
        </section>
    );
}

export default Contact;