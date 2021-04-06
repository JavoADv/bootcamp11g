/*let namesArray = [
    "Juan",
    "Berta",
    "Imbécil"
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


    let table = document.createElement ("table")
    let tableHeader = document.createElement ("thead")
    let headerRow = document.createElement ("tr")
    
    tableHeader.appendChild(headerRow)
    table.appendChild(tableHeader)

    headerArray.forEach (item => {
        let titleHeading = document.createElement ("th")
        let titleText = document.createTextNode (item)

        
        titleHeading.appendChild(titleText)
        headerRow.appendChild(titleHeading)
    })

    let tableBody = document.createElement ("tbody")

    
    table.appendChild(tableBody)

    mentorsArray.forEach (mentor => {
        let mentorRow = document.createElement ("tr")
        let mentorData = document.createElement ("td")
        let mentorText = document.createTextNode (mentor.name)

        mentorData.appendChild(mentorText)
        mentorRow.appendChild(mentorData)
        tableBody.appendChild(mentorRow)

        var sum = 0
        var average = 0
        var averageSum = 0

        mentor.scores.forEach (item => {
        
        //let sum = 0
        //let average = 0
        
        let signatureData = document.createElement ("td")
        let signatureText = document.createTextNode (item.score)

        signatureData.appendChild (signatureText)
        mentorRow.appendChild (signatureData)
        
        sum += item.score  
        //average = sum / item.scores.length

    })

    average = sum / mentor.scores.length
    

    let averageData = document.createElement ("td")
    let averageText = document.createTextNode (average)

        averageData.appendChild(averageText)
        mentorRow.appendChild(averageData)

        
        //let mentorsAverage = 0

        
        averageSum += average 
        console.log (averageSum)
        
       
    
    })

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

    
    
    document.body.appendChild (table)
}

printTable()