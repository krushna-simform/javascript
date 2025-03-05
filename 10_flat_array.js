const arr = [1, 2, [3,4], 45, [3,[5,6, [4]]]];


const flatArray = (arr) => {
    return arr.reduce((acc, val) => Array.isArray(val) ?  acc.concat(flatArray(val)): acc.concat(val),[])
}

const newArr = flatArray(arr);

console.log(newArr);