//Un Symbol es un objeto primitivo
// genera un identificados unico de ese objeto
// mantiene nombres de propiedades privados
//Evita las colisiones de propiedades en los objetos.

//Ej.
let id0=Symbol("id");
let id1=Symbol("id");

console.log(id0===id1);

//Hay que crearlas con constantes
const NOMBRE =Symbol("nombre");
const SALUDAR=Symbol("saludar");

const persona ={
  [NOMBRE]:"Jon"
}

console.log(persona);

persona.NOMBRE="Jonathan Mircha"
persona.EDAD=35;
console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);

persona[SALUDAR]=function () {
  console.log("Hola");
  
};

console.log(persona);
persona[SALUDAR]();

for (let propiedad in persona){
  console.log(propiedad,persona[propiedad]);

}

console.log(Object.getOwnPropertySymbols(persona));
