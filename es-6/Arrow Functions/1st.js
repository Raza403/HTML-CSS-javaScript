'use strict';
let productId = 12;
{
    let productId = 2000;
    console.log('inside block',productId);
}
console.log(productId); 


