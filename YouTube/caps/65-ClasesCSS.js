const $card=document.querySelector(".card");
//console.log(document.documentElement)
console.log($card);
console.log($card.classList);
console.log($card.className);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.remove("rotate-45");
$card.classList.toggle("rotate-45");

//para reemplazar una clase
$card.classList.replace("rotate-45","rotate-135");
$card.classList.add("opacity-80","sepia");



