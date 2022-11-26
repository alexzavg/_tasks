// log all elements in the array
let arr = [1, 2, 3, 4, 5];
let secondArr = [];
let thirdArr = [];

for (let i = 0; i < arr.length; i++) {
    // add the element to the second array if it is even
    if (arr[i] % 2 === 0) {
        secondArr.push(arr[i]);
    }

    // add the element to the third array if it is odd
    if (arr[i] % 2 !== 0) {
        thirdArr.push(arr[i]);
    }
}

console.log("Even array", secondArr);
console.log("Odd array", thirdArr);