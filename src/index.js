import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import * as firebase from 'firebase';
import 'firebase/firestore';
import firebase from "firebase/app"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6jKgsVXKmwETjCGKs5LGaW2AandKZHks",
  authDomain: "cart-87f9b.firebaseapp.com",
  projectId: "cart-87f9b",
  storageBucket: "cart-87f9b.appspot.com",
  messagingSenderId: "349838480665",
  appId: "1:349838480665:web:114634a8a6599522576188"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
