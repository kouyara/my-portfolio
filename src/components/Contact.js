import React from 'react';
import globalStyles from '../styles/globalStyles';
import '../styles/App.css';

function Contact() {
    return (
        <section id="contact" style={globalStyles.section}>
        <div style={globalStyles.card} className="fadeInUpTarget">
            <h2 style={globalStyles.sectionTitle} className="FontTinos">
            Contact
            </h2>
            <p style={globalStyles.text}>
            お問い合わせは以下のメールアドレスへお願いします。<br />
            <a href="mailto:e215705@ie.u-ryukyu.ac.jp" style={globalStyles.mailLink}>
                e215705@ie.u-ryukyu.ac.jp
            </a>
            </p>
        </div>
        </section>
    );
}

export default Contact;