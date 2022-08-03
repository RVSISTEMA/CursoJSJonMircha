
import hamburgerMenu from "./dom/menu_hamburguesa.js";
const d=document;
alert("Indexdom");
d.addEventListener("DOMContentLoaded",(e)=>{
  hamburgerMenu(".panel-btn",".panel",".menu a");
});
