window.addEventListener("resize",(e)=>{
  console.clear();
  console.log("***********Evento Resize********");
  console.log(window.innerHeight);
  console.log(window.innerWidth);
  console.log(window.outerHeight);
  console.log(window.outerWidth);
  console.log(e);
});

window.addEventListener("scroll",(e)=>{
  console.clear();
  console.log("***********Evento Scroll********");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
  
});

window.addEventListener("load",(e)=>{
  //console.clear();
  console.log("***********Evento Scroll********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);

});

//HAy un metodo que no trabaja con Window sino con Document
//Demora menos... porque no espera a cargar los css y las imagenes ni los scripts para empezar a funcionar.
//Por ejemplo las peticiones asincronas pausan el parse del dom...

document.addEventListener("DOMContentLoaded",(e)=>{
console.log("***********Evento DOMContentLoaded********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

const $botonAbrir=document.getElementById("abrir-ventana");
const $botonCerrar=document.getElementById("cerrar-ventana");
const $botonImprimir=document.getElementById("imprimir-ventana");
let ventana;

$botonAbrir.addEventListener("click",(e)=>{
  ventana=window.open("https://jonmircha.com/");
});

$botonCerrar.addEventListener("click",(e)=>{
  ventana.close();
});

$botonImprimir.addEventListener("click",(e)=>{
  window.print();
});
console.clear();
console.log("******** oBjeto URL (locatio)********");
console.log(location);