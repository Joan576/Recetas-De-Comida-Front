<template>
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

        <!-- Checkbox para aceptar los términos y condiciones -->
        <div class="terms">
          <input type="checkbox" id="terms" v-model="form.acceptTerms" />
          <label for="terms">
            Acepto los <a href="#">términos y condiciones</a>
          </label>
        </div>

        <div v-if="error" class="error">{{ error }}</div>
        <div v-if="success" class="success">{{ success }}</div>

        <!-- Botón de registrar que se deshabilita si no se aceptan los términos -->
        <button type="submit" :disabled="!form.acceptTerms">Registrar</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; 

const form = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false, 
});
const error = ref('');
const success = ref('');

const router = useRouter(); 

const handleSubmit = async () => {
  if (form.value.password !== form.value.confirmPassword) {
    error.value = 'Las contraseñas no coinciden';
    success.value = '';
  } else if (!form.value.acceptTerms) {
    error.value = 'Debes aceptar los términos y condiciones';
    success.value = '';
  } else {
    error.value = '';
    
    const usuarioData = {
      username: form.value.username,
      email: form.value.email,
      password: form.value.password, // Envía la contraseña en texto plano
    };

    try {
      const response = await fetch('http://localhost:4000/api/usuarios/register', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuarioData),
      });

      const data = await response.json();

      if (response.ok) {
        success.value = '¡Registro exitoso! Redirigiendo a la página de login...';
        error.value = '';

        setTimeout(() => {
          router.push('/login');
        }, 1500);
      } else {
        error.value = data.message || 'Error al registrar el usuario';
        success.value = '';
      }
    } catch (err) {
      error.value = 'Error en el servidor: ' + err.message;
      success.value = '';
    }
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
  margin: 0;
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
  background-color: rgba(222, 222, 222, 0.8); /* Ajuste de transparencia */
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

.terms {
  display: flex;
  align-items: center;
  margin: 15px 0;
}

.terms input[type="checkbox"] {
  margin-right: 5px; /* Reduce la distancia entre el checkbox y el texto */
  margin-left: 0; /* Asegura que el checkbox esté alineado a la izquierda */
  padding: 0; /* Elimina cualquier padding en el checkbox */
}

.terms label {
  margin: 0; /* Elimina cualquier margen en el texto */
  white-space: nowrap; /* Evita que el texto salte a otra línea */
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

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
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