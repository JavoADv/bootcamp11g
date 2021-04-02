/*Realizar una función que reciba como parametro el nombre completo de un koder y retorne sus iniciales. Ejemplo:

 Input: 'Fernanda Palacios Vera'
 Output: F. P. V.*/

 

 function getInitials (){
    
    let  name = prompt ("Ingresa tu nombre completo: ") //Hace el input del nombre 
    let splittedName = name.split (" ") //Separa cada string del nombre y regresa un nuevo array con los nombres separados.
    
    let initials = splittedName.reduce ((accum, current)=> accum + current.charAt(0) + ".", " ")//Extrae la iniciales del array "splittedName"
    console.log (initials) //Imprime las iniciales

 }

getInitials()

 //Realizar una función que reciba n parametros de tipo string y validar por cada string cuantas vocales tiene y retornar el resultado en un objeto


function getVowels () { 
 let quantity = prompt ("Digita cuántas palabras quieres ingresar: ") //Pide el número de strings

for (i=0; i<quantity; i ++) {//Con un ciclo 'for' y con base en 'quantity' se realiza un ciclo para la cantidad de string que el usuario haya digitado
    let string = prompt ("Ingresa la palabra que quieras saber el número de sus vocales: ")//Ingresa los strings
    let vowels = string.match (/[aeiou]/ig)//Con la función .macth() y una expresión regular, identifica las vocales.
    let sum = vowels.reduce ((accum, current)=> accum + current.length,0)//A cada resultado guardado en la variable 'vowel', se suman las vocales encontradas
  
    let vowelsObject = {['string'+i]: sum} //Imprime el orden los strings y el número de las vocales
    console.log (vowelsObject)//Manda a llamar para imprimir el objeto 
}
}

getVowels ()

