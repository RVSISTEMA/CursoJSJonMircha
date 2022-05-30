//69-DOMTemplates
//Las etiquetas templates no se visualizan en la pagina
//Creo una variable que apunte a cards y luego un aque apunte al template

const $cards=document.querySelector(".cards"),
  //vamos a necesitar acceder al contenido de la template
  $template=document.getElementById("template-card").content,
  //preparamos la variable donde se va a ir guardando el fragmento
  $fragment=document.createDocumentFragment(),
  //Prellenamos un arreglo de objetos con los datos de  atributos que necesitamos llenar
  cardContent=[
    {
      title:"Tecnologia",
      img:"https://placeimg.com/200/200/tech",
    
    },

    {
      title:"Animales",
      img:"https://placeimg.com/200/200/animals",
    
    },

    {
      title:"Arquitectura",
      img:"https://placeimg.com/200/200/arch",
    
    },

    {
      title:"Gente",
      img:"https://placeimg.com/200/200/people",
    
    },

    {
      title:"Naturaleza",
      img:"https://placeimg.com/200/200/nature",
    
    },
   
  ];

  cardContent.forEach((el)=>{
    // en vez del caso anterior como ya tengo la etiqueta template con la plantilla tomo esa plantila y la relleno
    //y VOy navegando por la estructura del dom
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent=el.title;
    //Clonamos la estructura entera
    let $clone=document.importNode($template,true)
    //La agregamos al fragmento
    $fragment.appendChild($clone);
  });

  //Ahora metemos el fragmento en el dom una sola vez
  $cards.appendChild($fragment);

  


