// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1IkDToHzSBYvWQ9wiE1vqtfXSgQpNnUY",
  authDomain: "vite-contact-17df8.firebaseapp.com",
  projectId: "vite-contact-17df8",
  storageBucket: "vite-contact-17df8.appspot.com",
  messagingSenderId: "193949780568",
  appId: "1:193949780568:web:0bc3226818a90f8392182d"
};

// Initialize Firebase  
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


export default firebaseConfig

// SO BASICALLY THIS CODE SNIPPET MEANS- THAT WE ARE CREATING AN INSTANCE OF THE FIREBASE APP and
// we have created a firebase app and connected it to the database created in firebase Cloudbase.