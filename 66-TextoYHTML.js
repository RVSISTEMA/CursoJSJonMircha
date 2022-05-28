const $whatIsDOM=document.getElementById("que-es");

let text=`
<p>El Modelo de Objetos del Documento (<b><i>DOM - Documento bjecto Model</i></b>) es un API para documentos HTML y XML.
</p>
<p>
Este provee una representacion estructural del documento, permitiendo modificar su contenido u presentacion visual mediante codigo JS
</p>
<p>
  <mark> El DOM no es parte de la especificacion Java Scripto, es una API para los navegadores.</mark>
</p>

`;
//Innertext no es un estandard fue creado para IE
//No reconoce las etiquetas html las interpreta como texto
$whatIsDOM.innerText=text;
//textContent es la propieda estandard quita tabulaciones pro no interpreta como HTML
$whatIsDOM.textContent=text;

$whatIsDOM.innerHTML=text;

//Para reemplazar los elementos externos a una etiqueta
$whatIsDOM.outerHTML=text;

