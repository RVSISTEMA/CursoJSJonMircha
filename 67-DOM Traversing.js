//es una serie de propiedade que nos da el API del DOM para recorrerlo elemento tomadno como referencia un nodo
//Todos estos metodos son para los ELEMENTOS
$cards=document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
//Hermanos mellizos
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
//El ancestro.
console.log($cards.children[3].closest("section"));