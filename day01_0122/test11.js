const person = {name:'kim', age:20, color:'red'};

console.log(person.name);
console.log(person.age);
console.log(person.color);

for( key in person ){
    console.log(key);
}

const people = ['red', 'green', 'blue']
for( value of people ){
    console.log(value);
}
