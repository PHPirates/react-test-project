// console.log(Math.sin(3.5));
// console.log('hi'.replace('i', 'ello'));

const o = null;
const name = o && console.log(o.getName());

// console.log(new Object() == {}); // todo Shouldn't this be true?

// Objects are dictionaries
const obj = {
    somename: 'nope',
    nesting: {
        is: 'fine'
    }
};

// console.log(obj.nesting.is); // fine


// Object prototypes are like classes
// Create a Person object prototype
function Person(name) {
    this.name = name;
    this.age = 1;
}

// Create an object
const me = new Person('Me');

// Access properties
me.name = 'Not me';
// console.log(me['name'] == 'Not me'); // true

// todo What's this, an extension function?
Person.prototype.setAge = () => {
    this.age = 42;
};
// Apparently not...
const alsome = new Person('Also me');
alsome.setAge();
// console.log(alsome.age); // Should be 42 right

const array = ['one', 2];
// console.log(array);
// console.log(array[42]);

array.forEach(function(value, index, array) {
    // console.log(value);
});

// Apparently it is right to use Object prototypes as functions,
// while actually it's the same
function doing(a) {
    this.b = a;
    return 2 * a;
}
// console.log(doing(21)); // 42
// console.log(new doing(21).b); // 21: The function is also a prototype

// Varargs
const doALot = function doALotAsExplainedVeryExtensivelyInThisName() {
    for (let i in arguments) {
        console.log(arguments[i]);
    }
    return arguments;
};

// console.log(doALot('a', 1, 0, 't'));

// Prototype functions
function myPrototype(param) {
    return {
        thisparam: param,
        timesTwo: function() {
            return this.thisparam * 2;
        }
    }
}

const proto = myPrototype(21); // Note: w/o new keyword todo what's the difference?
// console.log(proto.thisparam);
// console.log(proto.timesTwo());

function SecondPrototype(number) {
    this.state = number;
}

SecondPrototype.prototype.timesTwo = function () {
    return this.state * 2;
};

const protoTwo = new SecondPrototype(21);
// console.log(protoTwo.timesTwo()); // 42


function parentFunc() {
    var a = 1;

    function nestedFunc() {
        var b = 4; // parentFunc can't use this
        return a + b;
    }
    return nestedFunc(); // 5
}