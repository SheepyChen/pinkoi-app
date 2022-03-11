import React from 'react';
import Nav from './conponents/Nav';
import Footer from './conponents/Footer';
import RecommandProduct from './pages/home/RecommandProduct';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
import './styles/style.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/r" element={<About />} />
        <Route path="/" element={<About />} />
      </Routes>
      <RecommandProduct />
      <Footer />

    </div>
  );
}

export default App;
