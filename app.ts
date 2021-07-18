// type all type
// any, number, string, boolean, object, array, enum, null, void, never, unknown, tuple, undefined

let  myname: string = 'umar faurk';

// with this | operator we can call it union
// custom type
type StringOrNumber = number | string;

let studentID: StringOrNumber = 3234;

studentID = 'umar faruk';

// type PersonType = {name: string, age: number, hobby: string};

interface person {
    name: string;
    age: number;
    // if i want to optional any property then use ?
    hobby?: string;
}

let person: person ={
    name : 'umar',
    age: 33,
    hobby: 'sleeping'
}

let secondPerson: person ={
    name : 'umar',
    age: 33,
}








