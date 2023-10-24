// Arrays

const frutas = ["manzana", "platano", "naranadja", "uva"];
console.log(frutas[3]);

// Tipo y cantidad

const data = ["Jose", 25, "Venezolano"];

console.log(data.length);

//el .length lo recorre y me dice cuantos datos hay en mi array dato

// utilizo los metodos de arrays de eliminacion y agregar datos o valores
const personas = [
  { nombre: "Gloria", edad: 28 },
  { nombre: "Doliana", edad: 29 },
  { nombre: "Greta", edad: 29 },
  { nombre: "Moreina", edad: 60 },
];

console.log(personas);
console.log(personas.length);

frutas.unshift("pera");
console.log(frutas);

frutas.pop();

frutas.shift();

//Utilizo el metodo de array .concat()
const preciosDeRemeras = [500, 1000, 350];
const preciosDeMedias = [50, 60, 700];

const precios = preciosDeRemeras.concat(preciosDeMedias);

console.log(precios);

// Utilizamos el metodo de arrays join('')
const elementos = ["Hola", " ", "mundo", "!"];

const concatenado = elementos.join(" + ");
console.log(concatenado);

let concatenados2 = " - ";
for (let elemento of elementos) {
  concatenados2 += elemento;
}

console.log(concatenados2);

// Slice : devuelve una porcion del array desde un rango definido

const animales = ["perro", "gato", "pato", "conejo", "caballo", "pez"];
console.log(animales.slice(2, 4));

// .sort() ordenar el array en caso de que sea con letras, lo hace alfabeticamente y en caso de que sea con numeros, doy el ejemplo a continuacion

const precio = [95, 70, 60, 4, 5, 10];

precio.sort((a, b) => a - b);

console.log(precio);

// Iterador : ForEach() : se limita a ejecutar la funcion que le pasemos por cada elemento del array( lo recorre);

const numeros = [3, 10, 5, 7, 8, 9];

numeros.forEach(function (numero) {
  console.log(numero * 2);
});

const numbers = [1, 5, 7, 8, 9];

const todosMayoresQueCero = numbers.every(function (number) {
  return number > 0;
});

console.log(todosMayoresQueCero);

const todosPares = numbers.every(function (number) {
  return number % 2 === 0;
});

console.log(todosPares);
