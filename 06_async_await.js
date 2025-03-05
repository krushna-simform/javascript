// async function always returns promise

const p = new Promise((resolve, reject) => setTimeout(() => {
    resolve("promise is resolved");
}, 10000));

async function getData() {
    p.then((res) => console.log(res));
    console.log("Hello")
}

getData();

// async and awit combo is used for handle promises

async function handlePromise() {

    // js engine is waiting for promise to resolve

    const data = await p;
    console.log("first")
    console.log(data);
}

handlePromise();