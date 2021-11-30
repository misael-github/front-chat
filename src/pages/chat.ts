import {state} from "../../state"
type Message = {
    from: string,
    message:string
}
export class ChatPage extends HTMLElement{
    connectedCallBack(){
      state.suscribe(() => {
        const currentState = state.getState()
        this.messages = currentState.messages
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
        <div>
        <h1>Chat Page</h1>
        <div class="messages">
        ${this.messages.map(m => {
          return `<div class="message">${m.from}: ${m.message} </div>` 
        })
        .join("")}
        </div>
        <form class = "submit-message">
        <input type= "text" name="new-message"/>
        <button>Enviar</button>
        </form>
        </div>
        `
        this.addListeners()
    }
}customElements.define("chat-page", ChatPage)