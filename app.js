"use strict";
// type all type
// any, number, string, boolean, object, array, enum, null, void, never, unknown, tuple, undefined
var myname = 'umar faurk';
var studentID = 3234;
studentID = 'umar faruk';
var person = {
    name: 'umar',
    age: 33,
    hobby: 'sleeping'
};
var secondPerson = {
    name: 'umar',
    age: 33,
};
var numbers = [23, 3423, 23423, "asdfasdf"];
var number2 = [
    {
        name: 'umar',
        age: 33,
        hobby: 'sleeping'
    }
];
// function
var greeting = function (name) {
    console.log('my name is ' + name);
};
greeting('umar');
var introduce = function (_a) {
    var name = _a.name, age = _a.age;
    console.log('hello i am ' + person.name + 'my age ' + person.age);
};
introduce(person);
var gameDirection = 'left';
// genaric type check
var getArray = function (arr) {
    return arr;
};
var result = getArray(['umar faruk']);
console.log(result);
