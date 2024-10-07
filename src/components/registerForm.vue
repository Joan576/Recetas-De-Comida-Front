<template> <!-- Utiliza un slot, si tu MainLayout tiene uno -->
    <div class="register-page">
      <div class="register-container">
        <h2>Registro</h2>
        <form @submit.prevent="handleSubmit">
          <div>
            <label for="username">Nombre de Usuario:</label>
            <div style="text-align: center;">
              <input v-model="form.username" type="text" id="username" required />
            </div>
          </div>
          <div>
            <label for="email">Correo Electrónico:</label>
            <div style="text-align: center;">
              <input v-model="form.email" type="email" id="email" required />
            </div>
          </div>
          <div>
            <label for="password">Contraseña:</label>
            <div style="text-align: center;">
              <input v-model="form.password" type="password" id="password" required />
            </div>
          </div>
          <div>
            <label for="confirmPassword">Confirmar Contraseña:</label>
            <div style="text-align: center;">
              <input v-model="form.confirmPassword" type="password" id="confirmPassword" required />
            </div>
          </div>
          <div v-if="error" class="error">{{ error }}</div>
          <div v-if="success" class="success">{{ success }}</div>
          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
</template>



<script setup>
import { ref } from 'vue';

const form = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
});

const error = ref('');
const success = ref('');

const handleSubmit = () => {
  if (form.value.password !== form.value.confirmPassword) {
    error.value = 'Las contraseñas no coinciden';
    success.value = '';
  } else {
    error.value = '';
    success.value = 'Registro exitoso';
    // Aquí iría la lógica para el registro de usuario
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

.register-page {
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

.register-container {
  max-width: 400px;
  padding: 20px;
  border: 1px solid #000;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  background-color: #dedede;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.input-group {
  margin: 15px;
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
