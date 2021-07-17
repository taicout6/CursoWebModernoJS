function handleError(erro) {
  throw new Error('Ops, algo deu errado');
}

function printNameToUpperCase(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!');
  } catch (err) {
    handleError(err);
  }
}

const obj = { nome: 'Roberto' };
printNameToUpperCase(obj);
