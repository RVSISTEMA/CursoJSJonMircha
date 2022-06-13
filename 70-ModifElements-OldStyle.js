//70 Modificando elemento a la forma antigua
  //El appendChild siempre inserta al final de body
  // pero hay otros metodos que permiten insertarlo al inicio o en el medio

  //Creamos las variables

  const $cards=document.querySelector(".cards"),
    $newCard=document.createElement("figure");

  //Hacemos de la forma sucia 
  $newCard.innerHTML=`
  <img src="https://placeimg.com/200/200/any" alt="Any"><figcaption>Any</figcaption>
  `;
  //POnemos al nuevo elemento como una clase card
  $newCard.classList.add("card");
  $cards.replaceChild($newCard,$cards.children[2]);
  $cards.insertBefore($newCard,$cards.firstElementChild)
  $cards.removeChild($cards.lastElementChild);
  //Clonamos una seccion entera de tarjetas
  //El true clona todo el contenido el false solo la estructura
  $cloneCards=$cards.cloneNode(true);
  //Ahora lo agregamos al final de documento
  document.body.appendChild($cloneCards);
  

