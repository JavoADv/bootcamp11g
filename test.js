const fs = require ('fs')

fs.writeFile ('created.txt', '¡Hola desde node fs', 'utf8', (error) =>{
    if (error) {
        console.log ('No se creo el archivo:', error)
        return
    }
    console.log ('Se escribio el archivo')
} )