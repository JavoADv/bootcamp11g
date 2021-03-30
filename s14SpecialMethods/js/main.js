/*-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
-Obtener el promedio individual de cada mentor
-Obtener un array de strings con la siguiente forma:
     "Mi nombre es {nombre} y mi promedio es de {promedio}"
-Obtener la lista de mentores cuyo promedio sea mayor a 9.5*/


/*let mentorsArray = [
    {
        name:"Israel Salinas Martinez",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"David Cermeño Moranchel",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Charles Silva",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Michael Villalba Sotelo",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
]*/

let mentorsArray = [
    {
        name:"Israel Salinas Martinez",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    }
]


let mentor = mentorsArray[0]
console.log (mentor.scores)

var mentorScores = mentor.scores

/*Let total = mentoreScores.reduce( (accum, score) =>{
    return accum + score.score
},0)*/



let total = mentor.scores.reduce ((accum, score )=> {
    return (accum + score.score)
},0)

let total2 = total 

c

console.log (total2/mentorScores.length)

/*var mentor = [] 

for (i = 0; i <mentor.length; i++){
    let mentor = mentorsArray[0].scores
    let average = mentor.reduce ((a,b) => a + b, 0)
    console.log (mentor)
}
    




//console.log (mentorsArray[0].scores.length)




/*function Average (){

}

/*function mentorAverage () {
    let mentorsName = prompt ("Ingresa el nombre del mentor")
    if (mentorsName === mentorsArray[0].name) {
        reduce 
    }
}

mentorAverage ()



/*let print = mentorsArray.map ((item)=> {
    return `Mi nombre es ${item.name} y mi promedio es`
})

console.log(print)*/

/*mentorsArray.filter ((item, index)=> {
    let mentorsName 
    mentorsName = prompt ("ingresa el nombre del mentor:")
    if (mentorsName === item.name) {
        console.log (mentorsName)
    }
    /*console.log (item.name)
    console.log (index)
    console.log (typeof item.name)
}
)*/



/*console.log (mentorsArray)

var newArray = []

mentorsArray.forEach ((item[0]) => {

    newArray.push (item)
    
})
console.log (newArray)

//console.log (newArray[0].scores[0].score)

/*var mentorAverage = 0

newArray.forEach ((newArray[0])=> {
    console.log (.scores)
})*/



//mentorsArray.forEach ((item) =>  console.log(item))
