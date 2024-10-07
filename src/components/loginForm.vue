<template>
    <div class="login-page">
      <div class="login-container">
        <h2>Iniciar Sesión</h2>
        <form @submit.prevent="handleSubmit">
          <div class="input-group">
            <label for="email">Correo Electronico</label>
            <input type="email" v-model="email" required placeholder="Ingresa tu correo"> 
          </div>
  
          <div class="input-group">
            <label for="password">Contraseña</label>
            <input type="password" v-model="password" required placeholder="Ingresa tu contraseña" />
          </div>
  
          <button type="submit">Iniciar Sesión</button>
  
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
      const response = await fetch('http://localhost:4000/login', {
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
        localStorage.setItem('user', JSON.stringify({ username: data.user.username }));
  
        // Llamar a la función login para actualizar el estado de inicio de sesión
        login({ username: data.user.username }); // Actualiza el estado de inicio de sesión
  
        // Redirigir al usuario a la página de inicio si el login fue exitoso
        router.push('/'); // Asegúrate de que esta ruta esté definida en tu enrutador
      } else {
        errorMessage.value = data.message || 'Correo o contraseña incorrectos';
      }
    } catch (error) {
      errorMessage.value = 'Error al iniciar sesión, intenta nuevamente';
    }
  };
  </script>  


<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
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
}
</style>