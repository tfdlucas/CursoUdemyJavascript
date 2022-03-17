/*

OPERADORES LÓGICOS

&& -> AND -> E = Todas as expressões precisam ser verdadeiras para retornar 'true'
|| -> OR -> OU
! -> NOT -> NÃO

São avaliados em Falso:
0, string vazia, null, undefined, NaN

*/

const expressaoAnd = true & true & true & true;
const expressaoOr = false || true;

console.log(expressaoAnd);
console.log(expressaoOr);