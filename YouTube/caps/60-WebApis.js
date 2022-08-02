//60-WebApis
//INterfaz de programacion de aplicacion
//Es aquella serie de ojetos y mecanismos que tiene JScript para interactuar con el Navegador
//El DOM es una interfaz estandarizada para manipular codogo HTML
console.log(window);
console.log(document);

let texto ="Hola, soy tu amigo y docente digital..."

const hablar=(texto)=> speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto);
