const linhas = 10;
const colunas = 10;

// Inicio do robô
let roboLinha = 0;
let roboColuna = 0;
let direcao = "up";

// Função criar o tabuleiro 
function criarQuadrado(linhas, colunas) {
  const rastro = [];
  for (let i = 0; i < linhas; i++) {
    const linha = [];
    for (let j = 0; j < colunas; j++) {
      linha.push('.');
    }
    rastro.push(linha);
  }
  return rastro;
}

// Função imprimir o tabuleiro
function roboAndou(rastro) {
  for (let i = 0; i < rastro.length; i++) {
    console.log(rastro[i].join(' '));
  }
}

// Função para mover o robô para frente
function moverFrente(){
  let novaLinha = roboLinha;
  let novaColuna = roboColuna;

  switch(direcao){
    case 'seguir':
      novaLinha--;
      break;
    case 'direita':
      novaColuna++;
      break;
    case 'baixo':
      novaLinha++;
      break;
    case 'esquerda':
      novaColuna--;
      break;
  }

  if(novaLinha < 0 & )

}





function girarHorario(){
  switch(direcao){
    case'seguir':
      direcao = 'direita';
      break;
    case 'direita':
      direcao = 'baixo';
      break;
    case 'baixo':
      direcao = 'esquerda';
      break;
    case 'esquerda':
      direcao= 'seguir';
      break;
    

  }
}


// Função main
function main() {
  const rastro = criarQuadrado(linhas, colunas);

  // Coloca o robô na posição inicial
  rastro[roboLinha][roboColuna] = 'R';

  // Imprime o tabuleiro inicial
  console.log('Tabuleiro inicial:');
  roboAndou(rastro);

  // Movimentos do robô
  //moverFrente();
  moverFrente();
  girarHorario();
  moverFrente();
  


  // Posição do robô atualizada
  rastro[roboLinha][roboColuna] = 'R';

  // Resultado do robo no tabuleiro
  console.log('Tabuleiro após os movimentos:');
  roboAndou(rastro);
}

main();
