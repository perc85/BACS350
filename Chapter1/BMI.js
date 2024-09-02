const prompt = require('prompt-sync')();

function BMIcalc(weight, height){
    return weight/(height**2);
}

var weight = prompt("Enter your weight in kilograms: ");
var height = prompt("Enter your height in meters: ");
var BMI = BMIcalc(weight, height);

if (BMI >= 30) {
    console.log(`Your BMI is ${BMI} - Obese`);
} 
else if (BMI >= 25) {
    console.log(`Your BMI is ${BMI} - Overweight`);
} 
else if (BMI >= 18.5) {
    console.log(`Your BMI is ${BMI} - Normal weight`);
} 
else {
    console.log(`Your BMI is ${BMI} - Underweight`);
}

