// aprendemos metodos insert
//QUe insertan Elementos,HTML,y textos
//.insertAdjacentElement(position,el)= es mas o menos como el appendChild o el insertBefore
//.insertAdjacentHTML(position,html)=como el innerHTML
//.InsertAjacentText(position,text)=Es como un textContent

//Posiciones
//beforebegin(hermano anterior)Antes del cominenzo
//afterend(hermano Siguiente)Despues del Final
//afterbegin(primer hijo)Despues del Comienzo
//beforeend(ultimo hijo)Antes del Final

//creamos dos variables

//LEvantamos la clase .cards
const $cards=document.querySelector(".cards"),
    //Creamos un elemento figure
  $newCard=document.createElement("figure");
  

//Agregamos los atributos al elemento figure que creamos
$newCard.innerHTML=`
<img src="https://placeimg/200/200/any" alt="Any>
<ficaption>Any</ficaption>
`;

//Agregamos a la lista de clases del elemento, la  clase cards
$newCard.classList.add("card");
//Insertamos el elemento antes del primer elemento de la clase cards
$cards.insertAdjacentElement("beforebegin",$newCard)
//
//$cards.insertAdjacentElement("afterbegin",$newCard)
