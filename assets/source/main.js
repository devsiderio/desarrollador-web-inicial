class Thumbnails {
  constructor(name, contActivo) {
    this.contThumbs = document.querySelector(`#${name}`);

    this.botones = document.querySelectorAll(`#${name} button`);
    this.highlighted = document.querySelector(`#${contActivo} `);
    this.botones.forEach((boton) => {
      boton.addEventListener("click", () => this.activarBoton(boton));
      boton.addEventListener("click", () => this.changeHighlight());
      boton.addEventListener("click", () => this.scrollIfOut(boton));
      boton.addEventListener("dragstart", function (event) {
        event.preventDefault();
      });
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

  scrollIfOut(boton) {
    // Obtengo la posicion y el ancho del contenedor
    let xContenedor = this.contThumbs.getBoundingClientRect().x;
    let widthContenedor = this.contThumbs.getBoundingClientRect().width;
    // Obtengo la posicion y el ancho del boton.
    let xBtn = boton.getBoundingClientRect().x;
    let widthBtn = boton.getBoundingClientRect().width;
    // Las posiciones obtenidas anteriormente son relativas a la ventana.
    // Por lo que para encontrar la posicion x del boton con respecto a su contenedor
    // tengo que restar estos valores
    let posBtn = xBtn - xContenedor;
    // Una ditancia arbitraria para scrollear, elegi 1.5 porque seria 1 boton y medio de scroll
    let dist = widthBtn * 1.5;

    if (posBtn + widthBtn > widthContenedor) {
      this.contThumbs.scrollBy(dist, 0);
    } else if (posBtn < 0) {
      this.contThumbs.scrollBy(-dist, 0);
    }
  }
}

new Thumbnails("thumbnails", "prod-activo");
