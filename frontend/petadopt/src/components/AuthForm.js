import React, { useState } from 'react';
import { authenticate, register } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ mode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      if (mode === 'login') {
        const authToken = await authenticate(email, password);
        localStorage.setItem('jwt', authToken); // Guardar el token en localStorage
        setMessage('Inicio de sesión exitoso');
        navigate('/'); // Redirigir al home
      } else if (mode === 'register') {
        const successMessage = await register(email, password);
        setMessage(successMessage);
        navigate('/login'); // Redirigir al login después del registro
      }
    } catch (error) {
      setError('Hubo un error, por favor intenta nuevamente.');
      console.error('Error en la autenticación:', error);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-md mx-auto mt-20 mb-20 p-4 bg-white shadow-md rounded">
        <h2 className="text-2xl font-bold mb-4">
          {mode === 'login' ? 'Iniciar Sesión' : 'Registrarse'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {message && <p className="text-green-500 text-sm mb-4">{message}</p>}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 disabled:bg-gray-400"
          >
            {mode === 'login' ? 'Ingresar' : 'Registrarse'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
