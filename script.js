const inputText = document.getElementById('inputText');
const display = document.getElementById('display');
const speedInput = document.getElementById('speed');
const startButton = document.getElementById('start');
const infoIcon = document.getElementById('infoIcon');
const instructions = document.getElementById('instructions');
const closeInstructions = document.getElementById('closeInstructions');

let words = [];
let currentIndex = 0;
let interval = null;

// Exibir instruções ao clicar no ícone
infoIcon.addEventListener('click', () => {
  instructions.style.display = 'block';
});

// Fechar instruções
closeInstructions.addEventListener('click', () => {
  instructions.style.display = 'none';
});

// Iniciar leitura dinâmica
startButton.addEventListener('click', () => {
  const text = inputText.value.trim();
  if (!text) {
    alert('Por favor, insira algum texto!');
    return;
  }

  words = text.split(/\s+/);
  currentIndex = 0;

  const speed = 1000 / speedInput.value; // Converte palavras por segundo em intervalo de milissegundos

  if (interval) {
    clearInterval(interval);
  }

  interval = setInterval(() => {
    if (currentIndex >= words.length) {
      clearInterval(interval);
      display.textContent = 'Fim!';
    } else {
      display.textContent = words[currentIndex];
      currentIndex++;
    }
  }, speed);
});
