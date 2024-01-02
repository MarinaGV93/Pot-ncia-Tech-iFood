class heroi{
    constructor(nome, idade, tipo){
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
    }
  
    atacar(){
      let ataque = ''
  
      switch (this.tipo){
        case 'mago':
          ataque = 'magia'
          break;
        case 'guerreiro':
          ataque = 'espada'
          break;
        case 'monge':
          ataque = 'artes marciais'
          break;
        case 'ninja':
          ataque = 'shuriken'
          break;
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
  }
  
  let ninja = new heroi("Shaolin", 30, "ninja")
  ninja.atacar()