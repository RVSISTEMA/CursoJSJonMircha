// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const numeroAleatorio=(min,max)=>Math.round(Math.random()*(max-min)+min);

const evaluarCapicua=(strNum)=>{
  if(parseInt(strNum)>=0) console.log("No Ingresaste un numero");
  if(strNum.lenght()=1) return parseInt(strNum);
  let strNumRev=strNum.split().reverse().join();
  if (strNum===strNumRev) console.log ("En numero "+ strNum +" es capicúa")
};

let limiteInferior = parseInt(window.prompt("Ingrese el limite inferior para generar aleatorio:"));
let limiteSuperior = parseInt(window.prompt("Ingrese el limite Superior para generar aleatorio:"));
console.info(numeroAleatorio(limiteInferior,limiteSuperior));
let numeroCapicua = window.prompt("Ingrese el numero para evaluar:");
