'use strict';
import _ from "lodash";
import * as R from "ramda";
import "./css/style.css";


/** Chapter 3: Few Data Structures, Many Operations */
function fact(number) {
    if (number < 0) {
        throw new Error('Please insert number bigger than zero!');
    }

    if (number === 0 || number === 1) {
        return 1;
    }

    return number * fact(number - 1);

}

console.log("5! is " + fact(5))

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const p1 = new Person('a', 'b');
const p2 = new Person('c', 'd');
const p3 = new Person('e', 'f');
const p4 = new Person('g', 'h');

const persons = [p1, p2, p3, p4];

_.each(persons, s => {
    s.fullName = s.firstName + ' ' + s.lastName
});

R.lens(R.prop('x'));



