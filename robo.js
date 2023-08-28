const linhas = 10;
const colunas = 10;

let roboLinha = 9;
let roboColuna = 4;
let direcao = 'emfrente';

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

function roboAndou(rastro) {
  for (let i = 0; i < rastro.length; i++) {
    console.log(rastro[i].join(' '));
  }
}

function moverFrente() {
  let novaLinha = roboLinha;
  let novaColuna = roboColuna;

  switch (direcao) {
    case 'emfrente':
      novaLinha--;
      break;
    case 'direita':
      novaColuna++;
      break;
    case 'parabaixo':
      novaLinha++;
      break;
    case 'esquerda':
      novaColuna--;
      break;
  }

  if (novaLinha >= 0 && novaLinha < linhas && novaColuna >= 0 && novaColuna < colunas) {
    roboLinha = novaLinha;
    roboColuna = novaColuna;
  } else {
    console.log("Limite do tabuleiro alcançado!");
  }
}

function girarHorario() {
  switch (direcao) {
    case 'emfrente':
      direcao = 'direita';
      break;
    case 'direita':
      direcao = 'parabaixo';
      break;
    case 'parabaixo':
      direcao = 'esquerda';
      break;
    case 'esquerda':
      direcao = 'emfrente';
      break;
  }
}

function main() {
  const rastro = criarQuadrado(linhas, colunas);

  rastro[roboLinha][roboColuna] = 'R';

  console.log('Tabuleiro inicial:');
  roboAndou(rastro);

  moverFrente();
  moverFrente();
  girarHorario();
  girarHorario();
  moverFrente();

  rastro[roboLinha][roboColuna] = 'R';

  console.log('Tabuleiro após os movimentos:');
  roboAndou(rastro);
}

main();
