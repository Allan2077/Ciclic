let localStorageValorTotal = window.localStorage.getItem('valorTotal')
localStorageValorTotal = localStorageValorTotal.replace(/[.]/g, ',')

let localStoragevalorTempo = window.localStorage.getItem('tempo')
localStoragevalorTempo = localStoragevalorTempo.replace([12],' 1 ano ')
localStoragevalorTempo = localStoragevalorTempo.replace([24],' 2 anos ')
localStoragevalorTempo = localStoragevalorTempo.replace([36],' 3 anos ')
localStoragevalorTempo = localStoragevalorTempo.replace([48],' 4 anos ')
localStoragevalorTempo = localStoragevalorTempo.replace([60],' 5 anos ')

let nome = document.querySelector('#nome');
let mensalidade = document.querySelector('#mensalidade')
let valorTotal = document.querySelector('#valorTotal');
let tempo = document.querySelector('#valorTempo');



console.log(window.localStorage.getItem('nome'));
console.log(window.localStorage.getItem('valorTempo'));
console.log(window.localStorage.getItem('mensalidade'));
console.log(window.localStorage.getItem('valorTotal'));

nome.innerHTML = ' Olá ' + window.localStorage.getItem('nome');
mensalidade.innerHTML = 'juntando ' + localStorage.getItem('mensalidade') + ' todo mês, você ';
valorTempo.innerHTML = 'em ' + localStoragevalorTempo;
valorTotal.innerHTML = ' terá R$ ' + localStorageValorTotal;



function btn() {
    window.location.href = '../Home/index.html';
}