// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import auth from "@react-native-firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDy_cr1GahdUih6FZ8XDTx_6J8MEAebgiI",
  authDomain: "makemyroute-database.firebaseapp.com",
  databaseURL:
    "https://makemyroute-database-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "makemyroute-database",
  storageBucket: "makemyroute-database.appspot.com",
  messagingSenderId: "51113518834",
  appId: "1:51113518834:web:e190853e1b8a32b68c126b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
const authReciever = auth();

export { authReciever };
