// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import ProfileDetail from './components/ProfileDetail';
import PayView from './pages/PayView';
import Game611 from './pages/Game611';
import Portfolio from './pages/Portfolio';
import Torisan_game from './pages/Torisan_game';
import Bachelor_sThesis_Report from './pages/Bachelor_sThesis_Report';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/works/PayView" element={<><Header /><PayView /><Footer /></>} />
      <Route path="/works/Game611" element={<><Header /><Game611 /><Footer /></>} />
      <Route path="/works/Portfolio" element={<><Header /><Portfolio /><Footer /></>} />
      <Route path="/works/Torisan_game" element={<><Header /><Torisan_game /><Footer /></>} />
      <Route path="/works/Bachelor_sThesis_Report" element={<><Header /><Bachelor_sThesis_Report /><Footer /></>} />
      <Route path="/profile/ProfileDetail" element={<><Header /><ProfileDetail /><Footer /></>} />
    </Routes>
  );
}

export default App;
