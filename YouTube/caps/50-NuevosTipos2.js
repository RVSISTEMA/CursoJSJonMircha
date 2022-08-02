//Set es un tipo de datos que acepta solo un array de valores unicos
const set = new Set([1,2,3,4,4,true,false,true,{},{},"hola","HOLA"]);
console.log(set);
//Para saber el tamaño se usa size
console.log(set.size);

const set2 = new Set();
set2.add(1);
set2.add(3);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(false);

console.log(set2);
//Para saber el tamaño se usa size
console.log(set2.size);

console.log("recorriendo set");
for (item of set) {
  console.log(item);
}

console.log("Recorriendo set2");
set2.forEach(item=>console.log((item)));

//para refereciar por posicion hay que convertirlo en un array
let arr=Array.from(set);
console.log(arr);

//para borrar un elemento
set.delete(1);

console.log(set);


//para ver si existe un dato
console.log(set.has("hola"));

//para limpiar completo un set
set2.clear();
console.log(set2);






