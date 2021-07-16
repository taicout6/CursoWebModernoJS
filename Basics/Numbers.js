console.log('Test'); // Ctrl+Alt+N roda o node.

const pesoNota1 = 1.0;
const pesoNota2 = Number('2.5');

console.log(pesoNota1, pesoNota2);
console.log(Number.isInteger(pesoNota1));
console.log(Number.isInteger(pesoNota2));

const avaliacao1 = 9.57;
const avaliacao2 = 5.49;

const total = (avaliacao1 * pesoNota1) + (avaliacao2 * pesoNota2);
const media = total / (pesoNota1 + pesoNota2);

console.log(media.toFixed(2));
console.log(typeof media);
console.log(typeof Number);

/* alguns cuidados:
* console.log(7 / 0); Infinity
* console.log('10' / 2); 5
* console.log('Show' * 2); NaN
* console.log(0.1 + 0.7); 0.799...
* console.log(10.toString()); error
* console.log((10.345).toFixed(2)); 10.35
*/

const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);

console.log(area.toFixed(2));
console.log(typeof Math);
