import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Shelters from './pages/Shelters';
import Pets from './pages/Pets';
import Login from './pages/Login';
import Register from './pages/Register';
import AdopterForm from './pages/AdopterForm';
import ShelterForm from './pages/ShelterForm';
import { getJwt, switchRole } from './services/roleService'; // Asegúrate de importar las funciones necesarias
import './index.css';

const App = () => {
  const [activeRole, setActiveRole] = useState(null);

  // Al montar el componente, obtiene el rol desde el JWT
  useEffect(() => {
    const decodedJwt = getJwt();
    if (decodedJwt) {
      setActiveRole(decodedJwt.activeRole); // Si hay un JWT, actualiza el rol activo
    } else {
      setActiveRole('guest'); // Si no hay JWT, establece el rol como 'guest'
    }
  }, []);

  // Función que maneja el cambio de rol
  const handleRoleSwitch = async (role) => {
    await switchRole(role); // Cambia el rol
    const decodedJwt = getJwt(); // Vuelve a obtener el JWT con el nuevo rol
    if (decodedJwt) {
      setActiveRole(decodedJwt.activeRole); // Actualiza el rol activo en el estado
    }
  };

  return (
    <Router>
      {/* Pasamos activeRole y la función de cambio de rol a Navbar */}
      <Navbar activeRole={activeRole} onRoleChange={handleRoleSwitch} />
      
      <Routes>
        {/* Pasamos activeRole a Home para mostrar contenido dinámico */}
        <Route path="/" element={<Home activeRole={activeRole} />} />
        <Route path="/about" element={<About />} />
        <Route path="/shelters" element={<Shelters />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adopter/register" element={<AdopterForm />} />
        <Route path="/shelter/register" element={<ShelterForm />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
