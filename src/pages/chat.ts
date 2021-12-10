import {state} from "../state"
type Message = {
    from: string,
    message:string
}
export class ChatPage extends HTMLElement{
  connectedCallback(){
      state.suscribe(() => {
        const currentState = state.getState()
        this.messages = currentState.messages // Pisamos el state con el nuevo valor
        this.render()
      })
        this.render()
      
    }
    messages:Message[] = []
    addListeners(){
      const form = this.querySelector(".submit-message")
      form.addEventListener("submit", (e) => {
        e.preventDefault
        const target = e.target as any
        state.pushMessage(target["new-message"].value)
      })
    }
    render(){
        this.innerHTML = `
        <h1>Chatroom</h1>
        <div class="container__content-mesages">
        <div class="messages">
        ${this.messages.map(m => {
          return `<div class="message">${m.from}: ${m.message} </div>` 
        })
        .join("")}
        </div>
        <form class="submit-message form">
        <input class="input" type= "text" name="new-message" placeholder="Mensaje"/>
        <button class="button">Enviar</button>
        </form>
        </div>
        `
        this.addListeners()
    }
}customElements.define("chat-page", ChatPage)