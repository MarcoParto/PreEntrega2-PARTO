import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsmhhUwrsfBIqo3F0T-KC-_3UyE23YIks",
  authDomain: "otakuheaven-90ab2.firebaseapp.com",
  projectId: "otakuheaven-90ab2",
  storageBucket: "otakuheaven-90ab2.appspot.com",
  messagingSenderId: "366908860546",
  appId: "1:366908860546:web:bdd797791ff66a3cc8ac9b"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)