//Criando um personagem
class pokemon{
    constructor(nome, hp, pontosAtaque, pontosDefesa, pontosAtaqueEspecial, pontosDefesaEspecial, velocidade, categoria, habilidades, tipo, fraqueza){
     this.nome = nome
     this.hp = hp
     this.pontosAtaque = pontosAtaque
     this.pontosDefesa = pontosDefesa
     this.pontosAtaqueEspecial = pontosAtaqueEspecial
     this.pontosDefesaEspecial = pontosDefesaEspecial
     this.velocidade = velocidade
     this.categoria = categoria
     this.habilidades = habilidades
     this.tipo = tipo
     this.fraqueza = fraqueza
    }
  
    estatisticas(){
      console.log(`O ${this.nome} tem: 
      ${this.hp} pontos de HP,
      ${this.pontosAtaque} pontos de ataque, 
      ${this.pontosDefesa} pontos de defesa,
      ${this.pontosAtaqueEspecial} pontos de ataque especial,
      ${this.pontosDefesaEspecial} pontos de defesa especial e
      ${this.velocidade} pontos de velocidade.`)
    }
  
    caracteristicas(){
      console.log(`O ${this.nome} é:
      da categoria ${this.categoria}, 
      sua habilidade é ${this.habilidades},
      é do tipo ${this.tipo} e 
      sua fraqueza é ${this.fraqueza}.`)
    }
  }
  
  let pikachu = new pokemon("Pikachu", "3", "4", "3", "3", "3", "6", "Rato", "Estático", "Elétrico", "Chão")
  let bulbasaur = new pokemon("Bulbasaur", "3", "3", "3", "4", "4", "3", "Semente", "Crescer demais", "Grama e Tóxico", "Fogo, Psíquico, Vôo e Gelo")
  
  pikachu.estatisticas()
  pikachu.caracteristicas()
  bulbasaur.estatisticas()
  bulbasaur.caracteristicas()