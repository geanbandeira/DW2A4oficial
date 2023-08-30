const videogame1= {
    nome :"Playstation 10",
    lancamento: 2050,
    marca(){
        console.log(`${this.nome} da Sony`);

    }
};

videogame1.marca();
videogame1.nome;

const videogame2 = Object.create(videogame1);
videogame2.tipo = "slin";
videogame2.nome = "XgamesZero";
videogame2.marca();
console.log(videogame2.tipo);

const videogame3 = Object.create(videogame2);
videogame3.nome = "AAplay";
videogame3.crossplay = "PC, SONY MOBILE E TODOS CONSOLES DA GERAÇÃO";

videogame3.marca();
console.log(videogame3.crossplay);