class Pessoa {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  apresentar(): string {
    return `Olá, meu nome é: ${this.nome}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("nomeInput") as HTMLInputElement;
  const button = document.getElementById("btnApresentar") as HTMLButtonElement;
  const mensagem = document.getElementById("mensagem") as HTMLParagraphElement;

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
