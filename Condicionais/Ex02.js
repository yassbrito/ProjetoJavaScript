//b. Verificar se o usuario pode tirar carteira de motorista
var prompt = require('prompt-sync')();
let idade = prompt("Ola, digite sua idade:");

if(idade >=18){
    console.log("voce podera tirar a carteira!")
}else if(idade < 18){
    console.log("Voce nao podera tirar a carteira!")
}else{
    console.log("Essa informacao nao eh valida!")
}