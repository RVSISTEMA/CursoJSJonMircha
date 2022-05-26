//59-JSON
//Es una notacion ligera de intercambio de datos de Java Script
//Sirve para JScript y para NodeJS
//TIene dos metodosc

//JSON.parse
//Analiza una cadena y lo convierte en un objeto de JScript
console.log(JSON);
console.log(JSON.parse("{}"));
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("false"));
console.log(JSON.parse("18"));
console.log(JSON.parse("null"));
//Este va a dar error porque no puede analizarse o sea no es un token valido
//console.log(JSON.parse("Hola"));


//JSON.stringify
//Transforma en cadena de texto en un objeto valido para JScript
console.log(JSON.stringify({}));

