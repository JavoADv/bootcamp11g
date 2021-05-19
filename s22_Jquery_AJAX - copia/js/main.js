// let textArray = []
// let divText = "" 

/*let divText = $("label, button").map((i,x) => x.innerText.replace(/(\r\n|\n|\r|[` `])/gi, ``)).get();
console.log(divText);*/

// let text = $(`#phone`).text()

// console.log (text)

let newObject = {

    content: " Hola",
    id : 5516,
    title: "Nuevo",
}

let newTitle = newObject.title.toLowerCase()

let someObject = {...newObject, newTitle}

console.log (someObject)

// for (key in newObject) {
//     let newTitle = newObject[key]
//     console.log (newTitle)
// }

