const fs = require ('fs')

fs.readFile('created.txt', (error, data) => {
    if (error) {
        console.log ('No se pude leer el archivo', error)
        return 
    }
    console.log(data)
  })