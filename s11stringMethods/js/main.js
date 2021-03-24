/*
    var phrase = "La mejor forma de predecir el futuro es creándolo"
    1- saber la cantidad de palabras
    2- saber la cantidad de "a"
    3- crear una nueva frase usando sólo los caracteres que esten en posiciones nones
        "amjrf"
    4- crear una nueva frase usando sólo los caracteres que esten en posiciones pares

    1.- Mostrar la misma frase en snake_case
    2.- Mostrar la misma frase en kebab-case
    3.- Mostrar la misma frase con todas las vocales en mayúscula
    4.- Mostrar los primeros 10 caracteres de la frase
    5.- Mostrar los últimos 10 caracteres de la frase 
*/

var phrase = "La mejor forma de predecir el futuro es creándolo"

var phraseLenght = phrase.split (" ").length
console.log(phraseLenght)


var phraseAMatch = phrase.match (/[aá]/gi).length
console.log(phraseAMatch)

console.log(phrase.length)

/*if (phrase.length % 2 == 0) {
    console.log("Par")
} else {
    console.log("Non")
}*/

var i;
for (i = 0; i < phrase.length; i=i + 2) {
    var phraseEven = phrase.charAt (i)
    console.log(phraseEven)
    
}

/*var j;
for (j = 1; j <= phrase.length; j= j + 2 )  {
    var phraseOdd = phrase.charAt (j)
    console.log(phraseOdd)
    
}*/

var snakeCase = phrase.replace (/ /g ,"_")
console.log (snakeCase)

var kebabCase = phrase.replace (/ /g ,"-")
console.log (kebabCase)

var phraseToUpper = phrase.replace (/aeiou/g, /AEIOU/g)
console.log(phraseToUpper)


var k;
for (k = phrase.length - 10; k <= phrase.length; k++ )  {
    let phraseLast = phrase.substr (j,j)
    console.log(phraseLast)
}

var phraseFirst = phrase.substr (0,10)
console.log(phraseFirst)






 







