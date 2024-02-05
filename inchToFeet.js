function inchToFeet(inch) {
    const feet = parseInt(inch/12);
    const inc = inch%12;
    return `${feet} ft ${inc} inch`;
}

const result = inchToFeet(67);
console.log(result)