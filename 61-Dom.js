//
console.log("************Elementos del documento******************")
//Si yo quisiera obtener la cabeza del DOM
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
//Colecciones
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
//Para mostrar lo que tenemos seleccionado algo usamos el metodo:
console.log(document.getSelection().toString());
//para escribir algo 
document.write("<h2>Hola mundo</h2>");
// Se carga hasa el final del body
console.clear

// A nosotros nos va a importar trabajar con nodos del tipo elemento y del tipo texto
// vamos a ver como captura elementos de html y cargalos en variables de JScript

console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
//este si
console.log(document.getElementById("menu"));

//Estos fueron reemplazados por dos metodos

console.log(document.querySelector("#menu")); //elige por Id pero es mas lento
console.log(document.querySelector(".card")); //elige por clase
console.log(document.querySelector("a")); //elige  enlaces pero uno por vez
console.log(document.querySelectorAll("a")); //elige  enlaces todos

//Para usar un for each
document.querySelectorAll("a").forEach((el)=>console.log(el));


console.log(document.querySelectorAll(".card")[1]); //elige por clase
console.log(document.querySelectorAll("#menu.li")); //elige por clase













