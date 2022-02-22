function inteiroAleatorio(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = 0;

do {
  opcao = inteiroAleatorio(0, 10);
  console.log(`Opção escolhida foi ${opcao}.`);
} while (opcao != 0)

console.log('Fim!');