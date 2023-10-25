//   setTimeout() Asincronismo , vamos a practicar con setTimeOut(), simulando la llamada a la Api
// let inicio = "Hola";

// console.log(inicio);

// let evento = setTimeout(() => {
//   console.log("Hola reina");
// }, 5000);

// console.log(evento);

// function mostrarMensaje() {
//   document.getElementById("mensaje").innerHTML =
//     " Gracias por visitar mi sitio web";
// }
// console.log(mostrarMensaje);
// setTimeout(mostrarMensaje, 5000);

// Otra funcion nativa de JS es SetInterval(),
// se usa console.warn () y lo veremos en amarillo en la consola, como alertando algo
// setInterval(() => {
//   console.warn(
//     "ejecutamos un setInterval, esto se ejecuta infiinitamente cada cierto tiempo que yo voy a determinar"
//   );
// }, 3000);

// Usamos un setInterval para mostrar cada tanto la fecha en este caso, la fecha usamos new date().to...

// let temporizador = setInterval(() => {
//   console.log(new Date().toLocaleDateString());
// }, 3000);

// clearTimeout(temporizador);

////////******  CONTADOR, REINICIA Y SE DETIENE ESTA BUENO! */

// let contador = 0;
// let intervalId;

// function actualizarContador() {
//   contador++;
//   document.getElementById("contador").innerHTML = "Contador:" + contador;
// }

// intervalId = setInterval(actualizarContador, 1000);

// function detenerContador() {
//   clearInterval(intervalId);
// }

// function reiniciarContador() {
//   contador = 0;
//   document.getElementById("contador").innerHTML = "+' Contador:" + contador;
//   clearInterval(intervalId);
//   intervalId = setInterval(actualizarContador, 1000);
// }

// COMO MANEJAMOS LAS PROMESAS QUE SON ASINCRONICAS??//

// function esperar() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hola mundo"), 4000);
//   });
// }

// esperar().then((res) => console.log(res));

// console.log("1");
// console.log(esperar());
// console.log("3");

/* PROMESAS*/

function mostrarMensaje(mensaje) {
  document.getElementById("mensajePromesa").innerHTML = mensaje;
}

function obtenerNumeroAleatorio() {
  return new Promise((resolve, reject) => {
    const numero = Math.floor(Math.random() * 10) + 1;
    setTimeout(() => {
      if (numero > 5) {
        resolve(numero);
      } else {
        reject("El número es menor o igual a 5");
      }
    }, 2000);
  });
}

obtenerNumeroAleatorio(9)
  .then((numero) => {
    mostrarMensaje(`El número aleatorio generado es ${numero}`);
  })
  .catch((error) => {
    mostrarMensaje(`Error: ${error}`);
  });

// .finally(() => {
//   mostrarMensaje("La promesa se ha completado");
// });

console.log(obtenerNumeroAleatorio);
