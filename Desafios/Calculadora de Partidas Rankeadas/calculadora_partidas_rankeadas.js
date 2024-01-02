function rank(){
    let res = partidas(11, 4)
    let nivel = ''
  
    if(res <= 10){
      nivel = 'Ferro'
    } else if(res >= 11 && res <= 20){
      nivel = 'Bronze'
    } else if(res >= 21 && res <= 50){
      nivel = 'Prata'
    } else if(res >= 51 && res <= 80){
      nivel = 'Ouro'
    } else if(res >= 81 && res <= 90){
      nivel = 'Diamante'
    } else if(res >= 91 && res <= 100){
      nivel = 'Lendário'
    } else{
      nivel = 'Imortal'
    }
  
    console.log(`O herói tem saldo de ${res} e está no nível ${nivel}`)
  }
  
  function partidas(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
   }
  
  rank()