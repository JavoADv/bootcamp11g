const fs = require ('fs')

fs.copyFile('source.txt', 'destination.txt', (error)=> {
    if (error) {
        console.log ('El archivo no se puede copiar',  error)
        return
    }
    console.log ('source.txt fue copiado exitosamente')
})