console.clear();
console.log('polyfill');

const obj = {
    firstName: 'Abhishek',
    lastName: 'Kumar',
    age: 20,
    isMarried: true,
}

function printMyName(city, country) {
    console.log(`My name is ${this.firstName} ${this.lastName} and is from ${city} ${country}`);
}

Function.prototype.myBind = function(obj) {
    const self = this;
    return function(...args) {
        self.apply(obj, [...args]);
    }
}

printMyName.myBind(obj)('Pune', 'India');