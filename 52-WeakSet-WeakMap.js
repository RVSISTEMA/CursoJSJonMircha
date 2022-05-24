//52-WeakSet-WeakMap
//WeakSet Solo pueden almacenar erferencias debiles o sea las keys deben ser objetos
//Esto le permite al recolector de basura de nuestro navegador que algunas de las referencias se haya limpiado, las limpie y siva para mejora el rendimiento

// no podemos recorrer las claves ni los valores no sepueden usar los for
// no se pueden usar los metodos clear, solo con delete
// tampoco tienen la propiedad size
// no se pueden agregar los elementos todos juntos solo de a uno son el add

const ws=new WeakSet();


let valor1={"valor1":1};
let valor2={"valor2":2};
let valor3={"valor3":3};

ws.add(valor1);
ws.add(valor2);
ws.add(valor3);

console.log(ws);



//WeakMap