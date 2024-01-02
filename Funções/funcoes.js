//Declarar um variavel global
//Não é recomendado
var nome = "Marina"

//Para chamar todas as funções de uma vez
//Função principal
function main(){
  torrarPao()
  colocarPao()
  console.log(nome)
}

//Chamar função
torrarPao()

//Criando função
function torrarPao(){
  console.log("Torrando pão")
  
  //Chamar outra função
  colocarPao()
}

function colocarPao(){
  console.log("Preparando para colocar o pão")
  console.log("Preparado para comer")
}


//COM PARAMETROS
//Pode colocar um parametro com valor generico (sempre a ultima)
function torrar1(pao, valor = 9.99, nome = "Cliente não identificado"){

  //Coloca crase para usar as funçoes no meio (Interpolação de strings)
  console.log(`Torrada feita com ${pao} para ${nome} por R$ ${valor}`) 
}

//Os valores passados são prioridades
torrar1("Pão de leite", 6.50, "Marina")
torrar1("Pão de forma", 5.99)
torrar1("Pão com manteiga")

//Se não quiser colocar valor no parametro do meio (gambiarra)
torrar1("Pão com gergelim", undefined, "Marina")

//Não funciona por que o parametro "pao" só está no escopo da função
console.log(pao)

//Funçoes com retorno
function soma(n1, n2){
  let somatorio = n1 + n2

  //Retorna para quem chamou a funçao
  return somatorio
  /* OU
  return n1 + n2
  */
}

//Resgatar valor
let res = soma(5, 5)

console.log("O resultado da função é: " + res)




function getFirstName(name, splitChar = " "){
  //Split = separar o texto de acordo com o caracter e pegar o que estiver no indice []
  //SplitChar = se tiver outros valores separados com outros caracteres
  let firstName = name.split(splitChar)[0]

  return firstName
}

//Passa o caracter que for cortar
let userName = getFirstName("Marina-Golao-Vale", "-")
console.log("Seja bem vindo(a) " + userName)

userName = getFirstName("Marina Golao Vale", " ")
console.log("Seja bem vindo(a) " + userName)

