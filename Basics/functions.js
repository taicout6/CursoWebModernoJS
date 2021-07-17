function printSum(a, b) {
  console.log(a + b);
}
printSum(5, 7);
printSum(5);
printSum();

function printSum2(a, b = 0) {
  return a + b;
}
console.log(printSum2(2, 3));
console.log(printSum2(2));
console.log(printSum2());

function printSum3(a = 0, b = 0) {
  console.log(a - b);
}
printSum3(3, 1);
printSum3(2);
printSum3();

const sum = function(a, b) {
  console.log(a + b);
};
sum(3, 6);

const sum1 = (a, b) => {
  console.log(a + b);
}
sum1(6, 9);

const sum2 = (a, b) => a + b;
console.log(sum2(7, 3));

const result = score => score >= 7 ? 'Aprovado' : 'Reprovado';
console.log(result(7));
console.log(result(6.7));
