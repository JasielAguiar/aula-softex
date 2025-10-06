// Classe Aluno com propriedades e método para verificar aprovação
class Aluno {
  constructor(
    public nome: string,
    public idade: number,
    public nota: number
  ) {}

  // Método para verificar aprovação

  verificarAprovacao(): string {
    return this.nota >= 7 ? "Aprovado" : "Reprovado";
  }
}
// Array para armazenar os alunos
const alunos: Aluno[] = [];

const form = document.getElementById("formAluno") as HTMLFormElement;
const lista = document.getElementById("listaAlunos") as HTMLTableSectionElement;

// Evento de submissão do formulário

form.addEventListener("submit", (e) => {
  e.preventDefault();

// Obtém os valores dos campos do formulário

  const nome = (document.getElementById("nome") as HTMLInputElement).value.trim();
  const idade = parseInt((document.getElementById("idade") as HTMLInputElement).value);
  const nota = parseFloat((document.getElementById("nota") as HTMLInputElement).value);

// Validação simples dos campos

  if (!nome || isNaN(idade) || isNaN(nota) || nota < 0 || nota > 10) {
    alert("Preencha todos os campos corretamente.");
    return;
  }
// Cria um novo aluno e atualiza a lista

  const aluno = new Aluno(nome, idade, nota);
  alunos.push(aluno);
  atualizarLista();
  form.reset();
});
// Função para atualizar a lista de alunos na tabela

function atualizarLista() {
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