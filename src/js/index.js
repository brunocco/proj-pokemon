/*
OBJETIVO 1 - Quando clicarmos na tecla avancar temos que mostrar o proximo cartao da lista
    - passo 1 - dar um jeito de pegar o elemento html da seta avançar.
    - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar.
    - passo 3 - fazer aparecer o próximo cartão da lista.
    - passo 4 - buscar o cartão que está selecionado e esconder.

OBJETIVO 1 - Quando clicarmos na tecla voltar temos que mostrar o cartao anterior da lista
    - passo 1 - dar um jeito de pegar o elemento html da seta voltar.
    - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
    - passo 3 - fazer aparecer o cartão anterior da lista.
    - passo 4 - buscar o cartão que está selecionado e esconder.

*/

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
function mostrarCartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.add("selecionado");
}


btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});


btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);

});