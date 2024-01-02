//Sem JSON
/*
let nome = "Marina"
let idade = 30
let produtos = ["Mouse", "Teclado", "Monitor"]
let valores = [29.99, 89,99, 250.99]

genetateInvoice(nome, produtos, valores, idade)

function genetateInvoice(nome, produtos, valores, idade){
  console.log("O comprador é " + nome)
  console.log("O produto é " + produtos[0])
  console.log("----------------------------")
  console.log("O valor é " + valores[0])
  console.log("A idade é " + idade)
}
*/

//Com JSON
//Se comunicar entre uma aplicação e outra
let invoice = {
    nome: "Marina",
    idade: 30,
    produtos: {
      //Colocar o valor junto especificando o indice da posiçao
      0: ["Mouse", 29.99],
      1: ["Teclado", 89,99],
      2: ["Monitor", 250,99]
    }
  }
  
  console.log(invoice)
  
  //Somente 1 informação
  console.log(invoice.produtos)
  
  genetateInvoice(invoice)
  
  function genetateInvoice(invoice){
    console.log("O comprador é " + nome)
    console.log(`O comprador é ${invoice.nome}`)
  
    console.log("O produto é " + produtos[0])
    console.log(`Os produtos são ${invoice.produtos}` )
  
    //Para mostrar todos os produtos
    for (let i in invoice.produtos){
      //Pega o valor do index
      let [nomeProduto, precoProduto] = invoice.produtos[i]
      console.log(`${nomeProduto}: R$ ${precoProduto}`)
    }
  
    console.log("----------------------------")
  
    console.log("A idade é " + idade)
    console.log(`A idade é ${invoice.idade}`)
  
    console.log("O valor é " + valores[0])
}