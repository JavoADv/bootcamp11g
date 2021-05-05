const fs = require ('fs')

fs.unlink('created.txt', (error) => {
    if (error) {
        console.log ('El archivo no se puede borrar:', error)
        return
    }
    console.log('created.txt was deleted');
  })