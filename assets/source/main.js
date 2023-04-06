class LasBicis {
  constructor(name, contActivo) {
    this.contThumbs = document.querySelector(`#${name}`);

    this.botones = document.querySelectorAll(`#${name} button`);
    this.highlighted = document.querySelector(`#${contActivo} `);
    this.botones.forEach((boton) => {
      boton.addEventListener("click", () => this.activarBoton(boton));
      boton.addEventListener("click", () => this.changeHighlight());
      boton.addEventListener("click", () => this.scrollIfOut(boton));
      boton.addEventListener("click", () => this.changeDescription());
      boton.addEventListener("dragstart", function (event) {
        event.preventDefault();
      });
    });
    // Hacemos una llamada inicial para que la descripcion no esté vacia y le damos el id de la primera imagen
    // que va a aparecer en nuestro catalogo
    this.idActivo = "ancheer";
    this.changeDescription();
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

  changeDescription() {
    // traemos todos los contenedores de la lista de la descripcion
    const nombreProd = document.querySelector("#nombre-del-prod");
    const marcaProd = document.querySelector("#marca-del-prod");
    const wattsProd = document.querySelector("#watts-del-prod");
    const velMaxProd = document.querySelector("#vel-del-prod");
    const rangoBateriaProd = document.querySelector("#ran-del-prod");
    const infoProd = document.querySelector("#info-del-prod");
    // modificamos el texto
    nombreProd.innerText = bicis[this.idActivo].nombre;
    marcaProd.innerText = bicis[this.idActivo].marca;
    wattsProd.innerText = bicis[this.idActivo].potencia;
    velMaxProd.innerText = `${bicis[this.idActivo].velocidadMax} km/h`;
    rangoBateriaProd.innerText = `${bicis[this.idActivo].rangoMaxBateria} km`;
    infoProd.innerText = bicis[this.idActivo].descripcion;
  }
}

new LasBicis("thumbnails", "prod-activo");
