//tabuleiro
const linhas = 10;
const colunas = 10;

// Inicio do robô
let roboLinha = 0;
let roboColuna = 4;

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
function moverFrente() {
  if (roboLinha < linhas - 1) {
    roboLinha++;
  }
}

// Função mover o robô para a direita
function moverDireita() {
  if (roboColuna > 0) {
    roboColuna--;
  }
}

// Função mover o robô para a esquerda
function moverEsquerda() {
  if (roboColuna < colunas - 1) {
    roboColuna++;
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
  //moverDireita();
  //moverEsquerda();
  moverFrente();
  moverFrente();
  moverFrente();
  moverFrente();
  moverEsquerda();
  moverEsquerda();
  moverDireita();
  moverFrente();
  moverFrente();
  

  // Posição do robô atualizada
  rastro[roboLinha][roboColuna] = 'R';

  // Resultado do robo no tabuleiro
  console.log('Tabuleiro após os movimentos:');
  roboAndou(rastro);
}

// Executa o programa
main();
