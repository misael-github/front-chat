//    Front (Web) del chat

import "./pages/index"
import "./pages/chat"
import "./router"
import firebase from "firebase";
const API_BASE_URL = "http://localhost:3000"

const app = firebase.initializeApp({
  apiKey: "wpDRBblv1t1VkhIOpuriJpD7FXFCMDUWUbAkJm83",
  databaseURL: "https://apx-dwf-m6-68acf-default-rtdb.firebaseio.com",
  authDomain: "apx-dwf-m6-68acf.firebaseapp.com",
});

const dataBase = firebase.database(); // Conexión a db

function conectarChatroom() {
  fetch(API_BASE_URL + "/chatroom", {
    method: "post",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const chatRoomsRef = dataBase.ref("/chatrooms/" + data.id); // Hacemos referencia a una parte de la db
      chatRoomsRef.on("value", (snapshot) => {
        // Escuchamos la referencia
        const valor = snapshot.val();
        document.querySelector(".root").innerHTML = JSON.stringify(valor);
        document.querySelector(".id").innerHTML = data.id

      });
    });
}

function main() {
  const button = document.querySelector(".conectar");
  conectarChatroom()
}
main()