const notas = [6.7, 7.4, 9.9, 8.2, 7.7];

for (let index in notas) {
    console.log(index, notas[index]);
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 59
};

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}
