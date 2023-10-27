function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}

const contador = geradora2();
console.log(contador.next().value);
console.log(contador.next().value);
console.log(contador.next().value);
console.log(contador.next().value);
console.log(contador.next().value);
console.log(contador.next().value);
console.log(contador.next().value);
console.log(contador.next().value);