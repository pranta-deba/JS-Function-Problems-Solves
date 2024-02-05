const nameArr = ["raj", "kumar", "raj", "raja", "dipa", "dipa"];
const numArr = [11, 22, 33, 44, 11, 23, 44, 33, 22, 56, 76, 76, 88];

function noDuplicate(arr) {
    let unique = [];
    for (const i of arr) {
        if (unique.includes(i) === false) {
            unique.push(i);
        }
    }
    return unique;
}

const result = noDuplicate(numArr);
console.log(result);