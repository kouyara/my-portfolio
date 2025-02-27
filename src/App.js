// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import PayView from './pages/PayView';
import Game611 from './pages/Game611';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';
import ProfileDetail from './components/ProfileDetail';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/works/payview" element={<><Header /><PayView /><Footer /></>} />
      <Route path="/works/611-game" element={<><Header /><Game611 /><Footer /></>} />
      <Route path="/works/Portfolio" element={<><Header /><Portfolio /><Footer /></>} />
      <Route path="/profile/detail" element={<><Header /><ProfileDetail /><Footer /></>} />
    </Routes>
  );
}

export default App;
