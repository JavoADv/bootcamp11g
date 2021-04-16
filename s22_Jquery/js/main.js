
let shapeAttribute = document.querySelectorAll('div[data-shape]')

console.log (shapeAttribute)

let circleShape = ''
let rectangleShape = ''
let squareShape = ''

let shape = shapeAttribute.forEach ((shape)=> {
    let dataShape = shape.dataset
    let shapeValue = dataShape.shape
    shapeValue === 'square' ? squareShape += shapeValue : null;
    shapeValue === 'rectangle' ?  rectangleShape += shapeValue : null;
    shapeValue === 'circle' ?  circleShape += shapeValue : null;
})

$(".controls-wrapper input[type='radio']").click( () => {
    let selection = $(".controls-wrapper input[type='radio']:checked").val()
    selection === squareShape ? $('#square').show(): $('#square').hide()
    selection === rectangleShape ? $('#rectangle').show(): $('#rectangle').hide()
    selection === circleShape ? $('#circle').show(): $('#circle').hide()
})


//$('#circle').hide()


