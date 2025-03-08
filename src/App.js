// App.js
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
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

// GA4Trackerコンポーネント: ルート変更時にページビューを送信
function GA4Tracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
}

function App() {
  // 初回マウント時にGA4を初期化（測定IDは取得したものに置き換えてください）
  useEffect(() => {
    ReactGA.initialize('G-7WYKQ3YCB3');
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/works/PayView" element={<><Header /><PayView /><Footer /></>} />
        <Route path="/works/Game611" element={<><Header /><Game611 /><Footer /></>} />
        <Route path="/works/Portfolio" element={<><Header /><Portfolio /><Footer /></>} />
        <Route path="/works/Torisan_game" element={<><Header /><Torisan_game /><Footer /></>} />
        <Route path="/works/Bachelor_sThesis_Report" element={<><Header /><Bachelor_sThesis_Report /><Footer /></>} />
        <Route path="/profile/ProfileDetail" element={<><Header /><ProfileDetail /><Footer /></>} />
      </Routes>
      {/* ルート変更を検知してページビューを送信 */}
      <GA4Tracker />
    </>
  );
}

export default App;
