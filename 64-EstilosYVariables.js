//

const $linkDOM=document.querySelector(".link-dom");
console.log(document);
//Esto muestras todas las propiesdad y solo los valores cambiados
console.log($linkDOM.style);

console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);

//Esto muestra todas las propiedad ccs con todos sus valores inclusive los que estan por defecto
console.log(window.getComputedStyle($linkDOM));
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

//MOdifiquemos algunas propiedades
$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display","block");
$linkDOM.style.width="50%";
$linkDOM.style.textAlign="center";
$linkDOM.style.marginLeft="auto";
$linkDOM.style.marginRight="auto";
$linkDOM.style.padding="1rem";
$linkDOM.style.borderRadius=".5rem";


