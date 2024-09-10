import axios from 'axios';


const API_URL = 'http://localhost:8080/api/pets';

export const fetchAllPets = async (token) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,  
      },
    });
    return response.data;  
  } catch (error) {
    throw new Error('Error al obtener las mascotas');
  }
};
