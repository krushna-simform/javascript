let printName = function(age) {
    console.log(`${this.name} ${age}`);
}

let user = {
    name: "harry"
}

let admin = {
    name: "ron"
}

printName.apply(user, [20]);

printName.call(admin, 21);

const userbind = printName.bind(user, 20);

userbind();