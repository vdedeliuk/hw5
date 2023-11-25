let arr = Array.from(Array(10))

arr = arr.map
    ((i) => Math.round(Math.random() * 10))

console.log(arr)
let minNum = arr[0]

for (let a = 1; a <= arr.length; a++) {
    maxNum = arr[a]

    if (maxNum < minNum) {
        minNum = maxNum
    }
}

console.log(minNum)
