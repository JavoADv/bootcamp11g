const fs = require ('fs')

fs.appendFile('created.tx', 'data to append', (error) => {
    if (error) {
        console.log ('El archivo con error', error)
        return
    } 
    console.log('The "data to append" was appended to file!')
  })