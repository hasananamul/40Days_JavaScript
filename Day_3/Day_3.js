// Bitwise operations
// 1. Bitwise AND : (&) if matches 1 in both numbers then it will be 1 otherwise 0

// Bynary number of 9
// 9/2 = 4 (1)
// 4/2 = 2 (0)
// 2/2 = 1 (0)
// 1/2 = 0 (1)

//Bynary of 5
// 5/2 = 2 (1)
// 2/2 = 1 (0)
// 1/2 = 0 (1) 
// 0/2 = 0 (0)

// 9 = 1001
// 5 = 0101
// 9 & 5 = 0001
// 1 * (2**0) + 0 * (2**1) + 0 * (2**2) + 0 * (2**3)
// 9 & 5 = 1


// 2. Bitwise OR : (|) if matches 1 in any number then it will be 1 otherwise 0
// 9 | 5 = 1101
// 1 * (2**0) + 0 * (2**1) + 1 * (2**2) + 1 * (2**3)
// 9 | 5 = 13
// 9 = 1001
// 5 = 0101 

// 3. Bitwise XOR : (^) if matches 1 in both numbers then it will be 0 otherwise 1
// 9 ^ 5 = 1100
// 9 = 1001
// 5 = 0101
// 0 * (2 ** 0) + 0 * (2 ** 1) + 1 * (2 ** 2) + 1 * (2 ** 3)
// 9 ^ 5 = 12


// 4. Bitwise NOT : (~)
// 5. Left Shift : (<<)
// 6. Right Shift : (>>)
// 7. Unsigned Right Shift : (>>>)
// 8. Zero Fill Right Shift : (>>>)
// 9. Bitwise AND assignment : (&=)
// 10. Bitwise OR assignment : (|=)
// 11. Bitwise XOR assignment : (^=)
// 12. Bitwise NOT assignment : (~=)
// 13. Left Shift assignment : (<<=)
// 14. Right Shift assignment : (>>=)
// 15. Unsigned Right Shift assignment : (>>>=)
// 16. Zero Fill Right Shift assignment : (>>>=)


// ****** Day _3 tasks ****
// Task 1 (Find odd and Even number)
let number = 30;
let result = number % 2 == 0 ? "Even number " : "Odd number"

console.log( number + " is " + result );

// Task_2 (Get driving licence elligable or not?)
let personAge = 18;
let checkAge = personAge >= 18 ? "person is leagal for make driving licence." : " Person is illegal for make driving licence!"

console.log(checkAge);

// Task_ 3 (Calculate CTC mony with bonus)
let montlySalary = 12300;
// Yearly income (permonth * 12)
let annualSalary = montlySalary * 12;
// Yearly bonus (bonus / 100) * yearly income.
let annualBonus = (20/100) * annualSalary;
// Total mony per annum to get CTC
let totalMontlyPerAnnum = annualSalary + annualBonus;
console.log("Annual sallary is = " + annualSalary + " and bonus is = " + annualBonus + " Total CTC per annum is = " + totalMontlyPerAnnum);

// Task _ 4 (Traffic light simulation)
let color = 'Yellow'
if (color == "Green" ) {
    console.log("Go");
}
if (color == "red" ) {
    console.log("Stop");
}
if (color == "Yellow" ) {
    console.log("Prepare to Stop");
}

// Task _ 5 (Electricity Bill Calculator)
let unitsPrice = 5;
let unitsPerDay = 20;
// Montly total units
let unitsPerMonth = unitsPerDay * 30;
// Yearly total units
let unitsPerYear = unitsPerMonth * 12;
// Yearly cost
let yearlyUnitsCost = unitsPerYear * unitsPrice;
// 20% discount
let diccount = ( 20 / 100)  * yearlyUnitsCost;
// After discount total payment
let yearlyDiscountPayment = yearlyUnitsCost - diccount 
console.log(`Montly units = ${unitsPerMonth}, Yearly units = ${unitsPerYear}, Yearly units costs = ${yearlyUnitsCost}, Discount = ${diccount}, Totl pay after discount = ${yearlyDiscountPayment} `);

// Task _ 6 (Leap year calculation)
let year = 2025;
let leapYearCheck = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? year + " is leap year. " : year +  " is not leao year. "

console.log(leapYearCheck);

// Task _ 7 (Compare the three numbers)
let p = 30;
let q = 32;
let r = 29;
let compare1 = p < q // p is less then q
let compare2 = q > r // q is greeter then r
console.log(compare1);
console.log(compare2);

// Task _ 8 (Bitwise Doubling)
let count = 5 // `101`
// binary for 5
// 5 / 2 = 2(1)
// 2 / 2 = 1(0)

let doubling = count << 1; //1010 Bitwise left << shift 1;
let biwiseRightShift = count >> 1; //010 Bitwise right >> shift 1;
// 1010 = 0 * (2**0) + 1 * (2**1) + 0 * (2**2) + 1 * (2**3) = 10; //Left shift <<
// 010 = 0 * (2**0) + 1 * (2**1) + 0 *(2**2) = 2;//Right shift >>
console.log("Bitwise doubling (left shift) of 1 = " + doubling);
console.log("Bitwise right shift 1 = " + biwiseRightShift);

let x = 10;
//x += 5 ; x = x + 5
//x -= 5 ; x = x - 5
//x *= 5 ; x = x * 5
//x /= 5 ; x = x / 5

x = x + 5
x = x - 5
x = x * 5
x = x / 5
console.log(x += 5);
console.log(x -= 5);
console.log(x *= 5);
console.log(x /= 5);

console.log(x = x + 5);
console.log(x = x - 5);
console.log(x = x * 5);
console.log(x = x / 5);
