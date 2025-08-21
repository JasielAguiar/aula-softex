document.addEventListener('DOMContentLoaded', () =>{
const input = document.getElementById('numeero');
const btngerar = document.getElementById('btngerar');
const btnlimpar = document.getElementById('btnlimpar');
const lista = document.getElementById9('resultado');

function gerartabuada(){
const valor = Number(input.value);
lista.innerHTMl='';

if (Number.isNaN(valor)){
const li= document.createElement('li');
li.textContent = 'digite um numero valido.';
lista.appendchild(li);
return;
}

for(let i = 1; i <= 10; i++) {
const li = document.createElement('li');
li.textContent = `${valor} x ${i} = ${valor *i}`;
lista.appendchild(li);
}
}

function limpar(){
input.value = '';
lista.innerHTMl='';
input.focus();
}

btngerar.addEventListener


})