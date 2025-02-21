// Layout.jsx
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Works from './Works';
import Skills from './Skills';
import Profile from './Profile';
import Contact from './Contact';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Layout() {
    return (
    <>
        <Header />
        <Hero />
        <div className="App">
        <Works />
        <Skills />
        <Profile />
        <Contact />
        </div>
        <Footer />
    </>
);
}

export default Layout;
