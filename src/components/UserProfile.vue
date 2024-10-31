<template>
  <div class="profile-page">
    <h2>Perfil de Usuario</h2>

    <!-- Mostrar la imagen de perfil -->
    <div class="profile-image-container">
      <img :src="imageUrl || placeholderImage" alt="Imagen de perfil" class="profile-image" @click="triggerFileUpload" />
    </div>

    <form @submit.prevent="handleUpdate">
      <input type="file" id="imagen_perfil" ref="fileInput" @change="onFileChange" accept="image/jpeg, image/png" style="display: none;" />

      <div class="input-group">
        <label for="username">Nombre de Usuario:</label>
        <input type="text" id="username" v-model="form.username" required />
      </div>

      <div class="input-group">
        <label for="description">Descripción:</label>
        <textarea id="description" v-model="form.description" placeholder="Añade una breve descripción de ti..."></textarea>
      </div>

      <button type="submit">Guardar Cambios</button>

      <p v-if="successMessage" class="success">{{ successMessage }}</p>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const form = ref({
  username: '',
  description: '',
  imagen_perfil: null,
});
const errorMessage = ref('');
const successMessage = ref('');
const imageUrl = ref(''); // URL de la imagen de perfil

// Aquí defines el placeholderImage como ruta para la imagen por defecto
const placeholderImage = '/Mono.jpeg'; // Asegúrate de que esta ruta sea correcta

// Función para abrir el selector de archivos al hacer clic en la imagen
const triggerFileUpload = () => {
  document.getElementById("imagen_perfil").click();
};

// Función para manejar el cambio de archivo
const onFileChange = (e) => {
  const file = e.target.files[0];
  if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
    form.value.imagen_perfil = file;
    imageUrl.value = URL.createObjectURL(file); // Previsualizar la imagen cargada
  } else {
    errorMessage.value = 'Solo se permiten archivos JPEG o PNG';
  }
};

// Cargar datos del perfil al montar el componente
onMounted(async () => {
  try {
    const response = await fetch(`http://localhost:4000/api/profile/1`);
    const data = await response.json();
    form.value.username = data.nombre_usuario;
    form.value.description = data.descripcion || '';
    // Usa una URL completa para imagen_perfil
    imageUrl.value = data.imagen_perfil ? `http://localhost:4000${data.imagen_perfil}` : placeholderImage;
    console.log("URL de la imagen de perfil:", imageUrl.value); // Verifica en la consola
  } catch (error) {
    errorMessage.value = 'Error al cargar el perfil';
  }
});


const handleUpdate = async () => {
  const formData = new FormData();
  formData.append('username', form.value.username);
  formData.append('description', form.value.description);
  if (form.value.imagen_perfil) {
    formData.append('imagen_perfil', form.value.imagen_perfil);
  }

  try {
    const response = await fetch(`http://localhost:4000/api/profile/1`, {
      method: 'PUT',
      body: formData,
    });
    const data = await response.json();
    if (response.ok) {
      successMessage.value = 'Perfil actualizado con éxito';
      errorMessage.value = '';
    } else {
      errorMessage.value = data.message || 'Error al actualizar el perfil';
      successMessage.value = '';
    }
  } catch (error) {
    errorMessage.value = 'Error en el servidor: ' + error.message;
    successMessage.value = '';
  }
};
</script>



<style scoped>
.profile-page {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  text-align: center;
}

.profile-image-container {
  margin-bottom: 20px;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  cursor: pointer;
}

h2 {
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
textarea {
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
  font-size: 14px;
}

.success {
  color: green;
  margin-top: 10px;
  font-size: 14px;
}
</style>
