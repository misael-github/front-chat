
const API_BASE_URL = "http://localhost:3000"
import {dataBase} from "./realTimedb"
import {map} from "lodash/map"


const state = {
  data: {
    nombre: "",
    messages: [],
  },
  listeners: [],
  init(){
    // Lugar de la db donde están todos los mensajes
    const chatRoomsRef = dataBase.ref("/chatrooms/general"); // Hacemos referencia a una parte de la db
    const currentState = this.getState()
          chatRoomsRef.on("value", (snapshot) => {
            // Escuchamos la referencia
           const messageFromServer = snapshot.val()
           const messagesList = map(messageFromServer.messages)
           currentState.message = messagesList
            this.setState(currentState)
           console.log(messagesList)
          });
     
  },
  getState() {
    return this.data;
  },
  setNombre(nombre: string) {
    const currentState = this.getState();
    currentState.nombre = nombre;
    this.setState(currentState);
  },
  pushMessage(message : string){
    const nombreQueGuardoEnElState = this.data.nombre
  fetch( API_BASE_URL + "/messages", {
    method:"post",
    headers:{
    "content-type":"application/json",
    },
    body: JSON.stringify({
      from:nombreQueGuardoEnElState,
      message: message
    })
  })
  },
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
    console.log("soy el state he cambiado", this.data);
  },
  suscribe(callback:(any) => any ){
   this.listeners.push(callback)
  }
};

export {state}