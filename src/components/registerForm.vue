<template>
  <div class="register-container">
    <h2>Registro</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">Nombre de Usuario:</label>
        <div style="text-align: center;"> <!-- Contenedor adicional -->
          <input v-model="form.username" type="text" id="username" required />
        </div>
      </div>

      <div>
        <label for="email">Correo Electrónico:</label>
        <div style="text-align: center;"> <!-- Contenedor adicional -->
          <input v-model="form.email" type="email" id="email" required />
        </div>
      </div>

      <div>
        <label for="password">Contraseña:</label>
        <div style="text-align: center;"> <!-- Contenedor adicional -->
          <input v-model="form.password" type="password" id="password" required />
        </div>
      </div>

      <div>
        <label for="confirmPassword">Confirmar Contraseña:</label>
        <div style="text-align: center;"> <!-- Contenedor adicional -->
          <input v-model="form.confirmPassword" type="password" id="confirmPassword" required />
        </div>
      </div>


      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="success" class="success">{{ success }}</div> <!-- Mensaje de éxito -->

      <button type="submit">Registrar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const form = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
});

const error = ref('');
const success = ref(''); // Variable para el mensaje de éxito

const handleSubmit = async () => {
  // Validar que las contraseñas coincidan
  if (form.value.password !== form.value.confirmPassword) {
    error.value = 'Las contraseñas no coinciden!';
    success.value = ''; // Limpiar mensaje de éxito
    return;
  }
  
  // Limpiar mensajes antes de enviar
  error.value = '';
  success.value = '';

  try {
    // Hacer la petición POST al backend
    const response = await axios.post('http://localhost:4000/usuarios', {
      username: form.value.username,
      email: form.value.email,
      password: form.value.password,
    });

    // Manejar la respuesta exitosa
    success.value = response.data.message; // Mostrar mensaje de éxito
    form.value.username = ''; // Limpiar el formulario
    form.value.email = '';
    form.value.password = '';
    form.value.confirmPassword = '';
  } catch (err) {
    // Manejar errores, como problemas con el servidor
    console.error('Error registering user:', err);
    if (err.response && err.response.data && err.response.data.message) {
      error.value = err.response.data.message;
    } else {
      error.value = 'Hubo un error con el registro. Intenta de nuevo.';
    }
  }
};
</script>

<style>
.register-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: rgb(226, 226, 226);
}

body {
  margin: 0;
  padding: 0;
  background-image: url('https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/01/02/surtido-de-tapas-espanolas.jpeg'); /* Cambia esto a la ruta de tu imagen */
  background-size: cover; /* Asegura que la imagen cubra toda la página */
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  height: 100vh; /* Asegura que el body cubra toda la altura de la ventana */
}


h2 {
  text-align: center;
  margin-bottom: 20px;
}

.input-group {
  margin: 15px;
}

label {
  display: block; /* Hace que la etiqueta ocupe toda la línea */
  margin-bottom: 5px; /* Espacio entre la etiqueta y el input */
  font-weight: bold; /* Hacer el texto más destacado */
  text-align: left; /* Alinear etiquetas a la izquierda */
}

form div {
  margin-bottom: 15px;
}

input {
  width: 100%; /* Input ocupa el 100% */
  max-width: 380px; /* Ajusta el ancho máximo si es necesario */
  padding: 10px; /* Espacio interno en los inputs */
  border: 1px solid #ccc; /* Borde del input */
  border-radius: 5px; /* Bordes redondeados */
  display: block; /* Asegura que el input se comporte como bloque */
  margin: 0 auto; /* Centra el input */
}


input:focus {
  border-color: #007BFF;
  outline: none;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  margin-top: 10px;
  font-size: 14px;
}

.success {
  color: green;
  margin-top: 10px;
  font-size: 14px; /* Estilo para el mensaje de éxito */
}
</style>
