import { Carro, Concessionaria } from "./concessionaria.js";

const carro1 = new Carro ("Golf", "Volkswagen", "7GTH-789", 2019);
const carro2 = new Carro ("Urus", "Lamborghini", "HJEE-110", 2023);
const carro3 = new Carro ("Bugatti Veyron", "Bugatti", "TTTA-009", 2022);

const concessionaria = new Concessionaria();
concessionaria.adicionarCarro(carro1);
concessionaria.adicionarCarro(carro2);
concessionaria.adicionarCarro(carro3);

//carro1.alugar();

concessionaria.listarcarros();