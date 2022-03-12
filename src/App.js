import React from 'react';
import Header from './conponents/Header';
import Footer from './conponents/Footer';
import RecommandProduct from './pages/RecommandProduct';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import './styles/style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <RecommandProduct />
      <Footer />

    </div>
  );
}

export default App;
