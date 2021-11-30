import firebase from "firebase";

const app = firebase.initializeApp({
    apiKey: "wpDRBblv1t1VkhIOpuriJpD7FXFCMDUWUbAkJm83",
    databaseURL: "https://apx-dwf-m6-68acf-default-rtdb.firebaseio.com",
    authDomain: "apx-dwf-m6-68acf.firebaseapp.com",
  });
  
const dataBase = firebase.database(); // Conexión a db

export {dataBase}