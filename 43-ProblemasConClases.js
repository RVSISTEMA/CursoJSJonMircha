// 27) Programa una clase llamada Pelicula.

// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
//   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
//      7 restantes números.
//   - Valida que el título no rebase los 100 caracteres.
//   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.


class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarImdbId(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);

  };

  static get listaGeneros() {
    return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
  };

  static generosAceptados() {
    return console.info(`los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
  };
  // VALIDACIONES ELEMENTALES
  //=================================
  validarCadenaNoVacia(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} esta vacio`);
    if (typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado NO es cadena de texto`);
    return true;

  };

  validarLongitudCadena(propiedad, valor, longitud) {

    if (valor.length > longitud) {
      return console.error(`${propiedad} tiene mas de "${longitud}" caracteres`);
    }
    return true;
  };

  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if (typeof valor !== "number") return console.error(`${propiedad} "${valor}" no es un numero`);
    return true;

  };

  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if (!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado no es un arreglo`);
    if (valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`);
    for (let cadena of valor) {
      if (typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);
    };
    return true;

  }

  //VALIDACIONES DE PROPIEDADES
  validarImdbId(id) {
    if (this.validarCadenaNoVacia("IMDBid", id)) {

      if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
        return console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras -minusculas-, los 7 restantes numeros`);
      }

    }
  }
  validarEstreno(estreno) {
    if (this.validarNumero("Año de estreno", estreno));
    if (!(/^([0-9]){4}$/.test(estreno))) return console.error(`${propiedad} "${estreno}" no es valido, debe ser un numero de 4 digitos`)

    //if(parseInt(this.estreno)>999 && parseint(this.estreno) <9999){
    //  return console.error(`El año de estreno no es correcto`);
    //}
  };

  validarTitulo(titulo) {
    if (this.validarCadenaNoVacia("titulo", titulo));
    if (this.validarLongitudCadena("titulo", titulo, 100));
  };

  validarDirector(director) {
    if (this.validarCadenaNoVacia("Director", this.director));
    if (this.validarLongitudCadena("Director", this.director, 50));
  };

  validarPais(pais) {
    this.validarArreglo("Pais", pais);
  };

  validarGeneros(generos) {
    if (this.validarArreglo("Generos", generos)) {
      for (let genero of generos) {
        if(!Pelicula.listaGeneros.includes(genero)){
          console.log(`${genero} Incorrecto`);
          Pelicula.generosAceptados();
        };
      };
    };

  };
   validarCalificacion(calificacion) {
    if (this.validarNumero("Calificacion", calificacion));
    return (calificacion <0 || calificacion > 10)
      ? console.error(`La calificacion debe estar en un rango de 0 a 10`)
      : this.calificacion=calificacion.toFixed(1);
    //if(parseInt(this.estreno)>999 && parseint(this.estreno) <9999){
    //  return console.error(`El año de estreno no es correcto`);
    //}
  };

  fichaTecnica(){

    console.info(`Ficha Tecnica:\nTitulo:"${this.titulo}"\nDirector:"${this.director}"`)
  };
}


//PRUEBA DE CLASE
//===================================
console.log(Pelicula.generosAceptados());
const peli = new Pelicula({
  id: "aa1234567",
  titulo: "Hola",
  director: "Hola",
  estreno: 2020,
  pais: ["Argentina", "Francia"],
  generos: ["ComedyCime"],
  calificacion:1.79
})