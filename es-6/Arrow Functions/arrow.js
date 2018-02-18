'use strict';
let getPrice = () => 5.90;
console.log(typeof getPrice);
console.log(typeof getPrice());
console.log(getPrice());

let price = count => count*4.00;
console.log(price(8));

let tax = (numb,tax) => numb * 4 * (1+tax);
console.log(tax(1,8.2));

let money = (count,tax) => {
    let price = count * 4.00;
    price *= (1+tax);
    return price;
}
console.log(money(1,8.2));

//document.addEventListener('click',function(){
  //  console.log(this);
//});

//document.addEventListener('click',() => console.log(this));

// // let invoice = {
// //     number: 123,
// //     process: () => console.log(this)
// // }
// invoice.process();

let invoice = {
    number: 123,
    process: function (){
        return () => console.log(this.number)
    }
};
let newInvoice = {
    number: 456
}
invoice.process().bind(newInvoice)();  
invoice.process().call(newInvoice);

 