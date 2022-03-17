import React from 'react';
import Header from './conponents/Header';
import Footer from './conponents/Footer';
import Home from './pages/Home';
// import { Routes, Route } from 'react-router-dom';
import './styles/style.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes> */}
      <Home />
      <Footer />

    </div>
  );
}

export default App;
