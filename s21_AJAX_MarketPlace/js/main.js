
const saveArticleData = () => {
    console.log ("click")
    let articleObject = {}
    
    //¿Por qué imprime un 'NodeList'
    let inputs = document.querySelectorAll("form input[type='text']")

    //console.log (inputs)

    inputs.forEach((inputs => {
        console.log(inputs.name)
        //¿Por cada valor de input se guarda el input.value?
        //¿No se requiere un 'listener'?
        articleObject[inputs.name] = inputs.value
        console.log(articleObject)
    }))

    /*let select = document.getElementById("category")
    let category = select.options[select.selectedIndex].value*/

    saveData(articleObject)

    inputs.forEach(inputs => {
        inputs.value = ""
    })

}

document.getElementById("save-btn").addEventListener("click", saveArticleData )

const saveData = article => {
       
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log("Sent...")
            }
        };
        xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/11g/Team3/mentors.json", true);
        xhttp.send(JSON.stringify(article));
}



// Obtener la data del BE

const getArticleData = () => {
    let articleData;

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp.response)
            articleData = JSON.parse(xhttp.response)
            //console.log (Object.entries (articleData))
        }
    };
    xhttp.open("GET", "https://ajaxclass-1ca34.firebaseio.com/11g/Team3/mentors.json", false);

    xhttp.send();

    return articleData

}

const deleteArticle = articleKey => {
    console.log (articleKey)
  

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("DELETE", `https://ajaxclass-1ca34.firebaseio.com/11g/Team3/mentors/${articleKey}/.json`, false);
xhttp.send();

}

// Función para crear la 'card'

const printArticles = articles => {

    let cardContainer = document.getElementById ("container")  
    


    for (key in articles) {
        let article = articles[key]
        let {name, price} = article
        console.log (name)
        console.log (price)

        let cardDeck = document.createElement ("div")
        cardDeck.classList = "card-deck"

        let cardElement = document.createElement ("div")
        cardElement.classList = "card"

        let imageElement = document.createElement ("img")
        imageElement.classList = "card-img-top"
    
        let cardBody = document.createElement ("div")
        cardBody.classList = "card-body"

        let cardName = document.createElement ("p")
        cardName.classList = "card-text"

        let cardPrice = document.createElement ("p")
        cardPrice.classList = "card-text"

        let deleteButton = document.createElement ("button")
        deleteButton.classList = "btn btn-outline-danger delete-button"
        deleteButton.dataset.articleKey = key 


        let nameText = document.createTextNode (name)
        let priceText = document.createTextNode (price)
        imageElement.setAttribute("src", article.image)
        let buttonText = document.createTextNode ("Borrar") 

        cardPrice.appendChild (priceText)
        cardName.appendChild (nameText)
        deleteButton.appendChild (buttonText)

        cardBody.appendChild (cardName)
        cardBody.appendChild (cardPrice)
        cardBody.appendChild (deleteButton)
        
        cardElement.appendChild (imageElement)
        cardElement.appendChild (cardBody)
        
        cardDeck.appendChild (cardElement)

        cardContainer.appendChild(cardDeck)
        
    }
    let buttons = document.querySelectorAll(".delete-button")

    buttons.forEach( button => {
        button.addEventListener("click", deleteArticle )
    })
}

printArticles (getArticleData())



/*const deleteArticle = articleKey => {
    console.log (articleKey)

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("DELETE", `https://ajaxclass-1ca34.firebaseio.com/11g/Team3/mentors/${articleKey}/.json`, true);
xhttp.send();

}*/














