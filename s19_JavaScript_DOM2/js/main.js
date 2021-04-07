const djs = [
    "Tale of us",
    "Bassara",
    "Mind Against"
]

console.log (djs)

let djsList = document.createElement ("ul")
let djsLi = document.createElement ("li")



//djs.forEach (dj => {
    
    
    let djsText = document.createTextNode (djs)

    djsLi.appendChild(djsText)
    djsList.appendChild(djsLi)
//})


document.body.appendChild(djsList)

/*document.getElementById("dj").addEventListener("click", () => {alert("RAVE")})*/

document.getElementById("text-input").addEventListener("keyup", (event)=> {
    //let inputValue = document.getElementById ("text-input").value
    //console.log (event.target)

    let heading = document.getElementById("heading")

    let inputValue = event.target.value
    console.log (inputValue)

    heading.innerText = inputValue
})

document.getElementById("dj").addEventListener ("click", (event)=> {
    console.log (event.target.innerText)
})

document.getElementById("dj-1").addEventListener ("click", (event)=> {
    console.log (event.target.innerText)
})
