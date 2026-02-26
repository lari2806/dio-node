const productType = {
    version: "digital",
    tax: "X1"
}

//todas as funções que lidam com produto
async function getFullName(codeId, productName) {
    console.log("\n");
    console.log("product: " + codeId + "--" + productName);

}
async function doBrakeLine() {
    console.log("\n");
}

async function getProductLabel(productName) {
    console.log("\n");
    console.log("product: " + productName);
}
//exportar o conteúdo
module.exports = {
    getFullName,
    getProductLabel,
    productType
}