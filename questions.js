var languagesArrayCreation = function () {
// Ce qui sert à faire le tableau sont les ([])
  return languages = ['Html', 'CSS', 'Java', 'PHP'];
}

var numbersArrayCreation = function () {

    return numbers = [0, 1, 2, 3, 4, 5] ;
}

// La méthode splice() modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments
var ElementReplacement = function (languages) {
  languages.splice (2, 1, 'Javascript');
  return languages;
}
//  La méthode push() sert à ajouter des éléments à la fin du tableau
var AddElementToLanguagesArray = function (languages) {
  languages.push ('Ruby', 'Python');
  return languages;
}
 // La méthode unshift() sert à ajouter des éléments en début de tableau
var AddElementToNumbersArray = function (numbers) {
  numbers.unshift(-2, -1);
  return numbers;
}
// La méthode shift() sert à supprimer le premier élément du tableau
var deleteArrayFirstElement = function (languages) {
  languages.shift();
  return languages;
}
// La méthode pop() sert à supprimer le dernier élément du tableau
var deleteArrayLastElement = function (languages) {
  languages.pop();
  return languages;
}
// La méthode split() par cette utilisation me sert à passer d'une chaine de caractère(string) à un tableau (array)
var stringToArray = function (socialMediaInString) {
  var socialMedia = socialMediaInString.split(',');
  return socialMedia;
}
// La méthode join() sert à passer d'un tableau à une chaine de caractère
var arrayToString = function (languages) {
  var languagesInString = languages.join(',');
  return languagesInString;
}
// La méthode sort() sert à trier le tableau.
var arraySort = function (socialMedia) {
  return socialMedia.sort();
}
// La méthode reverse() sert à inverser l'ordre des éléments.
var arrayInvert = function (languages){
  return languages.reverse();
}
