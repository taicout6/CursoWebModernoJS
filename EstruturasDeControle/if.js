function soBoaNoticia(nota) {
  if (nota > 7) {
    console.log('Aprovado');
  }
}

soBoaNoticia(8.1);
soBoaNoticia(6);

function seForVerdadeiroEuFalo(value) {
  if (value) {
    console.log('É verdadeiro');
  }
}

seForVerdadeiroEuFalo();
seForVerdadeiroEuFalo(null);
seForVerdadeiroEuFalo(undefined);
seForVerdadeiroEuFalo(NaN);
seForVerdadeiroEuFalo('');
seForVerdadeiroEuFalo(0);
seForVerdadeiroEuFalo(-1);
seForVerdadeiroEuFalo('  ');
seForVerdadeiroEuFalo('?');
seForVerdadeiroEuFalo([]);
seForVerdadeiroEuFalo([1, 2]);
seForVerdadeiroEuFalo({});







