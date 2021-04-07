/*let namesArray = [
    "Juan",
    "Berta"
    
]

const printList = () => {
    let list = document.createElement ("ul")

    namesArray.forEach (item => {
        let listItem = document.createElement ("li")
        let itemText = document.createTextNode (item)

        listItem.appendChild (itemText)
        list.appendChild (listItem)
    })

    document.body.appendChild (list)
}*/

let mentorsArray = [
    {
        name: "Israel Salinas Martinez",
        scores: [
            {
                signature: "HTML",
                score: 8
            },
            {
                signature: "CSS",
                score: 10
            },
            {
                signature: "JS",
                score: 8
            },
            {
                signature: "ReactJS",
                score: 8
            }
        ]
   },
    {
        name: "David Cermeño Moranchel",
        scores: [
            {
                signature: "HTML",
                score: 8
            },
            {
                signature: "CSS",
                score: 7
            },
            {
                signature: "JS",
                score: 10
            },
            {
                signature: "ReactJS",
                score: 10
            }
        ]
    },
    {
        name: "Charles Silva",
        scores: [
            {
                signature: "HTML",
                score: 9
            },
            {
                signature: "CSS",
                score: 9
            },
            {
                signature: "JS",
                score: 10
            },
            {
                signature: "ReactJS",
                score: 9
            }
        ]
    },
    {
        name: "Michael Villalba Sotelo",
        scores: [
            {
                signature: "HTML",
                score: 8
            },
            {
                signature: "CSS",
                score: 10
            },
            {
                signature: "JS",
                score: 9
            },
            {
                signature: "ReactJS",
                score: 10
            }
        ]
    }
,]



/*const  printTable = () => {
    var tableData 
    let table = document.createElement ("table")
    
    table.appendChild(tableData)

    headerArray.forEach (item => {
        tableData = document.createElement("td")
        let tableText = document.createTextNode (item)
        tableData.appendChild(tableText)
        
       
    })
    
    document.body.appendChild(table)
}

printTable()*/
   
const printTable = () => {

    let headerArray = ["Mentor",
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT",
    "PROMEDIO"]


    let table = document.createElement ("table") //Se crea la tabla 
    let tableHeader = document.createElement ("thead")//Se crea el 'header' de la tabla
    let headerRow = document.createElement ("tr")// Se cre la fila del 'header'
    
    tableHeader.appendChild(headerRow)//Se inserta la fila en el 'header'
    table.appendChild(tableHeader)//Se inserta el 'header' con la fila en la tabla

    headerArray.forEach (item => { //Se ingresa y recorre a al Array del header (mentor, materias y promedio)
        let titleHeading = document.createElement ("th")//Por cada elemento visitado (recorrido), se crea una columna tipo 'table heading'
        let titleText = document.createTextNode (item)//Por cada elemento visitado, se crea un nodo de texto

        
        titleHeading.appendChild(titleText)//Se inserta el nodo de texto creado al 'table heading'
        headerRow.appendChild(titleHeading)//Se inserta el 'table heading' con el texto a la fila del header, el cual está fuera del ciclo
    })

    let tableBody = document.createElement ("tbody")//Se crea el cuerpo de la tabla

    
    table.appendChild(tableBody)//Se agrega el cuerpo de la tabla a la tabla, la cual ya contiene el 'header'

    mentorsArray.forEach (mentor => {//Se recorre (visita) el Array de mentores
        let mentorRow = document.createElement ("tr")//Por cada mentor se crea una nueva fila
        let mentorData = document.createElement ("td")//Por cada mentor se crea una columa que incluirá la data (texto)
        let mentorText = document.createTextNode (mentor.name)//Por cada mentor se crea un nodo de texto

        mentorData.appendChild(mentorText)//Se agrega cada nodo de texto a cada columna de datos
        mentorRow.appendChild(mentorData)//Se agrega la columna con el texto a cada fila del mentor
        tableBody.appendChild(mentorRow)//Se agrega la fila del mentor con la data y el texto al cuerpo, el cual está fuera del ciclo

        var sum = 0//Se declara variable fuera del ciclo, para llevar hacer la suma
        var average = 0//Se declara una variable para guardar el promedio
        var averageSum = 0

        mentor.scores.forEach (item => {//Se ingresa a los 'scores' con un ciclo, dentro del ciclo del mentor 
        
        let signatureData = document.createElement ("td")//Por cada score visitado se crea una columna de datos
        let signatureText = document.createTextNode (item.score)//Se crea un nodo de texto por cada 'score' encontrado dentro de scores

        item.score  < 9 ? signatureData.classList.add ("bg-warning") : signatureData.classList.add ("bg-success")//Pone color a la calificación

        signatureData.appendChild (signatureText)//Se agrega el nodo de texto a la columna de datos de cada signature
        mentorRow.appendChild (signatureData)//Se inyecta o agrega cada columna de datos con el texto de cada score a cada fila de cada mentor del Array
        
        sum += item.score//Se suman las calificaciones de cada 'signature' y ser guarda en sum
    })

    average = sum / mentor.scores.length//Se saca el promedio, fuera del ciclo, para que sea global y no se esté ciclando
    

    let averageData = document.createElement ("td")//Se crea una columna de datos para el promedio para cada mentor (Seguimos en ciclo de mentor)
    let averageText = document.createTextNode (average)//Se crea un nodo de texto para el promedio 

        averageData.appendChild(averageText)//Se ingresa el texto a cada columna de datos del promedio
        mentorRow.appendChild(averageData)//Se ingresa la columna de datos del promedio de cada mentor a la fila de cada mentor

        
        //let mentorsAverage = 0

        
        //averageSum += average 
        //console.log (averageSum)
        
       
    
    })//Se cierra el ciclo del mentor

    /*let mentorsAverage = 0
    let averageSum = 0*/

    let tableFooter = document.createElement ("tfoot")
    let footerRow = document.createElement ("tr")
    let footerData = document.createElement ("td")

    /*let averageSum = 0
    let mentorsAverage = 0

    for (i= 0; i< average.length; i ++) {
        averageSum += average 
    }*/

    //mentorsAverage = averageSum 

    
    
    document.body.appendChild (table)//Se inyecta la tabla completa al body del DOM 
}

printTable()

/*const getLowest = () => {
    item.score <= 8 createElement
}*/

//const getScoreLessThanNine = ()  => document.querySelectorAll(".bg-warning").length
