
function Product (name, description, price, classification, percentage, sellPrice, lastSixMonthsPrice, lastWeekSells, expiration) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.classification = classification;
    this.percentage = percentage;
    this.sellPrice = sellPrice //this.priceTotal ();
    this.lastSixMonthsPrice = lastSixMonthsPrice;
    this.lastWeekSells = lastWeekSells;
    this.expiration = expiration; 
    this.priceTotal = function (){
        let multiplication = this.price * (this.percentage/100)
        let add = multiplication + this.price
        return add
    }

    this.getExpirationDate = function (){

        var today = new Date ()

        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()

        var day = expiration.getDate () - today.getDate ()

        var month = expiration.getMonth () - today.getMonth ()

        var year = expiration.getFullYear () - today.getFullYear ()

        var newDate = `La fecha de caducidad es en: ${day} días - ${month} meses - ${year} años`

        return newDate

    }


}

const leche = new Product ('Leche', 'Deslactosada', 20, 'Lacteos', 25,'NNNN',[21, 23, 23, 23, 24, 24.50], 30, "2021/11/12")



console.log (leche)
leche.priceTotal ()

var dateTest = ("2021/12/14")
//var dateTest2 = ("2021/01/29")

var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()

 var item = new Date (dateTest)

console.log (date)

 var day = item.getDate () - today.getDate ()

 var month = item.getMonth () - today.getMonth ()

 var year = item.getFullYear () - today.getFullYear ()

 var newDate = `La fecha de caducidad es en: ${day} días - ${month} meses - ${year} años`

 console.log (newDate )
























