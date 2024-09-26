import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import SocialEnterprisesPage from './components/SocialEnterprisesPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/social-enterprises" element={<SocialEnterprisesPage />} />
        {/* Add more routes here for other topics */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
