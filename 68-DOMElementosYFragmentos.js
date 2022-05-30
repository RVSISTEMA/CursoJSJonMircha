const $figure=document.createElement("figure"),
  $img=document.createElement("img"),
  $figcaption=document.createElement("figcaption"),
  $figcaptionText=document.createTextNode("Animals"),
  $cards=document.querySelector(".cards"),
  $figure2=document.createElement("figure");

$img.setAttribute("src","https:/placeimg.com/200/200/animals");
$img.setAttribute("alt","Animals");

$figcaption.appendChild($figcaptionText);


$figure.appendChild($img);
$figure.appendChild($figcaption);
$figure.classList.add("card");

$cards.appendChild($figure);

//Otra forma mas rapiad es con innerhtml
$figure2.innerHTML=`
<img src="https:/placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`
$figure2.classList.add("card");
$cards.appendChild($figure2);

//Pero si necesitamos crear varios nodos

const estaciones=["Primavera","Verano","Otoño","Invierno"],
 $ul=document.createElement("ul");

 document.write(`<h3>Estaciones del año</h3>`)
//Creamos los list items de la ul

document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li=document.createElement("li");
  $li.textContent=el;
  $ul.appendChild($li);

});

const continentes=["America","Europa","Asia","Africa","Oceania"],
$ul2=document.createElement("ul");
document.body.appendChild($ul2);
//Se reserva espacion agregando cadena vacia al innerhtml
$ul2.innerHTML="";

continentes.forEach((el)=>{
  $ul2.innerHTML=`${$ul2.innerHTML}<li>${el}</li>`
});

//Esto consume recursos

//para eso es mejor crear un fragmento del dom y una vez cargadps todos los elementos hacemso una sola insercion al dom

const meses=["Enero","Febrero","Marzo","Abril","Mayo"],
  $ul3=document.createElement("ul");
  $fragment=document.createDocumentFragment();

meses.forEach((el)=>{
  const $li=document.createElement("li");
  $li.textContent=el;
  $fragment.appendChild($li);
}
);

$ul3.appendChild($fragment)
document.body.appendChild($ul3);






