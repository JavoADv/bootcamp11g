
const express = require ('express')
const mongoose = require ('mongoose')
const Koder = require ('./koderModel')

const server = express ()
server.use(express.json())

const DB_USER = 'javadv'
const DB_PASSWORD = 'Kodemia2021'
const DB_HOST = 'kodemia-once.886i3.mongodb.net'
const DB_NAME = 'kodemia'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

server.get ('/koders', async (request, response) => {

    const queryParam = request.query 

    const allKoders = await Koder.find (queryParam)

    // response.json ({   <---- Esta respuesta nos trae todos los koders
    //     message: 'all koders',
    //     success: true,
    //     data: {
    //         koders: allKoders
    //     }
    // })

    // const kodersGender = allKoders.filter ( koder => koder.gender === m) <---  Eso filtra con js no con la DB
    
    response.json  (allKoders)
    
})

server.post ('/koders', (request, response) => {

    const koderToDb = request.body  // Se solicita o se trae el 'body' (insomnia)

    // response.json (koderToDb)

    Koder.create (koderToDb) // Se crea el koder hacía la DB directamente con el método 'create'

    // .then ((koderCreated) => {
    //     console.log ('koder crated successfuly: ', koderCreated)
    // })
    // .catch ((error) => {
    //     console.error ('Error, must have name: , lastname: , Age: and gender: ', error)
    // })
    
    response.json ({
        msg: "Koder created succesfuly",
        success: true
    })

} )

server.listen (8080, ()=> {
    console.log ('server is listening')
})

mongoose.connect (url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then (()=> {
        console.log ('We are at DB')
    })
    .catch (error => {
        console.log ('error', error)
    })