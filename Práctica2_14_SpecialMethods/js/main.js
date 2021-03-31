var contriesArray = [
    {
        name: "Mexico",
        topLevelDomain: [
            ".mx"
        ],
        alpha2Code: "MX",
        alpha3Code: "MEX",
        callingCodes: [
            "52"
        ],
        capital: "Mexico City",
        altSpellings: [
            "MX",
            "Mexicanos",
            "United Mexican States",
            "Estados Unidos Mexicanos"
        ],
        region: "Americas",
        subregion: "Central America",
        population: 122273473,
        latlng: [
            23,
            -102
        ],
        demonym: "Mexican",
        area: 1964375,
        gini: 47,
        timezones: [
            "UTC-08:00",
            "UTC-07:00",
            "UTC-06:00"
        ],
        borders: [
            "BLZ",
            "GTM",
            "USA"
        ],
        nativeName: "México",
        numericCode: "484",
        currencies: [
            {
                code: "MXN",
                name: "Mexican peso",
                symbol: "$"
            }
        ],
        languages: [
            {
                iso639_1: "es",
                iso639_2: "spa",
                name: "Spanish",
                nativeName: "Español"
            }
        ],
        translations: {
            de: "Mexiko",
            es: "México",
            fr: "Mexique",
            ja: "メキシコ",
            it: "Messico",
            br: "México",
            pt: "México",
            nl: "Mexico",
            hr: "Meksiko",
            fa: "مکزیک"
        },
        flag: "https://restcountries.eu/data/mex.svg",
        regionalBlocs: [
            {
                acronym: "PA",
                name: "Pacific Alliance",
                otherAcronyms: [],
                otherNames: [
                    "Alianza del Pacífico"
                ]
            },
            {
                acronym: "NAFTA",
                name: "North American Free Trade Agreement",
                otherAcronyms: [],
                otherNames: [
                    "Tratado de Libre Comercio de América del Norte",
                    "Accord de Libre-échange Nord-Américain"
                ]
            }
        ],
        cioc: "MEX" //Insertar aquí resto de array.
    }, 

]

 function getContinent () {
  
    contriesArray.forEach(country => {
    let filteredCountry = country.region
    //console.log (filteredCountry)
});

}


//const getCountry = (names) => {
    
        const resultName = contriesArray.find ( item => item === "Mexico" )
        console.log (typeof resultName)
        console.log (resultName)
       
    
//}

//getCountry ()


//let countryName = contriesArray.reduce ((accum, current) => {})

//let getContinent = contriesArray.filter ((country, index) => country === "MEX")
//console.log (getContinent)





    




/*
    -Crear una función que me permita agrupar los países en la lista con base en su continente ( region )
    -Obtener el total de población de los países enlistados
    -Crear una fución que permita conocer el porcentaje de población de cada país vs la población total obtenida en el paso anterior
    -Crear una función que reciba algún alpha2Code , y me entregue un string con el nombre del país( en español ), población total, y área, en caso de que el país no se encuentre en la lista, devolver un mensaje que lo indique.
        input:      "CN"
        output:     "El país es China, su población es de 1377422166 habitantes y su área total es de 9640011 km2"
    -Crear una función que permita ingresar el alpha2Code de dos países, y me indique cuál de los dos países tiene mayor densidad de población ( cantidad de habitantes / km2 )
        input: "MX", "CN"
        output: El país con mayor densidad de población entre México y China es China con X habitantes por metro cuadrado
    -Crear una función que me permita saber cuál es el país de la lista con mayor población y cuál es el país con menor población
*/