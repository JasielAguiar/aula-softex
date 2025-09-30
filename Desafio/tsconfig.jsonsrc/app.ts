const input = document.getElementById('nova-tarefa') as HTMLInputElement;
const lista = document.getElementById('lista-tarefas') as HTMLUListElement;
const botaoAdicionar = document.getElementById('adicionar') as HTMLButtonElement;

botaoAdicionar.addEventListener('click', () => {
  const texto = input.value.trim();
  if (texto !== '') {
    const item = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = texto;

    const botaoConcluir = document.createElement('button');
    botaoConcluir.textContent = 'Concluir';
    botaoConcluir.className = 'concluir';
    botaoConcluir.addEventListener('click', () => {
      item.classList.toggle('concluida');
    });

    item.appendChild(span);
    item.appendChild(botaoConcluir);
    lista.appendChild(item);

    input.value = '';
  }
});