// 1. What will be the output of this code snippet and why?
let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}

// Answer should be " It's a normal day " because Momday start is capital latter but case monday start is small latter.

// 2. Build an ATM Cash Withdrawal System

let amount = 50000;
if (amount % 100 === 0){
console.log("Withdrawal successful");
}
else{
    console.log("Invalid amount");
}

//3. Build a Calculator with switch-case
let result;
const num2 = 300;
const num1 = 400;
const operator = "-"

switch (operator) {
    case "+" : result = num1 + num2;
        console.log("Answer is Summetion = " +  result);
        break;

    case "-": result = num1 - num2;
        console.log("Answer is Substruction = " +  result);
        break;

    case "*": result = num1 * num2;
        console.log("Answer is Multification = " +  result);
        break;
    case "/": result = num1 / num2;
        console.log("Answer is Divition = " +  result);
        break;
    case "%": result = num1 % num2;
        console.log("Answer is Modulas = " +  result);
        break;
    default: console.log("Answer is Nothing");
        break;
}

//4. Movie Tickets price ( Bage on age)
let age = 55
if (age < 18){
console.log(" You are child, Your tickets price is $3 ");
}
else if (age <= 60){
    console.log(" You are adults, Your tickets price is $10 ");
}

else {
    console.log(" You are Old, Your ticket price is $8 ");
}

//5. Horoscope Sign Checker
let month_name = "december"
switch (month_name) {
    case "january":
    case "february" :
        console.log("You born month is " + month_name + " thats way you are 'Jauras' ");
        break;

    case "march":
    case "april" :
        console.log("You born month is " + month_name + " thats way you are 'Aries' ");
        break;

    case "may":
    case "june" :
        console.log("You born month is " + month_name + " thats way you are 'Taurus' ");
        break;

    case "july":
    case "august" :
        console.log("You born month is " + month_name + " thats way you are 'Gemini' ");
        break;

    case "september":
    case "october" :
        console.log("You born month is " + month_name + " thats way you are 'Sembeni' ");
        break;

    case "november":
    case "december" :
        console.log("You born month is " + month_name + " thats way you are 'nombebar' ");
        break;
    default:
        break;
}

//6. Which Triangle?
//A triangle has 3 sides. A Triangle type is determined by its sides:

// All sides equal is called, Equilateral Triangle.
// Two sides equal is called, Isosceles Triangle.
// All sides different is called, Scalene Triangle.
// Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.

let sideA = 10;
let sideB = 10;
let sideC = 10;

if (sideA === sideB && sideB === sideC) {
    console.log(` There are all side are equal ( SideA = ${sideA}, SideB = ${sideB}, SideC = ${sideC}) that's way it's called " Equilateral Triangle " `);
} else if(sideA === sideB || sideB === sideC || sideA === sideC){
    console.log(` There are two side are equal (${sideA, sideB, sideC}) that's way it's called " Isosceles Triangle " `);
}else{
    console.log(` There are all side are difference (${sideA, sideB, sideC}) that's way it's called " Scalene Triangle " `);
}