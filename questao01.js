let totalItens = 47;
let itensPorCaixa = 6;
let dimensao = 4;
let sobra = totalItens % itensPorCaixa;

console.log("Itens: " + totalItens);
console.log("Caixas completas: " + ((totalItens - sobra) / itensPorCaixa));
console.log("Itens sobrando: " + sobra);
console.log("Posições no depósito: " + dimensao ** 3);
