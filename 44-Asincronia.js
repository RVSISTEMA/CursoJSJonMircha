console.log("inicio");
// setTimeout(()=>{
//   console.log("Ejecutandoun setTimeout, esto se ejecuta una sola vez");

// },3000);

// setInterval(() => {
//   console.log("Ejecutando set interval, esto se ejecuta cada cierto intervalo de tiempo ")
// }, 3000);

// let temporizador = setTimeout(() => {
//   console.log(new Date().toLocaleTimeString());
//   }, 1000);

//   clearTimeout(temporizador);
//   console.log("despues del clearTimeOut");

let temporizador = setInterval(() => {
  console.log(new Date().toLocaleDateString());
}, 1000);
  
clearInterval(temporizador);
console.log("Despues del clearInterval");


