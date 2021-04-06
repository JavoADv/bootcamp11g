//Sabiendo que una cadena de texto contine parentesis. Crear un programa que devuelva la cadena que se encuentra entre los parentesis.

function deleteParenthesis () {
    let  input = prompt("Ingresa una palabra con parentesis: ")

        let inputReplaced = input.replace (/[()]/g, "")

            console.log (inputReplaced)
    
}

//deleteParenthesis()

//Crear una funcion que permita solicitar numeros al usuario por medio del prompt y no dejar de solicitarlos hasta que el usuario ya no dese ingresar más.

function makeNumsArray () {

    let inputArray = []

    let input = prompt ("Ingresa números separdos por comas. Da click en 'Aceptar' cuando ya no quieras ingresar más: ")

    inputArray.push (input)

    console.log (inputArray)
}

function makePyramid () {
    /*let inputArray = []
    let sum = 0
        let input = prompt ("Ingresa números de 1 al 10: ")
        console.log (inputArray)
            inputArray.push (input)
                let inputSplitted = inputArray.split (",")
                    console.log (inputSplitted)*/
                    let inputArray = ["1","2","3","4","5","6","7","8","9","10"]
                    console.log (inputArray)
                    let sum = " " 
                        let pyramid = inputArray.map ((item)=> item += item  )
                            console.log (pyramid)
}

makePyramid()


