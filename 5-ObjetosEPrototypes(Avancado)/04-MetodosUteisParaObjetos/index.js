/*
Object.values - Retorna os valores
Object.entries - Retorna as chaves e os valores
Object.assign(des, any) - Copia a propriedade de um objeto para outra de forma idependente
Object.getOwnPropertyDescriptor(o, 'prop') - Exibe o que é a propriedade
...spread - Copia a propriedade de um objeto para outra de forma idependente
Object.keys  - Retorna as chaves
Object.freeze - Congela o objeto
Object.defineProperties - Define várias propriedades
Object.defineProperty - Define uma propriedade
*/

const product = { name: 'Mug', price: 1.8 };
// const outraCoisa = Object.assign({}, product);
const outraCoisa = { // ...spread
    ...product,
};


outraCoisa.name = 'T-shirt';
outraCoisa.price = 50;
console.log(product);
console.log(outraCoisa);

// console.log(Object.values(product));
// console.log(Object.getOwnPropertyDescriptor(product, 'name'));
// console.log(Object.entries(product));