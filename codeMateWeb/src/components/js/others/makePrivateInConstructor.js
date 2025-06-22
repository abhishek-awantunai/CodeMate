function Person(_name) {
  this.setName = function (name) {
    _name = name;
  }


  this.getName = function () {
    return _name;
  }

}

let ramesh = new Person('ramesh');

console.log(ramesh.getName());
console.log(ramesh.name);