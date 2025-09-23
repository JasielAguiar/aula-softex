class Retangulo {
	constructor(largura, altura) {
		this.Area = largura * altura;
		this.Perimetro = 2 * (largura + altura);
	}

	apresentar() {
		return `A area do Retangulo é ${this.Area} e o seu perimetro é ${this.Perimetro};`;
	}
}
const aluno1 = new Retangulo(5, 3);

console.log(aluno1.apresentar());
