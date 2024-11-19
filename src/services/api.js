import axios from 'axios';

// Configura la URL base para tus solicitudes al backend
const api = axios.create({
  baseURL: 'http://localhost:4000/api', // Cambia a la URL correcta del backend
});

export default api;
