export const createAdopter = async (adopterData) => {
    const jwt = localStorage.getItem('jwt'); // Obtener el JWT del almacenamiento local
    try {
      const response = await fetch('http://localhost:8080/api/adopter/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwt}`, // Agregar el JWT en el header Authorization
        },
        body: JSON.stringify(adopterData),
      });
  
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
  
      const data = await response.json(); // Obtener los datos de la respuesta
      return data; // Devolver los datos al componente que lo llama
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      throw error; // Propagar el error para que lo maneje el componente
    }
  };
  