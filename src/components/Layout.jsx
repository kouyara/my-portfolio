// Layout.jsx
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Works from './Works';
import Skills from './Skills';
import Profile from './Profile';
import Footer from './Footer';

function Layout() {
    return (
        <>
        <Header />
        <Hero />
            <section id="works">
            <Works />
            </section>
            <section id="skills">
            <Skills />
            </section>
            <section id="profile">
            <Profile />
            </section>
        <Footer id="contact"/>
        </>
);
}

export default Layout;
