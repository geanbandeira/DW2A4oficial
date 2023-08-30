const disney = {
    nome: "Disney Pictures",
    idadecompanhia: 55,
    saudacao(){
    console.log(`Empresa ${this.nome}`);
    }
};
    const filme= Object.create(disney);
    filme.genero = "animação";
    
    filme.saudacao();
    console.log(filme.genero);