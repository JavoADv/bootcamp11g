/*-Crear una función que pida al usuario el número de koders a registrar
    -tantas veces como koders se deseen registrar:
        -Pedir el nombre del koder
        -Pedir el apellido del koder
        -Imprimir el nombre completo del koder

        function getKoders () {
            let numKoders = parseInt (prompt ("Ingresa el número de Koders"))
                for (i = 1; i <= numKoders; i++) {
                    let firtsName = prompt ("Ingresa el nombre: ")
                    let lastName = prompt ( "Ingresa el apellido: ")
                    let fullName = firtsName.concat (" " + lastName)
                    console.log (fullName)
                }   
        }*/

        /*
    -pedir al usuario la cantidad de koders a guardar
    -pedir nombre y apellido de cada koder
    -guardar cada koder en un array 
    -imprimir cada uno de los koders
*/
/*
    permitir guardar koders adicionales
    permitir borrar un koder aleatorio de la lista
*/


var koders = []

function koderSave () {

    let kodersQuantity = parseInt (prompt("Ingresa la cantidad de Koders que deseas guardar"))

for (let i = 0; i < kodersQuantity; i++){
    
    let fullName = prompt ("Ingresa el nombre de cada koder (Nombre || Apellido): ")

koders.push (fullName)

console.log (koders.length)
console.log (koders[i])
}
}

function koderAdd () {
    let koderNumber = parseInt (prompt ("Ingresa la cantidad de koders adicionales: "))
        for (let i = 0; i < koderNumber; i++) {
            let fullNameAdd = prompt ("Ingresa el nombre de cada koder adicional (Nombre || Apellido): ")
                koders.push (fullNameAdd) 
                    console.log (koders)
        }
}

function koderDelete () {
    let randomKoder = Math.floor (Math.random() * koders.length)
    let randomDelete = koders.splice (randomKoder, 1)
    console.log (koders) }


