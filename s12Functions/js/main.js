/*-Crear una función que pida al usuario el número de koders a registrar
    -tantas veces como koders se deseen registrar:
        -Pedir el nombre del koder
        -Pedir el apellido del koder
        -Imprimir el nombre completo del koder*/

        function getKoders () {
            let numKoders = parseInt (prompt ("Ingresa el número de Koders"))
                for (i = 1; i <= numKoders; i++) {
                    let firtsName = prompt ("Ingresa el nombre: ")
                    let lastName = prompt ( "Ingresa el apellido: ")
                    let fullName = firtsName.concat (" " + lastName)
                    console.log (fullName)
                }   
        }