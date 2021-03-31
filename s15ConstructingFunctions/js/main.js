/* Teniendo la siguiente coleccion de Koders generar una coleccion de objetos de tipo Koder. Agregando además las siguientes funciones:

Obtener la edad a partir de la fecha de nacimiento

Obtener promedio de sus scores

Colección de Koder que pertenezcan a JavaScript

Colección de Koder que pertenezcan a Python*/

const kodersCollection = [
    {
        name: 'Javier', 
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 80
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {
        name: 'Ale', 
        lastName: 'Paez',
        birthday: '1998/05/12',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    },
    {
        name: 'Juan Pablo', 
        lastName: 'Sánchez',
        birthday: '1994/10/26',
        generation: 10,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 100
            },
            {
                module: 'Backend',
                score: 95
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {
        name: 'Oscar', 
        lastName: 'Ruiz',
        birthday: '1996/06/24',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 98
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 70
            },
        ]
    },
    {
        name: 'Javier', 
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 80
            },
            {
                module: 'Backend',
                score: 90
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    }
]


function Koder (name, lastName, birthday, generation, bootcamp, scores) {
    this.name = name;
    this.lastName = lastName;
    this.birthday = birthday;
    this.generation = generation;
    this.bootcamp = bootcamp;
    this.scores = scores ;
}


const kodersArray = []

kodersCollection.forEach(itemKoder => {

    const KoderNew = new Koder (itemKoder.name, itemKoder.lastName, itemKoder.birthday, itemKoder.generation,itemKoder.bootcamp,itemKoder.scores )

    console.log (KoderNew)
    
});



















