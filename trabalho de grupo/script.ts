// Classe Aluno com propriedades e método para verificar aprovação
class Aluno {
  constructor(
    public nome: string,
    public idade: number,
    public nota: number
  ) {}

  verificarAprovacao(): string {
    return this.nota >= 7 ? "Aprovado" : "Reprovado";
  }
}

// Array para armazenar os alunos
const alunos: Aluno[] = [];

const form = document.getElementById("formAluno") as HTMLFormElement;
const lista = document.getElementById("listaAlunos") as HTMLTableSectionElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  const nomeInput = document.getElementById("nome") as HTMLInputElement;
  const idadeInput = document.getElementById("idade") as HTMLInputElement;
  const notaInput = document.getElementById("nota") as HTMLInputElement;

  const nome = nomeInput.value.trim();
  const idade = parseInt(idadeInput.value);
  const nota = parseFloat(notaInput.value);

  if (!nome || isNaN(idade) || isNaN(nota) || nota < 0 || nota > 10) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  const aluno = new Aluno(nome, idade, nota);
  alunos.push(aluno);
  atualizarLista();
  form.reset();
});

function atualizarLista(): void {
  lista.innerHTML = "";
  alunos.forEach((aluno) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${aluno.nome}</td>
      <td>${aluno.idade}</td>
      <td>${aluno.nota.toFixed(1)}</td>
      <td>${aluno.verificarAprovacao()}</td>
    `;
    lista.appendChild(row);
  });
}

