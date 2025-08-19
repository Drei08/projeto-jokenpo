const tagVoce = document.getElementById('img-voce');
const tagComputador = document.getElementById('img-computador');
const tagResult = document.getElementById('result');

function jogar(escolhaUsuario) {

    const opcoes = ['pedra', 'papel', 'tesoura'];

    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    const resultado = verificarResultado(escolhaUsuario, escolhaComputador);
    tagResult.textContent = resultado;
   
    tagVoce.src = `${escolhaUsuario}.png`;
    tagComputador.src = `${escolhaComputador}.png`;
}

function verificarResultado(jogador, computador) {

    if (jogador === computador)
         return "Empate!";

    else if 
        ((jogador === "pedra" && computador === "tesoura") ||
        (jogador === "papel" && computador === "pedra") ||
        (jogador === "tesoura" && computador === "papel")){

        return "Você ganhou!";
    }

    else
    return "Computador ganhou!";
}