import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Shelters from './pages/Shelters';
import Pets from './pages/Pets';
import Login from './pages/Login';
import Register from './pages/Register';
import AdopterForm from './pages/AdopterForm';
import ShelterForm from './pages/ShelterForm';
import './index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shelters" element={<Shelters />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adopter/register" element={<AdopterForm />} />
        <Route path="/shelter/register" element={<ShelterForm />} />
      </Routes>
    </Router>
  );
};

export default App;
