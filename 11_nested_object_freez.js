const obj = Object.freeze({ x: { y: 10 } });

const nestedObj = (obj) => {
    Object.keys(obj).forEach((val) => nestedObj(obj[val]));
    return Object.freeze(obj);
};

nestedObj(obj);

obj.x.y = 20;
console.log(obj.x.y);


Object.prototype.deepFreeze = (obj) => {
    Object.keys(obj).forEach((val) => deepFreeze(obj[val]));
    return Object.freeze(obj);
}   

const obj1 = Object.deepFreeze({x: {y : 10}});
obj1.x.y = 20;
console.log(obj1.x.y);

const obj2 = Object.deepFreeze({
    x : {
        y : {
            z : {
                a : 100
            }
        }
    }
})

obj2.x.y.z.a = 1000;
console.log(obj2.x.y.z.a);