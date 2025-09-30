"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
	nome;
	constructor(nome) {
		this.nome = nome;
	}
	apresentar() {
		return `Olá, meu nome é: ${this.nome}`;
	}
}
document.addEventListener("DOMContentLoaded", () => {
	const input = document.getElementById("nomeInput");
	const button = document.getElementById("btnApresentar");
	const mensagem = document.getElementById("mensagem");
	button.addEventListener("click", () => {
		const nome = input.value.trim();
		if (nome) {
			const pessoa = new Pessoa(nome);
			mensagem.textContent = pessoa.apresentar();
		} else {
			mensagem.textContent = "Por favor, digite um nome.";
		}
	});
});
//# sourceMappingURL=app.js.map
