function alumbrarCard(id) {
  const card = document.getElementById("card-" + id);
  card.classList.add("card-shadow");
  setTimeout(() => {
    card.classList.remove("card-shadow");
  }, 2000);
}
function cambiarColorAAA() {
  const bigIconos = document.querySelectorAll(".big-icon-color");
  bigIconos.forEach((icono) => icono.classList.toggle("big-icon-color-AAA"));

  const iconos = document.querySelectorAll(".icon-color");
  iconos.forEach((icono) => icono.classList.toggle("icon-color-AAA"));

  const dotIconos = document.querySelectorAll(".dot-icon-color");
  dotIconos.forEach((icono) => icono.classList.toggle("dot-icon-color-AAA"));

  const botones = document.querySelectorAll(".boton-estilo");
  botones.forEach((boton) => boton.classList.toggle("boton-estilo-AAA"));

  const colorBotones = document.querySelectorAll(".boton-color");
  colorBotones.forEach((boton) => boton.classList.toggle("boton-color-AAA"));

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => card.classList.toggle("card-AAA"));
}
