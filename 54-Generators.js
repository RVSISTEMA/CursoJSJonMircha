//Sintaxis sencilla para generar iteradores.
// Es una funcion que nos permite trabajar de manera mas amgable con los iteradores

//el asrterisco indica que es un generador
function* iterable(){
  //en vez de return especial que detiene la funcion se usa yield
  //cuando detecta que se uso un next en un iterador
  //Funcionaria como un return en cascada cada vez que le llama 
  //a esta funcion con el next
  
  yield "hola";
  console.log ("Hola consola");
  yield "hola 2";
  console.log("Seguimos con mas instrucciones de nuestro codigo");
  yield"hola 3";
  yield "hola 4";

}

//No necesitamos usar el symbol
let iterador=iterable();
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

for(let y of iterador){
  console.log(y);
}

//Podemos guardar en un array los resultados de la funsion generadora

const arr = [...iterable()];
console.log(arr);


