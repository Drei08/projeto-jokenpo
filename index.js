const tagVoce = document.getElementById('img-voce');
const tagComputador = document.getElementById('img-computador');
const tagResult = document.getElementById('result');

const tagSomaJ = document.getElementById('somaJ');
const tagSomaC = document.getElementById('somaC');
const tagEmp = document.getElementById('emp');

let somaJ = 0;
let emp = 0;
let somaC = 0;

function jogar(escolhaUsuario) {

    const opcoes = ['pedra', 'papel', 'tesoura'];

    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    const resultado = verificarResultado(escolhaUsuario, escolhaComputador);
    tagResult.textContent = resultado;
   
    tagVoce.src = `${escolhaUsuario}.png`;
    tagComputador.src = `${escolhaComputador}.png`;

    tagSomaJ.textContent = somaJ;
    tagSomaC.textContent = somaC;
    tagEmp.textContent = emp;

}

function verificarResultado(jogador, computador) {

    if (jogador === computador){
        
         emp += 1;
         return "Empate!";
    }

    else if 
        ((jogador === "pedra" && computador === "tesoura") ||
        (jogador === "papel" && computador === "pedra") ||
        (jogador === "tesoura" && computador === "papel")){

        somaJ += 1;
        return "Você ganhou!";
    }

    else
        somaC += 1;
        return "Computador ganhou!";
}