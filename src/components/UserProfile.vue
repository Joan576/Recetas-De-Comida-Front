<template>
  <div class="profile-page">
    <div class="profile-container">
      <h2>Perfil de Usuario</h2>

      <!-- Mostrar la imagen de perfil -->
      <div class="profile-image-container">
        <img :src="imageUrl || placeholderImage" alt="Imagen de perfil" class="profile-image" @click="triggerFileUpload" />
      </div>

      <form @submit.prevent="handleUpdate">
        <input
          type="file"
          id="imagen_perfil"
          ref="fileInput"
          @change="onFileChange"
          accept="image/jpeg, image/png"
          style="display: none;"
        />

        <div class="input-group">
          <label for="username">Nombre de Usuario:</label>
          <input type="text" id="username" v-model="form.username" required />
        </div>

        <div class="input-group">
          <label for="description">Descripción:</label>
          <textarea
            id="description"
            v-model="form.description"
            placeholder="Añade una breve descripción de ti..."
          ></textarea>
        </div>

        <button type="submit">Guardar Cambios</button>

        <p v-if="successMessage" class="success">{{ successMessage }}</p>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { username, login } from '../AuthStore'; // Importa username y login
import { storage } from "../services/firebase"; // Importa storage desde firebase.js
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage"; // Importa funciones de Firebase Storage

const form = ref({
  username: '',
  description: '',
  imagen_perfil: null,
});
const errorMessage = ref('');
const successMessage = ref('');
const imageUrl = ref(''); // URL de la imagen de perfil
const userId = localStorage.getItem('userId'); // Recupera el userId del almacenamiento local

// Aquí defines el placeholderImage como ruta para la imagen por defecto
const placeholderImage = '/avatar.png'; // Asegúrate de que esta ruta sea correcta

// Función para abrir el selector de archivos al hacer clic en la imagen
const triggerFileUpload = () => {
  document.getElementById("imagen_perfil").click();
};

// Función para manejar el cambio de archivo
const onFileChange = async (e) => {
  const file = e.target.files[0];
  if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
    try {
      // Llama a la función para subir la imagen y obtener la URL
      const uploadedImageUrl = await uploadProfileImage(file);
      if (uploadedImageUrl) {
        imageUrl.value = uploadedImageUrl;
        form.value.imagen_perfil = uploadedImageUrl; // Guarda la URL en el formulario
      }
    } catch (error) {
      errorMessage.value = 'Error al subir la imagen';
    }
  } else {
    errorMessage.value = 'Solo se permiten archivos JPEG o PNG';
  }
};

// Función para subir la imagen de perfil a Firebase Storage
const uploadProfileImage = async (file) => {
  try {
    // Crea una referencia de almacenamiento única para la imagen
    const storageReference = storageRef(storage, `profile_images/${file.name}-${Date.now()}`);
    
    // Sube la imagen a Firebase Storage
    const snapshot = await uploadBytes(storageReference, file);
    
    // Obtén la URL de descarga de la imagen
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error("Error al subir la imagen:", error);
    throw error;
  }
};

// Cargar datos del perfil al montar el componente
onMounted(async () => {
  try {
    const response = await fetch(`http://localhost:4000/api/profile/${userId}`);
    const profileData = await response.json(); // Cambié 'data' a 'profileData'
    form.value.username = profileData.nombre_usuario; // Usa 'profileData'
    form.value.description = profileData.descripcion || '';
    imageUrl.value = profileData.imagen_perfil ? profileData.imagen_perfil : placeholderImage;
  } catch (error) {
    errorMessage.value = 'Error al cargar el perfil';
  }
});

const handleUpdate = async () => {
  try {
    const response = await fetch(`http://localhost:4000/api/profile/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value), // Enviar el objeto form como JSON
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud al servidor');
    }

    await response.json(); // Se eliminó la asignación a 'data' que no se usaba
    successMessage.value = 'Perfil actualizado con éxito';
    errorMessage.value = '';

    // Actualiza el nombre de usuario global
    login({ username: form.value.username });
    username.value = form.value.username; // Actualiza también el username
  } catch (error) {
    errorMessage.value = 'Error en el servidor: ' + error.message;
    successMessage.value = '';
  }
};
</script>

<style scoped>
.profile-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
  width: 100%;
  background-color: rgba(222, 222, 222, 0.9);
}

.profile-page {
  background-image: url('https://images.pexels.com/photos/2773606/pexels-photo-2773606.jpeg');
  margin: 0;
  padding: 100px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
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
