//   setTimeout() Asincronismo , vamos a practicar con setTimeOut(), simulando la llamada a la Api
let inicio = "Hola";

console.log(inicio);

let evento = setTimeout(() => {
  console.log("Hola reina");
}, 5000);

console.log(evento);

function mostrarMensaje() {
  document.getElementById("mensaje").innerHTML =
    " Gracias por visitar mi sitio web";
}
console.log(mostrarMensaje);
setTimeout(mostrarMensaje, 5000);

// Otra funcion nativa de JS es SetInterval(),
