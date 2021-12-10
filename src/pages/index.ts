import { Router } from "@vaadin/router"
import { state } from "../state"

class Home extends HTMLElement {
    // connectedCallback es el cb q tenemos que usar en los custom-elements para escribir de forma segura
    connectedCallback() {
      //aca seteamos al html
      this.render();
      //como ya ejecutamos el render ya tengo todo montado por eso
      //buscamos el formulario del render
      const form = this.querySelector(".form");
      //escuchamos el evento submit
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        // aca le decimos a ts que trate a e.targe (que es el form )como un dato any
        const target = e.target as any;
        console.log(target.nombre.value);
        // le decimos al state que tenemos un dato nuevo, los componentes no manejan datos se los informan al state
        // guardamos el nombre que nos pasaron en el form
        state.setNombre(target.nombre.value);
        // la f go() de router nos redirecciona a otra página
        // encontes cuando nos envíen el nombre en el form se va a redirigir al chat
        Router.go("/chat");
      });
    }
    render() {
      this.innerHTML = `
      <my-text class="title"  variant="title">Bienvenido/a</my-text>
      <section class="section">
        <form class="form">
          <div class="container__text-field">
            <my-text class="label" variant="subtitle">Nombre</my-text>
            <input class="input" type="text" name="nombre"/>
          </div>
          <button class="button"><my-text variant="subtitle">Comenzar</my-text></button>
        </form>
      </section>
      `;
    }
  }
  
  customElements.define("home-page", Home);