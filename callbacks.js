const wall = {
    built: false,
    flatten: false,
    painted: false,
}

function build (wall, callback) {
    setTimeout (()=> {
        wall.built = true
        callback (false, wall)   
    }, 1000)
}

function flatten (wall, callback) {
    setTimeout (()=> {
        wall.flatten = true
        callback (false, wall) 
    }, 1000)
}

function paint (wall, callback) {
    setTimeout (()=> {
        wall.painted = true
        callback (false, wall)
    }, 1000)
}

// const builtWall = build (wall)
// const flattenWall = flatten (builtWall)
// const paintedtWall = paint (flattenWall)
// console.log ('Built Wall', builtWall)

//  build (wall, (error, builtWall)=> {
//     console.log ('Muro construido', builtWall)

// })

// flatten (wall, (error, flattenWall)=> {
//     console.log ('Muro aplanado', flattenWall)
// })

// paint (wall, (error, paintedWall)=> {
//     console.log ('Muro pintado', paintedWall)
// })

//Definiendo la función 'toBuild'

// function toBuild (error, builtWall) { 
//     console.log ('Muro construido: ', builtWall)
// }

// build (wall, toBuild)

build (wall, (error, builtWall)=> {
    if (error){
        console.log ('No se pudo construir')
        return       //Termina de ejecutar la función  (Salida temprana)          
    }
    console.log ('Muro construido: ', builtWall)
    flatten (builtWall, (error, flattenWall)=> {
            if (error) {
                console.log ('No se pudo aplanar')
                return            
            }

            console.log ('Muro pintado', paintedWall)
            paint (flattenWall, (error, paintedWall)=> {
                   if (error) {
                       console.log ('No se pudo pintar')
                       return
                   }
                   console.log ('Muro pintado', paintedWall)
                })
        })
})