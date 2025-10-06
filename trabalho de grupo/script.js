var Aluno = /** @class */ (function () {
    function Aluno(nome, idade, nota) {
        this.nome = nome;
        this.idade = idade;
        this.nota = nota;
    }
    Aluno.prototype.verificarAprovacao = function () {
        return this.nota >= 7 ? "Aprovado" : "Reprovado";
    };
    return Aluno;
}());
var alunos = [];
var form = document.getElementById("formAluno");
var lista = document.getElementById("listaAlunos");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var nome = document.getElementById("nome").value.trim();
    var idade = parseInt(document.getElementById("idade").value);
    var nota = parseFloat(document.getElementById("nota").value);
    if (!nome || isNaN(idade) || isNaN(nota) || nota < 0 || nota > 10) {
        alert("Preencha todos os campos corretamente.");
        return;
    }
    var aluno = new Aluno(nome, idade, nota);
    alunos.push(aluno);
    atualizarLista();
    form.reset();
});
function atualizarLista() {
    lista.innerHTML = "";
    alunos.forEach(function (aluno) {
        var row = document.createElement("tr");
        row.innerHTML = "\n      <td>".concat(aluno.nome, "</td>\n      <td>").concat(aluno.idade, "</td>\n      <td>").concat(aluno.nota.toFixed(1), "</td>\n      <td>").concat(aluno.verificarAprovacao(), "</td>\n    ");
        lista.appendChild(row);
    });
}
