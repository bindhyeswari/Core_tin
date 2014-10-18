var obj = new Object(); // constructor

function Person() {
    this.name = 'Tin Hon Ng';
}


var tin = new Person();
// var tin = {}; The prototype attribute of tin points to Person.prototype
// "this" keyword = tin
//  return this
// properties, attributes

// Extensible, Classname, Prototype

// tin.id = 64;
Object.preventExtensions(tin); // sets the extensible attribute to false .isExtensible
tin.id = 64;
console.log(tin.id);

Person.prototype.id = 32;
console.log(Object.getPrototypeOf(tin)); // prototype attribute of the object



var x = { // Object Literal
    name: 'Tin Hon'
};

var y = Object.create(Object.prototype);

// string, number, boolean, undefined, object, null

console.log(typeof Object);

var parent = {
    type: 'parent'
};

var child = Object.create(parent); // Any object to be treated as a parent
console.log(Object.getPrototypeOf(child));

var arr = [1,2,3]; // arr points to Array.prototype
console.log(arr.join(', '));
console.log(arr.lastIndexOf(2));

var arr_num = [9,8,6,4,5,7,1,2,3,11];
console.log(arr_num.sort(function (a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    else return 0;
}));

var network_string = JSON.stringify(parent);
console.log(network_string);
var z = JSON.parse(network_string);
console.log(z.type);






































