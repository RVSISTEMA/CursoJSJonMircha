//MAPS

// los maps son una coleccion de datos relacionados entre si

const mapa=new Map();
// Hay dos formas de agregar valores
mapa.set("nombre","Jon");
mapa.set("apellido","Mircha");
mapa.set("edad",35);

console.log(mapa);
//para saber la cantidad de elementos
console.log(mapa.size)
//para averiguar si existe la llave(key)
console.log(mapa.has("nombre"))
//Para obtener el valor de una llave (key)
console.log(mapa.get("nombre"));
//Para sobreescribir el valor de una llave
mapa.set("nombre","Marcos");
console.log(mapa.get("nombre"));
// para eliminar elementos de un mapa
mapa.delete("apellido");
console.log(mapa);
//para recorrer un mapa se puede usar un for of
for(let[key,value] of mapa){
  console.log(key,value);
};
//Ojo... los mapas son objetos que nos permiten tener una llave valor
//permiten cualquier tipo de dato en la clave... no se usa para nada.
mapa.set(19,"19");
mapa.set(false,"Falso");
mapa.set({},{});
console.log(mapa);

//Sirven para algun catalogo o algo asi

//Otra forma de llenar un mapa es:

const mapa2=new Map([
  ["nombre","Ruben"],
  [null,"nulo"]
]);

console.log(mapa2);

//Si queremos separar llaves de valores
const llavesMapa2=[...mapa2.keys()];
const valoresMapa2=[...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);
