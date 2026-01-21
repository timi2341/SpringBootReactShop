import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

// 👇 PUNE DATELE REALE AICI (doar pentru test)
const firebaseConfig = {
  apiKey: "AIzaSyBMHA86mPQ5HSrZYIgCIoPDdjprVGu39No",
  authDomain: "shop-chat-243e2.firebaseapp.com",
  projectId: "shop-chat-243e2",
  storageBucket: "shop-chat-243e2.firebasestorage.app",
  messagingSenderId: "14017507258",
  appId: "1:14017507258:web:ef5ed87e4842e641d8b783",
  measurementId: "G-23HVXSZES3"
};
const app = initializeApp(firebaseConfig);

// Păstrăm setarea pentru conexiune stabilă
export const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});

console.log("Firebase conectat la proiectul:", firebaseConfig.projectId);