const mongoose = require ('mongoose')

const DB_USER = 'javadv'
const DB_PASSWORD = 'Kodemia2021'
const DB_HOST = 'kodemia-once.886i3.mongodb.net'
const DB_NAME = 'kodemia'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

// model 


// schema 

const koderSchema = new mongoose.Schema ({
    name: {
        type: String,
        minLength: 2,
        maxLength: 100,
        required: true
    },
    lastName: {
        type: String,
        minLength: 2,
        maxLength: 100,
        required: true
    },
    Age: {
        type: Number,
        min: 0,
        max: 150,
        required: true
    },
    gender: {
        type: String,
        maxLength: 1,
        enum: [
            'm',
            'f'
        ],
        requiered: true
    }   
})

const Koder = mongoose.model ('koders', koderSchema) // Se necesitan simpre el nombre de la colección y el nombre del schema

mongoose.connect (url, {useNewUrlParser: true, useUnifiedTopology: true})
.then ((conn) => {
    console.log ('DB Connected :D :', conn)
    // Koder.find ({})
    //     .then((kodersFound)=> {
    //         console.log ('kodersFound', kodersFound)
    //     })
    //     .catch (error => {
    //         console.error ('error', error)
    //     })

    // Para crear 
    Koder.create ({
        name: 'Mario',
        lastName: 'Andrade',
        Age: 21,
        gender: 'm'
    })
        .then ((koderCreated) => {
            console.log ('koderCreated: ', koderCreated)
        })
        .catch ((error) => {
            console.error ('error', error)
        })
})
.catch ((error) => {
    console.error('error: ', error)
})

