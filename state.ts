const state = {
  data: {
    nombre: "",
    messages: [],
  },

  listeners: [],
  getState() {
    return this.data;
  },
  setNombre(nombre: string) {
    const currentState = this.getState();
    currentState.nombre = nombre;
    this.setState(currentState);
  },
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
    console.log("soy el state he cambiado", this.data);
  },
};
