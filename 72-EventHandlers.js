function holaMundo(){
  alert("Hola Mundo");
  console.log(event);

};

function saludar(nombre="Desconocido/a"){
  alert(`Hola ${nombre}`);
}

const $eventoSemantico=document.getElementById("evento-semantico");
const $eventoRemover=document.getElementById("evento-remover");

$eventoSemantico.onclick=function(e){
  alert("Hola mundo - EventHandler semantico");
  console.log(e);

}

const $eventoMultiple=document.getElementById("evento-multiple");
//El event.listener es una manera de ejecutar funciones en cascada 
$eventoMultiple.addEventListener("click",holaMundo);
$eventoMultiple.addEventListener("click",(e)=>{
  alert("Hola mundo, manejador de eventos multiples");
  console.log(e);
  console.log(e.type);
  console.log(e.target);

});

$eventoMultiple.addEventListener("click",()=>saludar("Pedro"));



const removerDblClick=(e)=>{
 alert(`Removiendo eventos de tipo ${e.type}`);
 console.log(e);
  $eventoRemover.removeEventListener("dblclick",removerDblClick);
  $eventoRemover.disabled=true; 
};

$eventoRemover.addEventListener("dblclick",removerDblClick);