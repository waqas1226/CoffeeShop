import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHBTTbGi3dTInodIGYe8eIgJhgW431ilw",
  authDomain: "sports-shop-a0ea7.firebaseapp.com",
  databaseURL: "https://sports-shop-a0ea7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sports-shop-a0ea7",
  storageBucket: "sports-shop-a0ea7.appspot.com",
  messagingSenderId: "540137950637",
  appId: "1:540137950637:web:2f466c41ef029532f5a524"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const registerUser = (email, password) => {
  const userCredential =  createUserWithEmailAndPassword(auth, email, password);
      return userCredential
};

export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = () => {
  return signOut(auth);
};

export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    throw error;
  }
};