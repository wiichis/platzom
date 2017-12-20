"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {
  var translation = str;

  // Si la palabra termina con "ar", se le quitan esas dos letras
  if (str.toLowerCase().endsWith("ar")) {
    translation = str.slice(0, -2);
  }

<<<<<<< HEAD
  // Si la palabra inicia con Z, se le aÃ±ade "pe" al final.
=======
  // Si la palabra inicia con Z, se le añade "pe" al final.
>>>>>>> 95959bf9948eb6259ddf6164ffcfba2a640c8b98
  if (str.toLowerCase().startsWith("z")) {
    translation += "pe";
  }

<<<<<<< HEAD
  // Si la palabra traducida tiene 10 o mÃ¡s letras,
  // se debe partir en dos por la mitad y unir con un guiÃ³n medio
=======
  // Si la palabra traducida tiene 10 o más letras,
  // se debe partir en dos por la mitad y unir con un guión medio
>>>>>>> 95959bf9948eb6259ddf6164ffcfba2a640c8b98
  var length = translation.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = firstHalf + "-" + secondHalf;
    // translation = [firstHalf, secondHalf].join('-')
  }

  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }

    return translation;
  }

  function reverse(str) {
    return str.split('').reverse().join('');
  }

<<<<<<< HEAD
  // Por Ãºltimo, si la palabra original es un palÃ­ndromo,
  // ninguna regla anterior cuenta y se devuelve la misma palabra pero
  // intercalando letras mayÃºsculas y minÃºsculas
=======
  // Por último, si la palabra original es un palíndromo,
  // ninguna regla anterior cuenta y se devuelve la misma palabra pero
  // intercalando letras mayúsculas y minúsculas
>>>>>>> 95959bf9948eb6259ddf6164ffcfba2a640c8b98
  if (str == reverse(str)) {
    return minMay(str);
  }

  return translation;
}