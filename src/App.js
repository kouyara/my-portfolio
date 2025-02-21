// App.js
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles/App.css';
import Layout from './components/Layout';
import PayView from './pages/PayView';
import Game611 from './pages/Game611';

function App() {

  // Intersection Observer のコードはそのまま
  useEffect(() => {
    const fadeInUpElements = document.querySelectorAll('.fadeInUpTarget');
    const options = { root: null, rootMargin: '0px', threshold: 0.1 };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeInUp'); 
          obs.unobserve(entry.target);
        }
      });
    }, options);

    fadeInUpElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/works/payview" element={<PayView />} />
      <Route path="/works/611-game" element={<Game611 />} />
    </Routes>
  );
}

export default App;
