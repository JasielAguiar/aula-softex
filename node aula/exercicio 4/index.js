class ContaBancaria {
	#saldo;

	constructor() {
		this.#saldo = 0;
	}

	depositar(valor) {
		this.#saldo += valor;
	}

	sacar(valor) {
		if (valor <= this.#saldo) {
			this.#saldo -= valor;
		} else {
			console.log("Saldo insuficiente.");
		}
	}

	verSaldo() {
		return `saldo atual: R$${this.#saldo}`;
	}
}
const conta = new ContaBancaria();

conta.depositar(100);
conta.sacar(30);
conta.verSaldo();
console.log(conta.verSaldo());
