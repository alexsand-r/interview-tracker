// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ⬇️ Встав сюди свій firebaseConfig
const firebaseConfig = {
  apiKey: "AIzaSyAEG8MPpPUTHtYgE90nO2qYwHN3BUlJEnc",
  authDomain: "interview-tracker-9705d.firebaseapp.com",
  projectId: "interview-tracker-9705d",
  storageBucket: "interview-tracker-9705d.firebasestorage.app",
  messagingSenderId: "733417456572",
  appId: "1:733417456572:web:ef1692094a2759d8bc21b9",
};

// Ініціалізуємо Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export { auth, provider };

// apiKey: "YOUR_API_KEY",
// authDomain: "YOUR_AUTH_DOMAIN",
// projectId: "YOUR_PROJECT_ID",
// storageBucket: "YOUR_STORAGE_BUCKET",
// messagingSenderId: "YOUR_MESSAGING_ID",
// appId: "YOUR_APP_ID",

// apiKey: "AIzaSyAEG8MPpPUTHtYgE90nO2qYwHN3BUlJEnc",
// authDomain: "interview-tracker-9705d.firebaseapp.com",
// projectId: "interview-tracker-9705d",
// storageBucket: "interview-tracker-9705d.firebasestorage.app",
// messagingSenderId: "733417456572",
// appId: "1:733417456572:web:ef1692094a2759d8bc21b9",
