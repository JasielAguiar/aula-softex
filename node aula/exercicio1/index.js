class Pessoa {
	constructor(nome, idade) {
		this.nome = nome;
		this.idade = idade;
	}

	apresentar() {
		return `ola! meu nome é ${this.nome} e tenho ${this.idade} anos.`;
	}
}

const aluno1 = new Pessoa("Jasiel", 38);
console.log(aluno1.apresentar());
