// DOM
const title = document.getElementById("title");
console.log(title);

const titulos = document.querySelector("h1");
console.log(titulos);

titulos.innerHTML = "Hooooola mi nuevo mundo ";

const tecla = document.createElement("div");
console.log(tecla);

tecla.innerHTML = "Esto lo puse con inner";

const texto = document.getElementById("description");
texto.innerHTML = "Cambios sobre la marcha";

console.log(texto);

// const items = document.getElementsByTagName("li");
// console.log(items);

// for (let i = 0; i < items.length; i++) {
//   if (i % 2 === 0) {
//     let element = items[i];
//     element.style.color = "red";
//   }
// }

const estilist = document.querySelector("div.row>ul.list-group");
console.log(estilist);

estilist.style.backgroundColor = "blue";

const pid = document.getElementById("pid");

const img = document.createElement("img");
img.setAttribute(
  "src",
  " https://firebasestorage.googleapis.com/v0/b/react-comision47195.appspot.com/o/charmander-1.webp?alt=media&token=19c038c9-753c-4f58-848d-58c298c2b2c0&_gl=1*1sjuefz*_ga*MTE5NzIwNTM0NC4xNjk2NDYzNDc5*_ga_CW55HF8NVT*MTY5NjYzODU4NC42LjEuMTY5NjYzODg5Ny40My4wLjA."
);

console.log(img);

pid.replaceWith(img);

const boton = document.getElementById("miBoton");

boton.addEventListener("click", () => {
  console.log("El usuario hizo click en el boton");
});
