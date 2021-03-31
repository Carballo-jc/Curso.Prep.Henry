// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí:
  return Object.entries(objeto);
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí:

  var objReturn = {};
  for (let a in string) {
    // if (objReturn[string[a]] === undefined) {
    //   objReturn[string[a]] = 1;
    // } else {
    //   objReturn[string[a]] += 1;
    // }
    !objReturn[string[a]]
      ? (objReturn[string[a]] = 1)
      : (objReturn[string[a]] += 1);
  }
  return objReturn;
}

function capToFront(string) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  //diferentes formas de resolverlo
  var parteMinuscula = "";
  var parteMayuscula = "";
  for (var i = 0; i < string.length; i++) {
    string[i].toUpperCase() === string[i]
      ? (parteMayuscula += string[i])
      : (parteMinuscula += string[i]);

    //  if( string[i].toUpperCase() === string[i]){
    //        parteMayuscula += string[i]
    //  }else{
    //     parteMinuscula += string[i]
    //  }
  }
  return parteMayuscula + parteMinuscula;
  //   for (let a in s) {
  //     if (esMayuscula(string[a])) {
  //       parteMayuscula += string[a];
  //     } else {
  //       parteMinuscula += string[a];
  //     }
  //   }
  //   function esMayuscula(letra) {
  //     return letra === letra.toUpperCase();
  //   }

  //   return parteMayuscula + parteMinuscula;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var strArray = str.split(" ");
  var strRevese = strArray.map((item) => item.split("").reverse().join(""));
  return strRevese.join(" ");
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var num = numero.toString();
  for (let i = 0; i < num.length / 2; i++) {
    if (num[i] !== num[num.length - 1 - i]) {
      return "No es capicua";
    }
  }
  return "Es capicua";
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var newString = "";
  for (let i = 0; i < cadena.length; i++) {
    if (!["a", "b", "c"].includes(cadena[i])) {
      newString += cadena[i];
    }
  }
  return newString;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  for (let i = 0; i < arr.length; i++) {
    var temp = arr[i];
    var j = i - 1;
    while (j >= 0 && temp.length < arr[j].length) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var inter = [];
  for (let i = 0; i < arreglo1.length; i++) {
    if (arreglo2.includes(arreglo1[i])) {
      inter.push(arreglo1[i]);
    }
  }
  return inter;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
