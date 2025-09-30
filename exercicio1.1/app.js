var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
    }
    Pessoa.prototype.apresentar = function () {
        return "Ol\u00E1, meu nome \u00E9: ".concat(this.nome);
    };
    return Pessoa;
}());
document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("nomeInput");
    var button = document.getElementById("btnApresentar");
    var mensagem = document.getElementById("mensagem");
    button.addEventListener("click", function () {
        var nome = input.value.trim();
        if (nome) {
            var pessoa = new Pessoa(nome);
            mensagem.textContent = pessoa.apresentar();
        }
        else {
            mensagem.textContent = "Por favor, digite um nome.";
        }
    });
});
