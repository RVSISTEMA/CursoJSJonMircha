//52-WeakSet-WeakMap
//WeakSet Solo pueden almacenar erferencias debiles o sea las keys deben ser objetos
//Esto le permite al recolector de basura de nuestro navegador que algunas de las referencias se haya limpiado, las limpie y siva para mejora el rendimiento

// no podemos recorrer las claves ni los valores no sepueden usar los for
// no se pueden usar los metodos clear, solo con delete
// tampoco tienen la propiedad size
// no se pueden agregar los elementos todos juntos solo de a uno son el add

const ws=new WeakSet();

// como solo aceptan referencias debiles se deben envolver en objetos
let valor1={"valor1":1};
let valor2={"valor2":2};
let valor3={"valor3":3};
//Los valores solo se cargan uno por uno
ws.add(valor1);
ws.add(valor2);


console.log(ws);

console.log(ws.has(valor1));
console.log(ws.has(valor3));

//Emular un recolector de basura

// setInterval(() => {
//   console.log(ws)
// }, 1000);

// setTimeout(() => {
//   valor1=null;
//   valor2=null;
//   valor3=null;
// }, 6000);



//WeakMap

const wm=new WeakMap();
let llave1={};
let llave2={};
let llave3={};

wm.set(llave1,1);
wm.set(llave2,2);
wm.set(llave3,3);

console.log(wm);

console.log(wm.has(llave1));
console.log(wm.get(llave2));
