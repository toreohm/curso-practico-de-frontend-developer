/*Desafío PLATZI: Hacer que al hacer click en los dots (puntitos) del componente de la clase12.html se muestre una imagen diferente */

const img = document.getElementById("imagen-principal");
const divProductInfo = document.getElementsByClassName("product-info")[0];
const dots = document.querySelector(".dots");
const dot1 = dots.children[0];
const dot2 = dots.children[1];
const dot3 = dots.children[2];

function cambiarImagen() {
  const listDots = [
    {dot: dot1, src: "../imagenes/bike.jpeg", alt: "Bike", precio: 35.00, titulo: "Bike", descripcion: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace."},

    {dot: dot2, src: "../imagenes/reloj.jpg", alt: "Reloj", precio: 100.00, titulo: "Reloj", descripcion: "Un reloj muy bonito de marca patito que te va a encantar. Bienvenido a la modernidad."},

    {dot: dot3, src: "../imagenes/ajedrez.jpeg", alt: "Ajedrez", precio: 20.00, titulo: "Chess", descripcion: "Tablero de ajedrez profesional de torneo; Practico, comodo y estuche incluido."}
  ];
  
  //Obtenemos los tres elementos <p> para cambiar la descripcion segun corresponda.
  const pList = Array.from(divProductInfo.children).filter(elem => elem.tagName.toLowerCase() === "p");

  //Quitamos el color verde de los puntitos  
  for(let dot of listDots) {
    if(dot.dot.classList.contains("dot-background-green")) {
      dot.dot.classList.remove("dot-background-green");
    }
  }
  //Identificamos al puntito que se le hace click, lo ponemos verdesito y le ponemos la imagen.
  for(let dot of listDots) {
    if(dot.dot.isSameNode(this)) {
      this.classList.add("dot-background-green");
      img.src = dot.src;
      img.alt = dot.alt;
      pList[0].innerHTML = `$${dot.precio}`;
      pList[1].innerHTML = dot.titulo;
      pList[2].innerHTML = dot.descripcion;
      break;
    }
  }  
}

dot1.addEventListener("click", cambiarImagen);
dot2.addEventListener("click", cambiarImagen);
dot3.addEventListener("click", cambiarImagen);