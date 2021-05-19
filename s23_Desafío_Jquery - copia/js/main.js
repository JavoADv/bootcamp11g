let postsData = {
    post1:{ /* entrada de post*/
        postId:1,/*id del post*/
        userId:2, /*id del usuario que publicó el post*/
        title:"Post 1", /*título del post*/
        content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugiat soluta beatae iste in laudantium, assumenda eligendi neque vero optio!", /*contenido del post*/
        creationDate:"14/04/2021", /*fecha de creación del post*/
        creationTime:"19:00", /*hora de creación del post*/
        coverUrl:"https://picsum.photos/id/237/768/384",  /* portada del post*/
    },

    post2:{ /* entrada de post*/
        postId:2,/*id del post*/
        userId:1, /*id del usuario que publicó el post*/
        title:"Post 2", /*título del post*/
        content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugiat soluta beatae iste in laudantium, assumenda eligendi neque vero optio!", /*contenido del post*/
        creationDate:"19/04/2021", /*fecha de creación del post*/
        creationTime:"20:00", /*hora de creación del post*/
        coverUrl:"https://picsum.photos/id/237/768/384",  
    },


    post3:{ /* entrada de post*/
        postId:3,/*id del post*/
        userId:1, /*id del usuario que publicó el post*/
        title:"Post 3", /*título del post*/
        content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam fugiat soluta beatae iste in laudantium, assumenda eligendi neque vero optio!", /*contenido del post*/
        creationDate:"10/04/2021", /*fecha de creación del post*/
        creationTime:"18:00", /*hora de creación del post*/
        coverUrl:"https://picsum.photos/id/237/768/384",  /* portada del post*/
    },
} 

let replies = {
  
    reply1:{ /*entrada de comentario*/
        userId:1, /*id del usuario que comenta*/
        postId:1, /*id del post en el que se comenta*/
        content:"Excelente post 1!", /*contenido del comentario */
        creationDate:"14/04/2021", /*fecha de creación del comentario */
        creationTime:"19:00", /*hora de creación del comentario */
    },

    reply2:{ /*entrada de comentario*/
        userId:2, /*id del usuario que comenta*/
        postId:1, /*id del post en el que se comenta*/
        content:"Excelente post 2!", /*contenido del comentario */
        creationDate:"14/04/2021", /*fecha de creación del comentario */
        creationTime:"19:00", /*hora de creación del comentario */
    },

    reply3:{ /*entrada de comentario*/
        userId:2, /*id del usuario que comenta*/
        postId:3, /*id del post en el que se comenta*/
        content:"Excelente post 3!", /*contenido del comentario */
        creationDate:"14/04/2021", /*fecha de creación del comentario */
        creationTime:"19:00", /*hora de creación del comentario */
    },

    reply4:{ /*entrada de comentario*/
        userId:1, /*id del usuario que comenta*/
        postId:3, /*id del post en el que se comenta*/
        content:"Excelente post 4!", /*contenido del comentario */
        creationDate:"14/04/2021", /*fecha de creación del comentario */
        creationTime:"19:00", /*hora de creación del comentario */
    },
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

// console.log (Object.keys (postsData))

let keysArray = Object.keys (postsData)


let postsInfo = keysArray.reduce ((accum, current) => {
    let postValue = postsData [ current ]

     return {... accum, [current] : {nuevo: "uno", viejo: "dos"}}
}, {})

console.log (postsInfo)


// keysArray.forEach(key => {
//     console.log (postsData[key])
//     });
// let completePost = []

// const createCompleteCollection = () => {
//     for (post in postsData) {
//         let postId = postsData[post].postId
//         // console.log (`El id del post es : ${postId}
//         // `)

//         // console.log (postsData[post])

//         let postObject = {... postsData[post], replies: []}

//         // console.log (postObject)

//         for (reply in replies) {
           
//             if (replies[reply].postId === postId) {
//                 let replyObject = replies[reply] 
//                 postObject.replies.push (replyObject)
//                 // console.log (replyObject)
//             } 
//         } completePost.push (postObject)
//     } 
    
//     // console.log (completePost)
// }

// console.log (completePost)

// createCompleteCollection ()

// const getRepliesPostIds = replies => {
//     for (reply in replies) {
//         console.log (replies[reply].content)
//     }
// }

// // getRepliesPostIds (replies)

// const getPostIds = posts => {
//     for (post  in posts) {
//         console.log (posts[post].postId)
//     }
// }

// // getPostIds (postsData)

// // console.log (postsData)