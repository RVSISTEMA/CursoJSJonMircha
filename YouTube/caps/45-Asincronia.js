/*Codigo Sincrono bloqueante */
(()=>{
  console.log("Codigo Sincrono");
  console.log("Inicio");

  function dos() {
    console.log("Dos");
  }
  function uno() {
    console.log("Uno");
    dos();
    console.log("Tres");
    
  }
  uno();
  console.log("Fin");

})();

/*Codigo Asincrono No bloqueante */

(()=>{
  console.log("Codigo Asincrono");
  console.log("Inicio");

  function dos(){
    setTimeout(function() {
      console.log("Dos");
      
    },1000)
  };

  function uno(){
    setTimeout(function(){
      console.log("Uno");

    },0);
    dos();
    console.log("Tres");
  }
  uno();
  console.log("Fin");
  
})();