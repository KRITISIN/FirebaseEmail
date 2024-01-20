import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyC3uaZnvx8RGsxk0KEYb785ITQvub2-tXg",
  authDomain: "myproject-52aad.firebaseapp.com",
  projectId: "myproject-52aad",
  storageBucket: "myproject-52aad.appspot.com",
  messagingSenderId: "86402005515",
  appId: "1:86402005515:web:812716e6d1b8bf4325e50e",
  measurementId: "G-QRK1NSMM39"
};




const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)