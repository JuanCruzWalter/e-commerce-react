// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFQVXfZdZTJ_FBIFKMVZTOqO6W5UjeN0U",
  authDomain: "e-commerce-coder-baac3.firebaseapp.com",
  projectId: "e-commerce-coder-baac3",
  storageBucket: "e-commerce-coder-baac3.appspot.com",
  messagingSenderId: "348051342722",
  appId: "1:348051342722:web:1f84164dcd848a99d1bb9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp =()=>{
    return app
}