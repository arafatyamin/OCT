import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBHsapdgTvEMV-dDw2-bn46_K3m-BadFYg",
  authDomain: "oct-chat.firebaseapp.com",
  projectId: "oct-chat",
  storageBucket: "oct-chat.appspot.com",
  messagingSenderId: "748695155265",
  appId: "1:748695155265:web:70595923620694d12accc0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();