/**

    Using call, apply, bind method we can do Function Borrowing i.e we can borrow functions from a object and use it with the data of some other object.

*/

let obj1 = {
    fname: 'Abhishek',
    lname: 'Kumar',
};


let obj2 = {
    fname: 'Sachin',
    lname: 'Tendulkar',
};

const printFullName = function() {
    console.log(this.fname + ' ' + this.lname);
}

printFullName.call(obj1);
printFullName.call(obj2);
