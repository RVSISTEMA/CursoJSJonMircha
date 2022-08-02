//56-Propiedades Dinamicas
//Compute properties
//Necesitamos crear propieades al vuelo
//Es un mecanismo nuevo


let aleatorio = Math.round(Math.random()*100+5);

const objUsuarios={
  propiedad:"valor",
  [`id_${aleatorio}`]:"valor aleatorio"


};
console.log(objUsuarios);
//Probamos creando u narreglo de usuarios
const usuarios=["Yo", "Tu", "El", "Nosotros", "Vosotros", "Ellos"]

usuarios.forEach((usuario,index)=>objUsuarios[`id_${index}`]=usuario);
console.log(objUsuarios);

