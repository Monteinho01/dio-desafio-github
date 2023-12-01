const prompt = require('prompt-sync')();

// Gere um número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let tentativas = 0;

// Função para adivinhar o número
function adivinharNumero() {
    entrada = prompt('Tente adivinhar o número (entre 1 e 100):')
    const palpite = parseInt(entrada);

    if (isNaN(palpite)) {
      console.log('Por favor, insira um número válido.');
    } else {
      tentativas++;

      if (palpite < numeroSecreto) {
        console.log('Tente um número maior.');
      } else if (palpite > numeroSecreto) {
        console.log('Tente um número menor.');
      } else {
        console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
      }

      adivinharNumero(); // Chama a função recursivamente para continuar o jogo
    }
}
adivinharNumero(); // Inicie o jogo
