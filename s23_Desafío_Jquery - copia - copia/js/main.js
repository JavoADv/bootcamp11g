let postsData = {
    post1:{ /* entrada de post*/
        postId:1,/*id del post*/
        userId:2, /*id del usuario que publicó el post*/
        title:"Post 1", /*título del post*/
        content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugiat soluta beatae iste in laudantium, assumenda eligendi neque vero optio!", /*contenido del post*/
        creationDate:"14/04/2021", /*fecha de creación del post*/
        creationTime:"19:00", /*hora de creación del post*/
        coverUrl:"https://picsum.photos/id/237/768/384",  /* portada del post*/
    }
} 

let postsData = {
    post1:{ /* entrada de post*/
        postId:2,/*id del post*/
        userId:1, /*id del usuario que publicó el post*/
        title:"Post 2", /*título del post*/
        content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugiat soluta beatae iste in laudantium, assumenda eligendi neque vero optio!", /*contenido del post*/
        creationDate:"19/04/2021", /*fecha de creación del post*/
        creationTime:"20:00", /*hora de creación del post*/
        coverUrl:"https://picsum.photos/id/237/768/384",  /* portada del post*/
    }
} 

let postsData = {
    post1:{ /* entrada de post*/
        postId:3,/*id del post*/
        userId:1, /*id del usuario que publicó el post*/
        title:"Post 3", /*título del post*/
        content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugiat soluta beatae iste in laudantium, assumenda eligendi neque vero optio!", /*contenido del post*/
        creationDate:"10/04/2021", /*fecha de creación del post*/
        creationTime:"18:00", /*hora de creación del post*/
        coverUrl:"https://picsum.photos/id/237/768/384",  /* portada del post*/
    }
} 

let replies = {
    reply1:{ /*entrada de comentario*/
        userId:1, /*id del usuario que comenta*/
        post:1, /*id del post en el que se comenta*/
        content:"Excelente post!", /*contenido del comentario */
        creationDate:"14/04/2021", /*fecha de creación del comentario */
        creationTime:"19:00", /*hora de creación del comentario */
    }
}

let replies = {
    reply1:{ /*entrada de comentario*/
        userId:1, /*id del usuario que comenta*/
        post:1, /*id del post en el que se comenta*/
        content:"Excelente post 1!", /*contenido del comentario */
        creationDate:"14/04/2021", /*fecha de creación del comentario */
        creationTime:"19:00", /*hora de creación del comentario */
    }
}

let replies = {
    reply2:{ /*entrada de comentario*/
        userId:2, /*id del usuario que comenta*/
        post:1, /*id del post en el que se comenta*/
        content:"Excelente post 2!", /*contenido del comentario */
        creationDate:"14/04/2021", /*fecha de creación del comentario */
        creationTime:"19:00", /*hora de creación del comentario */
    }
}

let replies = {
    reply3:{ /*entrada de comentario*/
        userId:2, /*id del usuario que comenta*/
        post:3, /*id del post en el que se comenta*/
        content:"Excelente post 3!", /*contenido del comentario */
        creationDate:"14/04/2021", /*fecha de creación del comentario */
        creationTime:"19:00", /*hora de creación del comentario */
    }
}

let replies = {
    reply4:{ /*entrada de comentario*/
        userId:1, /*id del usuario que comenta*/
        post:3, /*id del post en el que se comenta*/
        content:"Excelente post 4 !", /*contenido del comentario */
        creationDate:"14/04/2021", /*fecha de creación del comentario */
        creationTime:"19:00", /*hora de creación del comentario */
    }
}

let users = {
    user1:{ /*Entrada de usuario */
        userId:1, /*id del usuario */
        name:"Israel Salinas Martínez", /*Nombre del usuario */
        avatar:"https://media-exp1.licdn.com/dms/image/C4E03AQEKN_uf1kAPMw/profile-displayphoto-shrink_800_800/0/1550176229405?e=1623888000&v=beta&t=tNSS_vfQm_GWXfBquADFDLyNnozk3UK_hsS10IvQMlQ" /*Avatar del usuario */
    },
    user2:{
        userId:2,
        name:"Gabriela Padilla",
        avatar:"https://media-exp1.licdn.com/dms/image/C5603AQFxZihNUVo-ng/profile-displayphoto-shrink_200_200/0/1517501855544?e=1623888000&v=beta&t=SaHOe6Q1nQkH-ZQYGZy8P1OimoTNq-ZAIwZFE0uleO8"
    }
} 

/*let getText = () => {
   let replyText =  $(".form-control").val()
   console.log (replyText)
   //return replyText
   $(".reply-body").append(replyText)
}

$(".arrow-btn").click (()=>{
    event.preventDefault()
    console.log ("click")
    
    $(".reply-section").append('<li class="list-group-item"><div class ="reply-box><h3><img src="" alt=""><span>Nuevo comment</span><p class="reply-header">Post Header</p><p class="reply-body"></p></li>')
    
    getText()
})*/

//sección "post"



let newPost = {};


let createddId = Date.now ()
let postId = $(".post-data")

console.log ($('[data-key="created"]'))



$(".post-data").each((i, element) => {
    //console.log (element)
  let $element = $(element);
//   console.log ($element)
  newPost[$element.data('key')] = $element.text();
  //console.log ([$element.data('key')])
})



console.log (newPost)


// Sección "comments"
let getText = () => {
    let replytext = $('.form-control').val()
    let someObject = {}
    someObject.name = replytext
    saveData (someObject)
    replytext.value = ""
}


$(".arrow-btn").click (()=>{
    event.preventDefault()
    console.log ("click")
    getText()
})
   

const saveData = comment => {
    $.ajax({
        method: "POST",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/DesafioTeam3/comments/.json",
        data: JSON.stringify(comment),
        success : response => {
            console.log(response)
            printComments (getData())
        },
        error : error => {
            console.log(error)
        }
    })
}

const getData = () => {
    let dataImported;
    $.ajax({
        method: "GET",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/DesafioTeam3/comments/.json",
        success: response => {
             dataImported = response
            
        },
        error: error => {
            console.log(error)
        },
        async: false
    }) 
    return dataImported
}   

let date = moment().format("DD/MM/YYYY, h:mm:ss a")
console.log (date)



const printComments = data => {

   
    $(".reply-section").empty()

    for (key in data) {

        let {name}=data[key]

  
   $(".reply-section").append(`<li class="list-group-item"><div class ="reply-box><h3><img src="" alt=""><span>Nuevo comment</span><p class="reply-header">Post Header</p><p class="reply-body">${name}</p><p>${date}</p></li>`)

    }

}

const deleteData = () => {
    $.ajax({
        method:"DELETE",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/DesafioTeam3/comments/.json",
        success: response => {
            console.log( response)
        },
        error: error => {
            console.log( error )
        }
    })
}

//  deleteData()

