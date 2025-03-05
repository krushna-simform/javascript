const user = {
    username: "hello",
    age: 20,

    print: function() {
        console.log(`print : ${this}`)
        function print1() {
            console.log(`print1 : ${this}\n`)
        }
        print1();
    }
}

user.print();

const user1 = {
    username: "hello",

    print: function() {
        console.log(`print : ${this}`)
        const print1 = () => {
            console.log(`print1 : ${this}`)
        }
        print1();
    }
}

user1.print();