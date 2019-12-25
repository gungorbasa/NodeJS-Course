// Object
const person = {
    name: 'Gungor',
    age: 30,
    hasHobbies: true,
    greet() { 
        console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
    }
};

// Array
const hobbies = ['Sports', 'Cooking', 1, person];
for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby; 
}));

person.greet();

// copying and ... operator
const copyArray = [...hobbies];
console.log(copyArray);

const copyPerson = {...person};
console.log(copyPerson);

const toArray = (...args) => {
    return args;
};

console.log(toArray(1,2,3,4,5));

const { name, age } = person;
console.log(name, age);

const [item1, item2] = hobbies;
console.log(item1, item2);