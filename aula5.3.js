function Forma() {
    this.cor = 'indefinida';
}

Forma.prototype.setCor = function(cor) {
    this.cor = cor;
};	



function Triangulo(base, altura) {
    this.base = base;
    this.altura = altura;
}

Triangulo.prototype = Object.create(Forma.prototype); 
Triangulo.prototype.constructor = Triangulo;

Triangulo.prototype.calcularArea = function() {
    return (this.base * this.altura) / 2;
};


const triangulo = new Triangulo(3, 8);

triangulo.setCor('verde');
console.log(`Área do triângulo: ${triangulo.calcularArea()}`);
console.log(`Cor do triângulo: ${triangulo.cor}`);
