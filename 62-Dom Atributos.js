//Vamos a aprender a colsultar atributos y establecer sus valores
console.log(document.documentElement.lang);
//Comparando Query Selector vs GEt Atributte
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

//para establecer nuevos valores para los atributos
document.documentElement.lang="es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang","es-MX");
console.log(document.documentElement.lang);

//Ahora para ahorar trabajo vamos a guardar en variables los elementos del dom
//Guardamos en enlace

//se puede usar const o let
// se usa const para verificar que el tipo de objeto no cambie
const $linkDOM = document.querySelector(".link-dom");
// Sigue siendo el mismo elemento del dom
// se usa pesos para declarar variables que se guardan elementos del DOM
//Es una buena practica
//Esto abre en un apagina nueva
$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href","https://redtube.com");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//Data-Attributes
console.log($linkDOM.getAttribute("data-description"));
//todos estos data atributes JScript los guarda en una coleccion, por lo que se puede usar el punto llamando a la coleccion dataset
console.log($linkDOM.dataset);

$linkDOM.setAttribute("data-description","Modelo de Objeto del Documento");
$linkDOM.dataset.description="Suscribete a mi canal y comparte";




