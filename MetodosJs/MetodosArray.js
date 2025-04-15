//.length() => tamanho

//let fruta = ["Maça", "banana", "Kiwi", "Carambola", "Morango", "Ameixa", "Abacaxi", "Abacate", "Jabuticaba", "Seriguela", "Embu",
//    "Caqui", "Uva verde", "uva roxa"];

//console.log(frutas.length);


// --------------------------------------------------------------------------------------------//


// .reverse = reverte o nosso array
//let numeros = [70, 100, 120, 1000];

//numeros.reverse();
//console.log(numeros);


//-------------------------------------------------------------------------------------------------//


//let nomes = ["Anna", "Pedro", "Kaue", "Clara"];

// .push() => Adiciona no final
//nomes.push(Yasmin);

//.unshift() => adiciona no inicio
//nomes.unshift(emilly);

//.pop() => remover no final
//nomes.pop();

//.shift() => remove do inicio
//nomes.shift();

//console.log(nomes);


//---------------------------------------------------------------------------------------------------//


//let nomesAnimais = ["Julie", "Anna banana", "Max", "Meg", "Sol", "Mel"];

//. incluides() => se existe no array, se existir ele retornara true

//console.log(nomesAnimais.includes("Bob"));


//---------------------------------------------------------------------------------------------------------//

//let valores = [ 30, 55, 90, 66];
//quero os valores maiores que 50

//let maiores = valores.filter(num => num > 50);

//console.log(maiores);

//----------------------------------------------------------------------------------------------------------//

//.map() => O método Array.map() permite a você iterar sobre o array e modificar seus elementos usando uma 
// função de callback. A função de callback será executada em cada um dos elementos do array.

//Listar de nomes de alunos e notas
//let alunos = [
  //  {nome: "Anna", nota: 8},
  //  {nome: "yasmin", nota: 10},
 //   {nome: "Clara", nota: 9},
  //  {nome: "Emilly", nota: 10},
  //  {nome: "Brenda", nota: 8},
   // {nome: "Julia", nota: 7},
  //  {nome: "Rikelme", nota: 10},
  //  {nome: "Matheus", nota: 9},
  //  {nome: "Vinicius", nota: 8},
//];
//lista de nomes
//let alunoNomes = alunos.map(aluno => aluno.nome);

//console.log(alunoNomes);

//Funcao:
//let AlunoNomesDois = alunos.map(function(aluno){
  //  return aluno.nome;
//})

//let alunoNota = alunos.map(aluno => aluno.nota);

//console.log(alunoNomesDois);

//-------------------------------------------------------------------//

//2. criar um array com mensagem personalizadas
//let nomes = ["Yasmin", "Julia", "Anna", "Pedro"];

//ola Anna

//let mensagem = nomes.map(itemDoArrayNomes => `Ola, ${itemDoArrayNomes}`);

//console.log(mensagem);

//---------------------------------------------------------------------------//
//3. pegar apenas os primeiros caracteres dos nomes

//let nomes = ["Yasmin", "Julia", "Anna", "Pedro"];
//let inicialNomes = nomes.map(element => element[0]);
//console.log(inicialNomes);

//-----------------------------------------------------------------------------------//

let emails = [
    "kaue@gmail.com", "pedro@hotmail.com", "julia@outlook.com"
]

let dominios = emails.map(element => element.split("@")[0]);
console.log(dominios);
