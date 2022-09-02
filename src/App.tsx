import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
            <div style={{ minHeight: '100vh' }}>
              <Routes>
              <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
              </Routes>  
            </div>
      <Footer />
    </Router>
  );
}

export default App;
