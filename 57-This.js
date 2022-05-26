console.log(this)
this.nombre="Contexto GLobal";

console.log(this.nombre);

function imprimir(){
  console.log(this.nombre);

};

imprimir();

const obj={
  nombre:"Contexto Objeto",
  imprimir:function(){
    console.log (this.nombre);
  }
};

obj.imprimir();

const obj2={
  nombre:"contexto obj2",
  imprimir:imprimir
};
//Usa la guncion del contexto de windows pero la ejecuta dentro del objeto2
obj.imprimir();

const obj3={
  nombre:"contexto obj3",
  imprimir:()=>{
    console.log(this.nombre);

  }
}

//la arrow function no maneja el scope del objeto sino que del contexto en el que s eecuentra el objeto. PO reso no se recomienda usar arrow dentro de la definiciosn de un objeto porque no respeta scope.

obj3.imprimir();

function Persona(nombre){
  this.nombre=nombre;
  //return console.log(this.nombre);
  return function(){
    console.log(this.nombre)
  }
}

let jon=new Persona("jon");

jon();



