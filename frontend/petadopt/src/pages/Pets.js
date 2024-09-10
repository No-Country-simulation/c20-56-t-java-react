import React, { useState, useEffect } from 'react';
import { fetchAllPets } from '../services/petService'; 

const Pets = () => {
  const [pets, setPets] = useState([]);  
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);   
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJVU0VSIl0sImFjdGl2ZVJvbGUiOiJVU0VSIiwic3ViIjoidGVzdHVzZXJAZXhhbXBsZS5jb20iLCJpYXQiOjE3MjU5MTgwNzYsImV4cCI6MTcyNTk1NDA3Nn0.SOTCkDLrtPnXPeDXUdFaJsQwRAPXQYMQ_H-nWh97LFM';  // Reemplaza esto con tu token real

  useEffect(() => {
    const getPets = async () => {
      try {
        const data = await fetchAllPets(token);
        setPets(data);  
      } catch (err) {
        setError(err.message);  
      } finally {
        setLoading(false);  
      }
    };

    getPets();  
  }, [token]);

  if (loading) {
    return <p className="text-center text-2xl">Cargando mascotas...</p>;
  }

  if (error) {
    return <p className="text-center text-2xl text-red-500">{error}</p>; 
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Mascotas en Adopción</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {pets.map((pet) => (
          <div key={pet.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{pet.name}</h2>
              <p className="text-gray-600 mb-4">{pet.species} - {pet.age} años</p>
              <p className="text-gray-700">{pet.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pets;
