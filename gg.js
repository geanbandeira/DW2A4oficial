class Cliente{
    constructor(nome, cpf, conta, agencia, cartaodecredito, emprestimos, investimentos){
        this.nome = nome;
        this.cpf = cpf;
        this.conta = conta;
        this.agencia = agencia;
        this.cartaodecredito = cartaodecredito;
        this.emprestimos = emprestimos;
        this.investimentos = investimentos;
    }
    }

    class Conta {
        constructor(saldoInicial, cliente, agencia) {
            this.saldo = saldoInicial;
            this.cliente = cliente;
            this.agencia = agencia;
        }
        sacar(valor) {
            if (this.saldo >= valor) {
                this.saldo -= valor;
                return valor;
            }
        }
        depositar(valor) {
            if (valor <= 100) {
                return;
            }
            this.saldo += valor;
        }
        transferir(valor, conta) {
            const valorSacado = this.sacar(valor);
            conta.depositar(valorSacado);
        }
    }
    

const cliente1 = new Cliente("Serjin Cavalcante Ferreira", 11122233309, 125644, 1001, "ativo", "liberado", "perfil arrojado");
const contaCorrenteSerjin = new Conta(1001, cliente1);

contaCorrenteSerjin.depositar(400);
contaCorrenteSerjin.sacar(200);

const contaPoupanca = new Conta(20, cliente1, 1001);

console.log(contaPoupanca);
console.log(contaCorrenteSerjin);
//

const cliente2 = new Cliente("Marcelin Pereira Sampaio", 12654896155, 398511);
const contaCorrenteMarcelin = new Conta(1001, cliente2);
contaCorrenteMarcelin.depositar(1400);
contaCorrenteMarcelin.sacar(0);

const contaPoupanca2 = new Conta(300, cliente2, 1001);

console.log(contaPoupanca2);
console.log(contaCorrenteMarcelin);



    /*get ExibirSaldo(){
        return this.valorsaldo();
    }

        valorsaldo(){
            return this.saldo;
        }
    }

    const dinheiro = new this.saldo(100);
    console.log(dinheiro.ExibirSaldo);

*/





/*
class Conta{
    constructor(nome, cpf, senha){
        this.nome = nome;
        this.cpf = cpf;
        this.senha = senha;
    }
}

class Saldo{
        constructor(saldoInicial, cliente, agencia){
            this.saldo = saldoInicial
            this.cliente = cliente
            this.agencia = agencia
        }
    
    }

    class transferencia{
        constructor(valor, metodo)
    }*/