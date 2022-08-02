//55-Proxies:
//Es un mecanismo para crear un objeto basado en un objeto literal inicial
//Es como generar un a nueva instancia de una clase que obtiene ciertas caracteristicas
//PEro este copia un objeto literal dentro de la copia que se creo, quedan vinculados entre el objeto que te basas. 
//Creamos un objeto base
const persona={
  nombre:"",
  apellido:"",
  edad:0

}

//Creamos el handler que recibe un parametro que se llama set
const manejador={
  set(obj, prop,valor){
    // y vamos  hacer validaciones para no modificar la estructura del objeto base
    // ya que se corre el riesgo de que las propiedades modificadas del Proxy modifiquen la estructura del objeto base, por eso en el handler hay que evitar eso
    if(Object.keys(obj).indexOf(prop)===-1){
      return console.error(`La propiedad "${prop}" no existe en el objeto base persona`);

    }

    if(
      (prop==="nombre"||prop==="apellido") && 
    !(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor))
    ) {
      return console.error(`La propiedad "${prop}"solo acepta letras  y espacios en blanco`)
    }
    
    //al final llenamos el proxi con los datos enviados
    obj[prop]=valor;

  }
}

// a partir de este objeto creamos una nueva instancia del objeto proxi
// que va a recibir el objeto persona y un handler o manejador que es un objeto donde vamos a estar trabajando en este caso con validaciones
const jon = new Proxy(persona, manejador)
jon.nombre="jon";
jon.apellido="mircha";
jon.edad=53;


jon.twiter="@jonMircha";

console.log(jon);
console.log(persona);