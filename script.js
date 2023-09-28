// alert("hola este es mi JavaScript");

//let nombre = "Marta";

let contenidoTitulo = "Minicarbono";

let titulo = document.querySelector (".logo .fuente");
titulo.innerHTML = contenidoTitulo


let textoTitulo = titulo.innerText;
console.log(textoTitulo)


if (textoTitulo == "Minicarbono") {
    titulo.innerHTML = "Otro"
} else {
    console.log("No se cumple")
}