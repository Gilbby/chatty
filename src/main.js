import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBzY6_TNsUHBAIxZZE-RtTelaRCZyHSrQA",
  authDomain: "chatty-72acc.firebaseapp.com",
  projectId: "chatty-72acc",
  storageBucket: "chatty-72acc.appspot.com",
  messagingSenderId: "978836230279",
  appId: "1:978836230279:web:56e30d7afd91741a73a822",
  measurementId: "G-PF4TG22MFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore();
// accesable from any where in the app
window.db = db;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
