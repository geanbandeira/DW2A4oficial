function Brasil(jogador, time){
    this.jogador = jogador;
    this.time = time;
}
Brasil.prototype.saudacao = function(){
    console.log(`Olá sou o ${this.jogador}`);

};
    const jogador1 =  new Brasil('Gean Carlos');
    jogador1.saudacao();

