//g. Verificar o mês pelo número(Switch case)

var prompt = require('prompt-sync')();

let mes = Number(prompt("Digite um  numero do mes: "));

switch(mes){
    case 1:
        console.log("O mes escolhido foi: janeiro ");
    break;
    case 2:
        console.log("O mes escolhido foi: fevereiro ");
    break;
    case 3:
        console.log("O mes escolhido foi: março ");
    break;
    case 4:
        console.log("O mes escolhido foi: abril ");
    break;
    case 5:
        console.log("O mes escolhido foi: maio ");
    break;
    case 6:
        console.log("O mes escolhido foi: junho ");
    break;
    case 7:
        console.log("O mes escolhido foi: julho ");
    break;
    case 8:
        console.log("O mes escolhido foi: agosto ");
    break;
    case 9:
        console.log("O mes escolhido foi: setembro ");
    break;
    case 10:
        console.log("O mes escolhido foi: outubro ");
    break;
    case 11:
        console.log("O mes escolhido foi: novembro ");
    break;
    case 12:
        console.log("O mes escolhido foi: dezembro ");
    break;
    
    default:
        console.log("Dado Invalido!");
}