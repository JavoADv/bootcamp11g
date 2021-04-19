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

let replies = {
    reply1:{ /*entrada de comentario*/
        userId:1, /*id del usuario que comenta*/
        post:1, /*id del post en el que se comenta*/
        content:"Excelente post!", /*contenido del comentario */
        //creationDate:"14/04/2021", /*fecha de creación del comentario */
        //creationTime:"19:00", /*hora de creación del comentario */
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

// Sección "comments"
let getCommentsText = () => {
    let replyText = $('#comments-input').val()
    console.log (replyText)
    let newComment = {}
    newComment.name = replyText
    console.log (newComment)
    saveCommentsData (newComment)
    replyText.value = ""
}


$("#post-comment").click (()=>{
    event.preventDefault()
    console.log ("click")
    getCommentsText()
})
   

const saveCommentsData = comment => {
    $.ajax({
        method: "POST",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/DesafioTeam3/comments/.json",
        data: JSON.stringify(comment),
        success : response => {
            console.log(response)
            printComments (getCommentsData())
        },
        error : error => {
            console.log(error)
        }
    })
}

const getCommentsData = () => {
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

   
    $(".replyWrapper").empty()

    for (key in data) {

        let {name}=data[key]

  
   let comment = (`<li class="list-group-item"><div class ="reply-box><h3><img src="" alt=""><span>Nuevo comment</span><p class="reply-header">Post Header</p><p class="reply-body">${name}</p><p>${date}</p></li>`)

   $(".repliesWrapper").each (function () {
       if (this.dataset.postId == postId) {
           $(this).append(comment);
       }
   })

    }

}

/*const deleteData = () => {
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

deleteData()*/




//Sección Posts
let newPost = {}

let getPostsText = () => {
    let postText = document.querySelectorAll("form input[type='text']")
    
    postText.forEach(field => {
        newPost[field.name] = field.value
    })

    //console.log(someObject)
    savePostsData (newPost)

    postText.forEach(field => {
        field.value = ""
    })
}

let postId = Date.now ()

newPost = {
    ...newPost,
    date: moment().format("DD/MMMM/YYYY"),
    id: postId,

}

// se arega el listener
$("#save-post").click ((event)=>{
    event.preventDefault()
    getPostsText()
})
   

const savePostsData = comment => {
    $.ajax({
        method: "POST",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/DesafioTeam3/Posts/.json",
        data: JSON.stringify(comment),
        success : response => {
            console.log(response)
            printPosts (getPostsData())
            
            
        },
        error : error => {
            console.log(error)
        }
    })
}

const getPostsData = () => {
    let dataImported;
    $.ajax({
        method: "GET",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/DesafioTeam3/Posts/.json",
        success: response => {
            dataImported = response
            console.log (dataImported)
        },
        error: error => {
            console.log(error)
        },
        async: false
    }) 
    return dataImported
}   

const innerButton =()=> $(".inner-arrow").click ((event)=>{
    event.preventDefault()
    console.log ("click")
    getPostsText()
   
})


// funcion para pintar la tabla
const printPosts = data => {

    $("#reply-section").empty()

    for (key in data) {

        let {name, postText, url}=data[key]


    $("#post-section").prepend(`
        <div id="reply-section">
            <div class="container ">
                <div class="row border p-3">
                    <div class="col-2">
                        <div style="height: 1rem, widht: 2rem" >
                        <img style="object-fit: contain" class="w-100  d-inline-block border" src=${url}  alt="">
                        </div>
                    </div>
                    <div class="col-10">
                        <h3>${name} </h3>
                        <p>${postText}</p>
                        <button data-data-key=${key} id="delete-comment" class="btn btn-outline-danger mt-3"  type="submit">DELETE</button>
                    </div>
                </div>
                <div class="row border p-3">
                <div class="col-9 ">
                    <form>
                        <div class="form-group">
                        <label for="exampleInputEmail1">Publica un comment!</label>
                        <input type="email" class="form-control" id="#comments-input" aria-describedby="emailHelp">
                        
                        </div>
                    </form>
                </div>
                <div class="col-3 d-flex justify-content-center align-items-center">
                    
                    <button id="post-comment" class="btn btn-outline-success mt-3"  type="submit">COMMENT</button>
                </div>
                </div>
                
                <div data-post-id=${postId} class="replies-wrapper">

            </div>
        </div>`)

    }
    const imprime = () => {
        console.log("lala")
    }

   let abc = document.querySelectorAll("#post-comment")
   abc.forEach( item => {
       item.addEventListener("click", imprime)
    })

}


const deletePostsData = () => {
    $.ajax({
        method:"DELETE",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/DesafioTeam3/Posts/.json",
        success: response => {
            console.log( response)
        },
        error: error => {
            console.log( error )
        }
    })
}

//deletePostsData()

//document.getElementById("delete-post").addEventListener("click",deleteData )



var ID = function () {

return  Math.random().toString(36).substr(2, 9);
};
var privateName = ID();
    var o = {}
   o.privateName = ID();
console.log(o)


$("#print-posts-button").click ((event)=>{
    event.preventDefault()
    printComments (getData())
})

