let str = "krushna"

let iterator = str[Symbol.iterator]();

while(true) {
    let result = iterator.next()
    if (result.done) break
    console.log(result)
}