// Mudar A para B, B para C, C para A

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);