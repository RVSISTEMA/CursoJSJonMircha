//53-Iterables-Iterators
//Los tipos de estructuras de datos iterables tienen una interfaz iterator
//Ej: Strings, arrays, maps, sets, elementos del DOM

//const iterable =[1,2,3,4,5];
//const iterable =new Set([1,2,3,4,4,4,5]);

//asi se accede al iterador
const iterador=iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);

//Para recorrer los elementos se usa un metodo especial llamado next

// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

let next=iterador.next();

while(!next.done){
  console.log (next.value);
  next = iterador.next();

}


