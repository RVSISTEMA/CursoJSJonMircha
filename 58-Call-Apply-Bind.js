//58-Call-Apply-Bind
//Son metodos que entrega java paa preservar la referencia de un scope (alcance) en particular y utilizarlo en alguna invocacion o codigo
// estos metodos son muy importantes para entender como se encofan los alcances

//Nos creamos una variable
this.lugar="Contexto GLobal";

function saludar(saludo, aQUien){
  console.log(`${saludo} ${aQUien} desde el ${this.lugar}`)
}

saludar();

//ahora creamos un objeto
const obj={
  lugar:"contexto Objeto"

};

//En vez de ejecutar saludar directamente usamos la llamada

saludar.call(obj, "Hola","Jon");
// Si va nulo en vez de objeto pasa al windows
saludar.call(null, "Hola","Jon");
// Si va this usa el alcence de donde esta la llamada
saludar.call(this, "Hola","Jon");


//O usamos el metodo apply o aplicar
saludar.apply(obj,["Adios","Mircha"])
// Si va nulo en vez de objeto pasa al windows
saludar.call(null,["Adios","MIrcha"]);
// Si va this usa el alcence de donde esta la llamada
saludar.call(this, ["Adios","Mircha"]);


//Bind hace un enlace
//Creamos un objeto persona
const persona={
  nombre:"Jon",
  saludar:function(){
    console.log(`Hola ${this.nombre}`);
  }
}

persona.saludar();

// creamos otra persona
const otraPersona={
  saludar:persona.saludar
}

otraPersona.saludar;

//usamos el conexto de persona
otraPersona.saludar.bind(persona);

//usamos el contexto del windows
otraPersona.saludar.bind(this);



