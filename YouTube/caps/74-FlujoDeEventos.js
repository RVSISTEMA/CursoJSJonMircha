const $divsEventos=document.querySelectorAll(".eventos-flujo div")

// Traemos el primer enlace dentro de eventos flujo que es todo la section donde estan als divs
const $linkEventos=document.querySelector(".eventos-flujo a");
console.log($divsEventos)

function flujoEventos(e){
  console.log(`Hola te saluda ${this.className} el click lo origino ${e.target.className}`);
  e.stopPropagation();
}

$divsEventos.forEach(div=>{
  //Fase de burbuja
  //div.addEventListener("click",flujoEventos,false);
  //Fase de captura
  //div.addEventListener("click",flujoEventos,true);
  div.addEventListener("click",flujoEventos)//{
  //   capture:false,
  //   once:true,
  // });

})

$linkEventos.addEventListener("click",()=>{
  alert(`Hola soy tu amigo y...`);
  //Esto saltes el evento por defecto relacionado al objeto en este caso el Hiperlink

  e.preventDefault();
  e.stopPropagation();
  

})