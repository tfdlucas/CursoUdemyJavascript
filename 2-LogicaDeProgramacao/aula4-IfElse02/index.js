const user = '';
const password = true;

if (user === true && password === true) {
    console.log(`Login efetuado com sucesso.`);
} else if (user !== true && password === true) {
    console.log(`Usuário incorreto.`);
} else if (user === true && password !== true) {
    console.log(`Senha incorreta.`);
} else if (user !== true && password !== true) {
    console.log(`Usuário e senha incorretos.`);
}