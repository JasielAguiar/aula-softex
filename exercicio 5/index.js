class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  descricao() {
    return `Funcionário ${this.nome}, salário: R$ ${this.salario}`;
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, departamento) {
    super(nome, salario);
    this.departamento = departamento;
  }

    descricao() {
    return `Gerente ${this.nome}, salário: R$ ${this.salario}, departamento: ${this.departamento}`;

    }
   
   // sobrescrevendo o método descricao()
  descricao() {
    return `Gerente ${this.nome}, salário: R$ ${this.salario}, departamento: ${this.departamento}`;
  }
}
const f1 = new Funcionario("Carlos", 3000);
console.log(f1.descricao());
// Funcionário Carlos, salário: R$ 3000

const g1 = new Gerente("Ana", 8000, "Marketing");
console.log(g1.descricao());
// Gerente Ana, salário: R$ 8000, departamento: Marketing