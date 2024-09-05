import React, { useEffect, useState } from 'react';
import { getJwt } from '../services/roleService';
import AdminContent from '../components/AdminContent';
import UserContent from '../components/UserContent';
import AdopterContent from '../components/AdopterContent';
import ShelterContent from '../components/ShelterContent';
import GuestContent from '../components/GuestContent';

const Home = () => {
    const [activeRole, setActiveRole] = useState(null);

    useEffect(() => {
        const decodedJwt = getJwt();
        if (decodedJwt) {
            setActiveRole(decodedJwt.activeRole); // Si está logueado, obtiene el rol
        } else {
            setActiveRole('guest'); // Si no hay JWT, se asume que es un visitante
        }
    }, []);

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
