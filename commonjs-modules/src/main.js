//solicitando, requerindo o arquivo

//destructuring
const {getFullName, getProductLabel, productType} = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");

async function main() {
    console.log('carrinho de compras:');
    getFullName(408, "mousepad");
    getProductLabel("teclado");
    
    console.log(productType);
    database.conectToDatabase("oi");
    
    
}

main();