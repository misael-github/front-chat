import { Router } from "@vaadin/router"

export class Home extends HTMLElement{
    connectedCallBack(){
        this.render()
        const form = this.querySelector(".form")
        form.addEventListener("submit", (e) => {
          e.preventDefault
          const target = e.target as any
          console.log(target.nombre.value)
          Router.go("/chat")
        })
    }
    render(){
        this.innerHTML = `
        <form class= "form">
        <div>
        <label>Tu Nombre</label>
        </div>
        <input type= "text"/>
        <button>Comenzar</button>
        </form>
        `
    }
}customElements.define("home-page", Home)