function toKg (pounds) {
    const kg = 0.453592 * pounds;
    console.log(kg);
}

const userInput = process.argv[2];

toKg(userInput);





// function toPounds(kg) {
//     const pounds = 2.20462 * kg
//     console.log(pounds);
// }

// const userInput1 = process.argv[2];

// toPounds(userInput1);

function advice(userInput) {
    if (userInput>100) {
        return "cut down calories and get yourself to the gym son!"
    } else if (userInput>90) {
        return "eat the right foods and work out a little every week"
    } else if (userInput>80) {
        return "you're doing alright don't worry about it. You could potentially up your activity level"
    } else if (userInput>70) {
        return "you're perfect"
    } else if (userInput>60) {
        return "eat a little more"
    } else {
        return "up the calories and maintain a healthy diet"
    }
}


console.log(advice(userInput));
