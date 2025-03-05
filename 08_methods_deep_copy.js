// using structuredClone

const original = {
    name: "harry",
    details: {age: 17}
};

const copy = structuredClone(original);

copy.name = "ron";

console.log(original);
console.log(copy);

// using json.stringify()

const original1 = {
    name: "harry",
    details: {age:  17}
};

const copy1 = (JSON.stringify(original1));

original1.details.age = 18;

console.log(original1);
console.log(copy1);

// using recursive functions

function deepCopy(obj) {
    if(obj === null || typeof obj !== "object") return obj;

    let copy = Array.isArray(obj) ? [] : {};

    for(let key in obj) {
        if(obj.hasOwnProperty(key)){
            copy[key] = deepCopy(obj[key]);
        }
    }

    return copy;
}

const original2 = {
    name: "harry",
    details: {age: 17}
}

const copy2 = deepCopy(original2);

copy2.name = "ron";

console.log(original2);
console.log(copy2);

// using external library ( for use it : npm i lodash )

var cloneDeep = require('lodash/cloneDeep.js');

const original3 = {
    name: "harry",
    details: {age: 17}
}

const copy3 = cloneDeep(original3);

original3.details.age = 20

console.log(original3)
console.log(copy3)