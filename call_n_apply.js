var x = {
    name: 'x',
    sayHello: function (term) {
        console.log('Hello ' + term +  '  from ' + this.name); // this is a keyword that refers to the context of a function
    }
};

// methods of a function, this refers to the object itself

var y = {
    name: 'y'
};

x.sayHello('World');

x.sayHello.call(y, 'World');

x.sayHello.apply(y, ['World']);

console.log([1,2].toString());

Object.getClassName = function (obj) { // native Javascript objects, not for user defined objects e.g. constructor based objects
    var classname = Object.prototype.toString.call(obj).split(' ')[1];
    return classname.substring(0, classname.length - 1);
};

var obj = {
    name: 'Tin',
    id: 32,
    _prime: 2,
    type: 'UI Developer',
    get prime() {
        return _prime;
    },
    set prime(x) {

        _prime = x;
    }
};

obj.prime = 11;
console.log(obj.prime);

Object.defineProperty(obj, 'id', {
    enumerable: false
});

for (var prop in obj) { // enumeration
    console.log(prop + ':' + obj[prop]);
}

function Person () {

}

var p = new Person();

console.log(p.constructor.name);

console.log(Object.getClassName(p));

var o = new Date();
console.log(Object.getClassName(o));

