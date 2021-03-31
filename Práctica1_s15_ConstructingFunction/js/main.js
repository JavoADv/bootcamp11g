
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


}

const leche = new Product ('Leche', 'Deslactosada', 20, 'Lacteos', 25,'NNNN',[21, 23, 23, 23, 24, 24.50], "2021/11/12")



console.log (leche)
leche.priceTotal ()
























