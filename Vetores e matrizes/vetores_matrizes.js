/* 
let pokemon1 = "Pikachu"
let pokemon2 = "Bulbasaur"
let pokemon3 = "Charmander"
let pokemon4 = "Squirtle"
let pokemon5 = "Caterpie"
*/

//Vetor (array)
let pokemon = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle", "Caterpie"]

  //Imprimir todos
console.log(pokemon)

  //Imprimir 1 elemento pelo número do índice, que começa com 0
console.log(pokemon[0])

  //Remover o último elemento
pokemon.pop()

  //Remover o primeiro elemento
pokemon.shift()

//Matriz (vetor bidimensionais)
let time = [
  ["Pikachu", "M", 1],
  ["Bulbasaur", "F", 3]
]

  //Imprimir só 1 linha
console.log(time[0])

  //Imprimir só o level da 1ª linha. [linha][coluna]
console.log(time[0][2])

console.log("O pokemon " + time[1][0] + " é do sexo " + time[1][1] + " e está no level " + time[1][2])

  //Quantas posições tem a matriz
console.log(time.length)