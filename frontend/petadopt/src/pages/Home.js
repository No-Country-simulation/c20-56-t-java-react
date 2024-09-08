// src/pages/Home.js
import React from 'react';
import AdminContent from '../components/AdminContent';
import UserContent from '../components/UserContent';
import AdopterContent from '../components/AdopterContent';
import ShelterContent from '../components/ShelterContent';
import GuestContent from '../components/GuestContent';

const Home = ({ activeRole }) => {
  const renderContent = () => {
    switch (activeRole) {
      case 'ADMIN':
        return <AdminContent />;
      case 'USER':
        return <UserContent />;
      case 'ADOPTER':
        return <AdopterContent />;
      case 'SHELTER':
        return <ShelterContent />;
      default:
        return <GuestContent />;
    }
  };

  return (
    <div>
      {renderContent()}  {/* Renderiza el contenido basado en el rol */}
    </div>
  );
};

export default Home;
