//Función que compare el score de dos arrays.
let x = 0;
let y = 0;

let anaScoresArray = []
let bobScoresArray = []
let scoresArray = [x, y]

let getAnas = scores => {

    anaScoresArray.push (scores)
}

let getBobs = scores => {

    bobScoresArray.push (scores)
}

getAnas (3)
getBobs (7)

getAnas (9)
getBobs (3)

getAnas (12)
getBobs (4)

getAnas (5)
getBobs (1)

getAnas (11)
getBobs (14)

getAnas (6)
getBobs (13)

console.log (anaScoresArray)
console.log (bobScoresArray)


for (i= 0; i < anaScoresArray.length; i++) {
if (anaScoresArray[i] > bobScoresArray[i]) {
    
    scoresArray[0]+= 1

} else {
    
    scoresArray[1]+=1
}}

console.log (scoresArray)



// $('.form-control').keyup(function() {
//     let getText = $('.form-control').val()
//     console.log (getText)

//     scoresArray.push (getText)

//     console.log (scoresArray)
// }
// )

