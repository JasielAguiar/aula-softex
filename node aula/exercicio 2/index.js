class Carro {
	constructor(marca, modelo, ano) {
		this.marca = marca;
		this.modelo = modelo;
		this.ano = ano;
	}

	apresentar() {
		return `Esse caro é da ${this.marca} do modelo ${this.modelo} do ano ${this.ano};`;
	}
}
const aluno1 = new Carro("Audi", "x1", 2025);
console.log(aluno1.apresentar());
