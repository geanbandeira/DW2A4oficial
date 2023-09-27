export class Carro {
    constructor(nome, marca, placa, ano){
        this.nome = nome;
        this.marca = marca;
        this.placa = placa;
        this.ano = ano;
    }

    alugar(){
        if(!this.alugadoalugado){
            this.alugado = true;
            const dataDevolucao = new Date();
            dataDevolucao.setDate(dataDevolucao.getDate() +9);
            this.dataDevolucao= dataDevolucao;
            console.log(`Carro "${this.nome}" alugado`);
        }else{
            console.log(`O Carro "${this.nome}" já está alugado`);

        }
        
    }

    devolver(){
        if(this.alugado){
            this.alugado = false;
            this.dataDevolucao = null;
            console.log(`Carro "${this.nome}" devolvido`);
        }else{
            console.log(`Carro "${this.nome}" já esta alugado`);
        }
        }
    }

export class Concessionaria{
    constructor(){
        this.carros = [];
    }

    adicionarCarro(carro){
        this.carros.push(carro);
        console.log(`Carro "${carro.placa}" disponivel para alugar`);
    }

    listarcarros(){
        console.log("Listar Carros disponiveis para alugar");
        this.carros.forEach((carro) =>{
            const status = carro.alugado ? `Alugado ate ${carro.dataDevolucao.toDateString()}` : "Disponivel";
            console.log(`- "${carro.nome}" placa ${carro.placa} (${status})`);

        });
    }
}
