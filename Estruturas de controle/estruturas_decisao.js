//Switch/case/break/default
let fruta = 'banana';

switch (fruta) {
  case 'laranja':
    console.log('Suco de laranja');

    //Fechar o bloco
    break;

  //Mais uma palavra para o mesmo case
  case 'banana':
  case 'morango':
    console.log('Vitamina');
    break;

  case 'maça':
    console.log('Suco de maçã');
    console.log('Torta de maçã')

  //Case padrão. Não é obrigado usar
  default:
    console.log('Qualquer suco/vitamina');
}
