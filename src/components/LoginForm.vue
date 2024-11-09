<template>
  <div class="login-page">
    <div class="login-container">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="handleSubmit">
        <div class="input-group">
          <label for="email">Correo Electrónico</label>
          <input type="email" v-model="email" required placeholder="Ingresa tu correo">
        </div>

        <div class="input-group">
          <label for="password">Contraseña</label>
          <input type="password" v-model="password" required placeholder="Ingresa tu contraseña" />
        </div>
        <a href="/register" style="margin-left: 9px;">¿No tienes cuenta? ¡Regístrate!</a>

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
const successMessage = ref(''); // Agregado para evitar errores
const router = useRouter();

const handleSubmit = async () => {
  try {
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
      localStorage.setItem('userId', data.user.id);
      localStorage.setItem('user', JSON.stringify({ username: data.user.username }));

      // Verificar si login es una función válida
      if (typeof login === 'function') {
        login({ userId: data.user.id, username: data.user.username });
      } else {
        console.error('login no es una función válida.');
      }

      successMessage.value = 'Inicio de sesión exitoso';
      router.push('/feed');
    } else {
      errorMessage.value = data.message || 'Correo o contraseña incorrectos';
    }
  } catch (error) {
    errorMessage.value = 'Error al iniciar sesión, intenta nuevamente';
  }
};
</script>

<style scoped>
/* Estilos permanecen sin cambios */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  margin: 0;
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
}

.login-container {
  max-width: 400px;
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
  width: 100%;
  padding-left: 5px;
  background-color: rgba(0, 0, 0, 0.8); 
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 1);
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
  border: 1.7px solid #000000;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
}

button {
  margin-top: 15px;
  width: 100%;
  padding: 10px;
  background-color: #a80000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #a80000c9;
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

a {
  color: rgb(172, 0, 0);
}
</style>
