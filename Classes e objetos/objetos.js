//Classe
//Padroniza o formato de uma estrutura de dados
//Se comunica dentro da aplicação

//Criar class
class formaDeBolo{

    //Sempre deverá ter o método constructor, que é uma função que recebe 2 parametros de caracteristicas
    constructor(saborMassa, saborRecheio){
      //Para guardar dentro da classe. This (esse(a)) = chamando a classe que vai receber o que está por parametro
      this.saborMassa = saborMassa
      this.saborRecheio = saborRecheio
    }
  
    //Criar métodos
    escrever(){
      console.log(`Um bolo gostoso de ${this.saborMassa} com recheio de ${this.saborRecheio}`)
    }
  }
  
  //Objeto
  //Mantem a padronização e implementa seus valores das propriedades.
  //Metodos inteligentes ou funções próprias
  
  //Instanciar um objeto é criar um novo objeto com base a uma classe
  //Vazio porque sempre que construir ele, tem que passar os 2 parametros da classe
  let boloFesta = new formaDeBolo("Chocolate", "Nutella")
  
  let boloCasamento = new formaDeBolo("Baunilha", "Abacaxi")
  
  //Imprimir todas as informações
  console.log(boloFesta)
  
  //Imprimir somente sabor do recheio
  console.log(boloFesta.saborRecheio)
  
  //Imprimir com o método
  boloFesta.escrever()
  boloCasamento.escrever()