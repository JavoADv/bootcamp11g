var kodersList = [
    [
        "Fernanda",
        "Palacios Vera"
    ],
    [
        "Jorge",
        "Ochoa"
    ],
    [
        "Naomi",
        "Puertos"
    ],
    [
        "Rurick",
        "Maqueo Poissot"
    ]
]
/*
    -crear un nuevo array que contenga los nombres completos de todos los koders de kodersList
*/


//newArray = newArray.push(kodersList [i])

var Djs = [
    [
        "Tale Of",
        "Us"
    ],
    [
        "Jamie",
        "Jones"
    ],
    [
        "Javier",
        "ADv"
    ],
    [
        "Mind",
        "Against"
    ]
]

function createArray (x) {

var newArray = []
var stringArray
var x 

for (i = 0; i < x.length; i++) {
    let joinedArray
    joinedArray = x[i].join (" ")
    newArray.push(joinedArray)
    
    } 
    return newArray
}
    

function firstName (first, item){
    var Array
    var first
    var item
    Array = first [item].join (" ")
    var askFirst = prompt ("Ingresa el primer nombre")
    if (askFirst == Array) {
        console.log ("El nombre está en la lista")
    } else {
        console.log ("El nombre no se encuetra en la lista")
     }
} 









/*function creatNew () {
    var = newArray []
    newArray.push( )

}*/