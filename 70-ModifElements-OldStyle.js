//70 Modificando elemento a la forma antigua
  //El appendChild siempre inserta al final de body
  // pero hay otros metodos que permiten insertarlo al inicio o en el medio

  //Creaos las variables

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

  $cloneCards=$cards.cloneNode(true);
  document.body.appendChild($cloneCards);
  

