
/*const arrayTest = [
    "Luis", "Juan"
]


let result = arrayTest.reduce ((accum, current, index) => accum + current.charAt (0)," ")
console.log (result)

/*arrayTest.forEach ((item)=> {
    let string = item.toString()
    let slicedItem = string.slice (0,1)
    
})*/





const arrayNames = [
    ["Ruben", "Flores"],
    ["Andre", "Vazquez"],
    ["Fernanda", "Palacios"],
    ["Goerge", "Camarillo"],
    ["Ale", "Paez"],
    ["Shari", "Andrade"],
    ["Erick", "Trujillo"],
    ["Arce", "Gutiérrez"],
    ["Juan", "Hernandez"]
]


var string = ' ' 
var initials = ' '

arrayNames.forEach ((item) =>{
    
    let result = item.reduce ((accum, current, index) => accum + current.charAt (0) + "."," ") //Extrae las iniciales de cada elemento y agrega un punto
    
    string = item.toString() //Cada elemento del array lo saca y lo convierte en string.
    let rep = string.replace (",", " ") //Reemplaza la ",", por un espacio vacío.
    
    initials = rep + result // Junta el string de rep con las iniciales (string) de result

    console.log (initials)
})


/*splittedName.forEach ((item) => {
    let firstChar = item.charAt (0)
    initials += firstChar + " "
    console.log (initials)
})*/


/*let name =["Luis Beto", "Juan Perez"]
let splittedName = name.split(" ")
var initials = ' '

console.log (splittedName)

splittedName.forEach ((item) => {
    let firstChar = item.charAt (0)
    initials += firstChar + " ", 
    console.log (initials)
})

var string = ' ' 
var initials = ' '

arrayNames.forEach ((item) =>{
    
    let result = item.reduce ((accum, current, index) => accum + current.charAt (0)," ") //Extrae las iniciales de cada elemento.
    
    string = item.toString()
    let rep = string.replace (",", " ")
    let splittedName = rep.split(" ")
    console.log (splittedName)
})*/
