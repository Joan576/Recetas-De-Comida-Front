import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD6TZ2R20hsYQ31Tu_IrrTPkdcCS3XGTAk",
  authDomain: "recetas-comida.firebaseapp.com",
  projectId: "recetas-comida",
  storageBucket: "recetas-comida.appspot.com",
  messagingSenderId: "1048196723461",
  appId: "1:1048196723461:web:9d50ef704977fdd0d67d6c",
  measurementId: "G-Z9YQ7DQYVK"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
