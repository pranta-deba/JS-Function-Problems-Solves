const arr = [12, 18, 33, 45, 11, 67, 65, 22, 67, 88, 90, 23, 44];

function avgOddNumbers(arr) {
    let odds = [];
    let sum = 0;
    for (const nums of arr) {
       if (nums % 2 !== 0) {
        odds.push(nums);
        sum += nums;
       }
    }
    const avg = sum / odds.length;
    return avg;
}

const result = avgOddNumbers(arr);
console.log(result);