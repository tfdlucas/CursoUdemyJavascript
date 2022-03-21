// ? :  Operadores

const pontuacaoUsuario = 100;  // Condição  | Valor True    |  Valor False
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

console.log(nivelUsuario);

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preto';

console.log(corPadrao);

/*
if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal')
} */