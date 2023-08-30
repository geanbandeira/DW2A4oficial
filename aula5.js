class Futebol{
    constructor(campeonato, divisao, nomedaselecao, folhasalarial){
        this.campeonato = campeonato;
        this.divisao = divisao;
        this.nomedaselecao = nomedaselecao;
        this.folhasalarial = folhasalarial;
    }

    ultimapartida(){
        console.log("Brasil x França 16:00 07/07/2026");
    }
}

selecao = new Futebol("Copa do Mundo", "1° Divisão", "Brasil", "R$ 500,000,000,00 Milhões");
console.log(selecao.campeonato);
console.log(selecao.divisao);
console.log(selecao.folhasalarial);
selecao.ultimapartida();



class Partidas{
    constructor(){
        this.jogos = [];
    }
    adicionarPartida(Partidas){
        this.partidas.push(partida);
        console.log(`Partida "${partida.nome}"`);
    }

    listarPartidas(){
        console.log("Lista de Jogos");
        console.log(`- "${partida.nome}" `);
        }
    }
