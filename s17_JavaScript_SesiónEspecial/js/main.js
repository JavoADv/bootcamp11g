//Dado un string de dos palabras realizar una función que devuelva la palabra más larga

function getLongest () {
    let inputArray = []
    let input= prompt ("Ingresa una frase de dos palabras: ")
     inputArray = input.split (" ")
    
    if (inputArray[0].length > inputArray[1].length) {
        console.log (inputArray[0])
    }
        else {
            console.log (inputArray[1])
        }
    
}

//getLongest()

//Crear un programa que permita detectar si una frase finaliza con punto. Dicho programa debe estar encapsulada en una función y recibir el o los parametros necesarios.

function getPeriod () {
    let quantity = prompt ("Ingresa el número de enunciados a comparar: ")
    
    for (i= 0; i<quantity; i ++) {
        let string = prompt ("Ingresa la frase: ")
        let stringLength = string.length
        let lastChar = stringLength - 1
        
        if (string[lastChar] === '.') {
            console.log ("Finalizó en punto")
        } 
            else {
                console.log ("No finalizó en punto :(")
            }
        
       
    }
}


//getPeriod ()

//Crear un programa que permita al usuario retornar el numero de coincidencias de una palabra en una frase que el mismo usuario ingrese.

function getWord (){
let num = 0
let phrase = prompt ("Ingresa una frase")
let word = prompt ("Ingresa la palabra para buscar coincidencias: ")
let phraseArray = phrase.split (" ")
phraseArray.forEach ((item) => item === word ? num += 1 : null)
console.log (num)
/*let searchWord = phrase.match (word)
console.log (searchWord)*/

}

//getWord ()

function getString () {
    let stringPhrase = prompt ("Ingresa la frase: ")
    let string = prompt ("Ingresa la palabra a extraer: ")
    let stringArray = stringPhrase.split (" ")
    let filteredString = stringArray.filter ((item) => item === string ? console.log (item): null || item !== string ? console.log ("Palabra no válida"): null ) //¿Cómo hacer para que solo imprima una vez 'Palabra no válida'
}

//getString ()

function compare () {
    let string1 = prompt ('Ingresa la primer palabra: ')
    let string2 = prompt ('Ingresa la segunda palabra: ')
    let string1Upper = string1.toUpperCase ()
    let string2Upper = string2.toUpperCase ()


    let comparedString = string1Upper.normalize() === string2Upper.normalize () ? console.log ("Las palabras son iguales"): console.log ("Las palabras no son iguales :(")
}

//compare ()

function toUpper () {
    let phrase = prompt ("Ingresa la frase: ")
    let phraseUpp = phrase.toUpperCase ()
    console.log (phraseUpp)
}

//toUpper ()

function replaceDash () {
    let phrase = prompt ("Ingresa la frase: ")
    let phraseDash = phrase.replace ( /\s/g,"-")
    console.log (phraseDash)
}

//replaceDash()

function getVowels () {
    let phrase = prompt ("Ingresa una frase: ")
    let phraseMatch = phrase.match (/[aeiou]/gi)
 
    let vowels = phraseMatch.reduce ((accum, current) => accum + current.length,0)

    console.log (`La cadena tiene: ${vowels} vocales`)
    
}

//getVowels()

function reverseString () {
    let string = prompt ("Ingresa la plabra o frase: ")
    let stringSplitted = string.split ("")
    
    let reverse = stringSplitted.reverse ()
    let joinedString = reverse.toString()
    let replacedChar = joinedString.replace(/[,]/g,"")

    console.log (replacedChar)
}

reverseString()