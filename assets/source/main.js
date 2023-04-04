class Thumbnails {
  constructor(name, contActivo) {
    this.botones = document.querySelectorAll(`#${name} button`);
    this.highlighted = document.querySelector(`#${contActivo} `);
    this.botones.forEach((boton) => {
      boton.addEventListener("click", () => this.activarBoton(boton));
      boton.addEventListener("click", () => this.changeHighlight());
    });
  }

  activarBoton(boton) {
    this.botones.forEach((btn) => btn.classList.remove("seleccionado"));
    boton.classList.add("seleccionado");
    this.idActivo = boton.id;
  }

  changeHighlight() {
    let srcActivo = document.querySelector(`#${this.idActivo} img`).src;
    this.highlighted.src = srcActivo;
  }
}

new Thumbnails("thumbs", "prod-activo");
