//FOR. 
//Repete até a quantidade que for escolhida
for (let cont = 0; cont < 4; cont++) {
    console.log("Contador número " + cont);
  }
  
  let vida = 0
  for(let i = 0; i <= 10; i++){
    vida += 1
    console.log("Agora tem " + i + " vidas")
  }
  console.log(vida + " vidas totais")
  
  //WHILE
  //Enquanto algo for verdadeiro, ele repete
  let cont1 = 0
  
  while(cont1 <= 4){
    console.log("Estude")
    cont1++
  }
  
  
  //DO WHILE
  /*
  Faça algo enquanto for verdadeiro
  É executado pelo menos 1 vez
  */
  let cont2 = 0
  
  do{
    console.log("Estude mais")
    cont2++
  }while(cont2 <= 4)