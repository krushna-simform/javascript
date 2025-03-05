let arr = [3, 4, 2, 4, 5, 2, 3, 10, 90, 11, 23, 32, 1, 3, "hello", "hello", "harry", "harry"];

let duplicate = [...new Set(arr)]; // TC: O(n)

console.log(duplicate);

let duplicate1 = arr.filter((item, index) => arr.indexOf(item) === index); // TC: O(n^2)

console.log(duplicate1);

arr.sort((a,b) => a - b);

let duplicate2 = arr.filter((item, index) => item !== arr[index + 1]); // TC: O(n log n)

let duplicateItems = arr.filter((item, index) => item === arr[index - 1] && item !== arr[index - 2]);

console.log(duplicate2);
console.log("duplicate items : ", duplicateItems);