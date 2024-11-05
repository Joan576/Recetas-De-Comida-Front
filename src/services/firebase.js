import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD6TZ2R20hsYQ31Tu_IrrTPkdcCS3XGTAk",
  authDomain: "recetas-comida.firebaseapp.com",
  projectId: "recetas-comida",
  storageBucket: "recetas-comida.appspot.com",
  messagingSenderId: "1048196723461",
  appId: "1:1048196723461:web:9d50ef704977fdd0d67d6",
  measurementId: "G-Z9YQ7DQYVK"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Función para subir una imagen y obtener la URL
export const uploadImage = async (file) => {
  const storageRef = ref(storage, 'profileImages/' + file.name); // Cambia la carpeta según necesites
  try {
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL; // Retorna la URL de descarga
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error; // Lanza el error para que sea manejado más adelante
  }
};


export { storage };
