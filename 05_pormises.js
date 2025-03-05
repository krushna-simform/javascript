const GITHUB_API = "https://api.github.com/users/krushnarrathod";

const user = fetch(GITHUB_API);
user.then((data) => {
    console.log(data)
})

console.log(user)

let cart = ["watch", "shoes", "specs"]

createOrder(cart)
    .then((orderId) => {console.log(orderId); return orderId;})
    .then((orderId) => proceedToPayment(orderId))
    .then((processInfo) => console.log(processInfo))
    .catch((err) => console.log(err.message))

function createOrder(cart) {
    const pr = new Promise(function(resolve, reject){
        if(!validateCart(cart)){
            const err = new Error("cart is not valid");
            reject(err);
        }

        const orderId = '123';
        if(orderId){
            setTimeout(() => resolve(orderId), 3000);
        }
    });

    return pr;
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        resolve("Payment sucessful");
    })
}

function validateCart(cart) {
    return true;
}