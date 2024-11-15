import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyATuxMKr0ylQaruROcgf-Ap8651-IisVKk",
  authDomain: "novamarketapp.firebaseapp.com",
  projectId: "novamarketapp",
  storageBucket: "novamarketapp.appspot.com",
  messagingSenderId: "21433362214",
  appId: "1:21433362214:web:b66a900913c514be9643e7",
  measurementId: "G-6RDJ7G6MQE"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Función para subir una imagen y obtener la URL
export const uploadImage = async (file) => {
  const storageRef = ref(storage, 'recetas-comida-profile/' + file.name); // Cambia la carpeta según necesites
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
