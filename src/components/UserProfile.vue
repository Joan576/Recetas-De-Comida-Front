<template>
  <div class="profile-page">
    <div class="profile-container">
      <h2>Perfil de Usuario</h2>

      <!-- Mostrar la imagen de perfil -->
      <div class="profile-image-container">
        <img :src="previewImageUrl || imageUrl || placeholderImage" alt="Imagen de perfil" class="profile-image" @click="triggerFileUpload" />
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
        <button type="button" @click="cancelChanges" style="margin-top: 10px;">Cancelar</button>

        <p v-if="successMessage" class="success">{{ successMessage }}</p>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { username, login } from '../AuthStore';

const form = ref({
  username: '',
  description: '',
  imagen_perfil: null,
});
const errorMessage = ref('');
const successMessage = ref('');
const imageUrl = ref(''); // URL de la imagen actual en la base de datos
const previewImageUrl = ref(''); // URL temporal para la imagen de vista previa
const userId = localStorage.getItem('userId');
const placeholderImage = '/avatar.png';

// Función para abrir el selector de archivos al hacer clic en la imagen
const triggerFileUpload = () => {
  document.getElementById("imagen_perfil").click();
};

// Función para manejar el cambio de archivo y mostrar vista previa
const onFileChange = (e) => {
  const file = e.target.files[0];
  if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
    const reader = new FileReader();
    reader.onload = () => {
      previewImageUrl.value = reader.result; // Actualiza la URL de vista previa
      form.value.imagen_perfil = reader.result; // Guarda la imagen en Base64
    };
    reader.onerror = (error) => {
      console.error("Error al leer el archivo:", error);
      errorMessage.value = 'Error al procesar la imagen';
    };
    reader.readAsDataURL(file);
  } else {
    errorMessage.value = 'Solo se permiten archivos JPEG o PNG';
  }
};

// Cargar datos del perfil al montar el componente
onMounted(async () => {
  try {
    const response = await fetch(`http://localhost:4000/api/profile/${userId}`);
    
    if (!response.ok) {
      throw new Error(`Error en la respuesta del servidor: ${response.statusText}`);
    }

    const profileData = await response.json();
    
    form.value.username = profileData.nombre_usuario || '';
    form.value.description = profileData.descripcion || '';
    imageUrl.value = profileData.imagen_perfil ? profileData.imagen_perfil : placeholderImage;
    previewImageUrl.value = imageUrl.value; // Establece la vista previa inicial en la imagen actual
    
  } catch (error) {
    console.error("Error al cargar el perfil:", error);
    errorMessage.value = 'Error al cargar el perfil. Por favor, intenta de nuevo más tarde.';
  }
});

// Función para guardar cambios
const handleUpdate = async () => {
  try {
    const response = await fetch(`http://localhost:4000/api/profile/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud al servidor');
    }

    await response.json();
    successMessage.value = 'Perfil actualizado con éxito';
    errorMessage.value = '';
    imageUrl.value = previewImageUrl.value; // Actualiza la imagen definitiva con la vista previa
    login({ username: form.value.username });
    username.value = form.value.username;
  } catch (error) {
    errorMessage.value = 'Error en el servidor: ' + error.message;
    successMessage.value = '';
  }
};

// Función para cancelar los cambios
const cancelChanges = () => {
  previewImageUrl.value = imageUrl.value; // Restablece la vista previa a la imagen guardada
  form.value.imagen_perfil = null; // Borra la imagen en base64 en el formulario para no enviarla
  errorMessage.value = '';
  successMessage.value = '';
};
</script>

<style scoped>
.profile-container {
  max-width: 500px;
  color: white;
  margin: 0px auto;
  padding: 20px;
  border: 1px;
  border-radius: 10px;
  background-color: #f9f9f9;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8); 
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 1);
}

.profile-page {
  background-image: url('https://images.pexels.com/photos/2773606/pexels-photo-2773606.jpeg');
  margin: 0;
  padding: 90px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: auto; /* Cambiar la altura para que ajuste automáticamente */
  min-height: 80vh; /* Mínima altura para pantallas más pequeñas */
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-bottom: 100px; /* Agrega un espacio debajo del contenido */
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
</style>
