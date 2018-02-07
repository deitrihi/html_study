let str = "abcde";

for(let s of str) {
    console.log(s);
}

let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of iterable) {
  console.log(entry);
}
// [a, 1]
// [b, 2]
// [c, 3]

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
//array.forEach(callbackFunction(currnetValue, index, array), thisArg);
console.log('--- Map forEach----');
iterable.forEach(function(val, index, array) {
    console.log(val);           // Map value
    console.log(index);         // Map key
    console.log(array);         // iterable
});
console.log('--- String forEach----');
str.forEach(function(val, index, array) {
    console.log(val);
    console.log(index);
    console.log(array);
});