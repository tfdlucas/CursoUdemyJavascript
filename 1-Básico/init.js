const people = {
    name: 'Lucas',
    lastName: 'Carvalho',
    age: 24,
    job: 'programmer'
};

function createPeople ( name, lastName, age) {
    return {name, lastName, age};
    // creating object
}

const people1 = createPeople('Lucas', 'de Paula', 24, 'programmer');
console.log(people1.job);