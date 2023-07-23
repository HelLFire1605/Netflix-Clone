import { initializeApp } from "firebase/app";
import { getAuth ,createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCbgA4NSTntSALhdjJLQL0D0v6Us0zqq-A",
  authDomain: "netflix-clone-4d2e4.firebaseapp.com",
  projectId: "netflix-clone-4d2e4",
  storageBucket: "netflix-clone-4d2e4.appspot.com",
  messagingSenderId: "489245602200",
  appId: "1:489245602200:web:4a69517201cd1437be7bed",
  measurementId: "G-VCB6S0JMQX",
});
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth,createUserWithEmailAndPassword ,signInWithEmailAndPassword};
export default db;
