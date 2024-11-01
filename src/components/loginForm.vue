<template>
    <div class="login-page">
      <div class="login-container">
        <h2>Iniciar Sesión</h2>
        <form @submit.prevent="handleSubmit">
          <div class="input-group">
            <label for="email" >Correo Electronico</label>
            <input type="email" v-model="email" required placeholder="Ingresa tu correo"> 
          </div>
  
          <div class="input-group">
            <label for="password">Contraseña</label>
            <input type="password" v-model="password" required placeholder="Ingresa tu contraseña" />
          </div>
          <a href="/register" style="margin-left: 9px;">¿No tienes cuenta? ¡Registrate!</a>
  
          <button type="submit" style="margin-left: 6px;">Iniciar Sesión</button>
  
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
          <p v-if="successMessage" class="success">{{ successMessage }}</p>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { login } from '../AuthStore'; 
  
  const email = ref('');
  const password = ref('');
  const errorMessage = ref('');
  const router = useRouter();
  
  const handleSubmit = async () => {
    try {
      // Enviar la solicitud de inicio de sesión al backend
      const response = await fetch('http://localhost:4000/api/usuarios/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: email.value,
    password: password.value,
  }),
});
      const data = await response.json();
  
      if (response.ok) {
        // Guarda el nombre de usuario en localStorage
        localStorage.setItem('userId', data.user.id); // Guarda el ID del usuario
        localStorage.setItem('user', JSON.stringify({ username: data.user.username }));
  
        // Llamar a la función login para actualizar el estado de inicio de sesión
        login({ userId: data.user.id, username: data.user.username }); // Actualiza el estado de inicio de sesión
  
        // Redirigir al usuario a la página de inicio si el login fue exitoso
        router.push('/feed'); // Asegúrate de que esta ruta esté definida en tu enrutador
      } else {
        errorMessage.value = data.message || 'Correo o contraseña incorrectos';
      }
    } catch (error) {
      errorMessage.value = 'Error al iniciar sesión, intenta nuevamente';
    }
  };
  </script>  


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  margin: 0; /* Asegúrate de que no haya márgenes */
}

.login-page {
  margin: 0;
  padding: 0;
  background-image: url('https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/01/02/surtido-de-tapas-espanolas.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  
}

.login-container {
  max-width: 400px;
  padding: 20px;
  border: 1px solid #000;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  background-color: #dedede;
  padding-left: 5px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.input-group {
  margin: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  text-align: left;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: block;
  margin: 0 auto;

}

button {
  margin-top: 15px;
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
  font-size: 14px;
}
</style>