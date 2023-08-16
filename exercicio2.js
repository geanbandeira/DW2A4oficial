/*Pergunta:
Um robô deve caminhar sobre um tabuleiro quadriculado. As dimensões do tabuleiro são 10 x 10 metros e cada quadriculado, 1 x 1 metro.
Elabore uma classe que represente o robô e os seus movimentos, considerando que:
- Os movimentos do robô não podem ultrapassar os limites do tabuleiro;
- O robô terá dois tipos de movimentos: andar para frente, sendo 1 passo por vez e girar no sentido horário 90 graus.
- O robô deverá sinalizar quando ele atingir qualquer limite do tabuleiro.
Escolha um ponto de partida quando o robô for instanciado para iniciar os movimentos.*/
class Robo{
    constructor(frente, direita, esquerda){
        this.frente= frente;
        this.direita= direita;
        this.esquerda=esquerda;
    }
}

class Movimento{

}

function casasIguais(a, b, c, d, e, f, g, h, i, j){
    var casaA = $("#casa"+a);
    var casaB = $("#casa"+b);
    var casaC = $("#casa"+c);
    var casaA = $("#casa"+d);
    var casaB = $("#casa"+e);
    var casaC = $("#casa"+f);
    var casaA = $("#casa"+g);
    var casaB = $("#casa"+h);
    var casaC = $("#casa"+i);
    var casaA = $("#casa"+j);

    var bgA = $("#casa"+a).css("background-image");
    var bgB = $("#casa"+b).css("background-image");
    var bgC = $("#casa"+c).css("background-image");
    var bgD = $("#casa"+d).css("background-image");
    var bgA = $("#casa"+e).css("background-image");
    var bgB = $("#casa"+f).css("background-image");
    var bgC = $("#casa"+g).css("background-image");
    var bgD = $("#casa"+h).css("background-image");
    var bgA = $("#casa"+i).css("background-image");
    var bgB = $("#casa"+j).css("background-image");
    var bgC = $("#casa"+k).css("background-image");
    var bgD = $("#casa"+l).css("background-image");
}
