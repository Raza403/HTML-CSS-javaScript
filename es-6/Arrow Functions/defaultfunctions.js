'use strict';

let getProduct = function (productId = 100, type = 'software'){
    console.log(`${productId} , ${type}`);
}

getProduct(undefined,'hardware');

 let getTotal = function(price,tax = price * 0.07){
     console.log(price+tax);
 }
 getTotal(5.00); 

 let price = (price=adjust,adjust=1) => console.log(price+adjust);
 price(5.00);

 let total = new Function("price = 20","return price;");
 console.log(total());