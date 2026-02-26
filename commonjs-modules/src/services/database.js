//export default async == exportavel por padrão
exports.conectToDatabase = async (dataName) => { 
    console.log("se conectando ao banco de dados: " + dataName);
}

exports.disconnectDatabase = async () => {
    console.log("desconectando do banco de dados");
}