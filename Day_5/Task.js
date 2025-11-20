
// // Use a for loop to print numbers from 1 to 10
// let number;
// for(number = 1; number <= 10; number++){
//     // code block to be executed   
//     console.log("The number is " + number);
// }

// // Nested for loop to print a pattern
// let rows = 15;
// for(let r = 1; r <= rows; r++){
//     let pattern = "";
//     for(let c = 1; c <= r; c++){
//         pattern += "H+P "; // Append star to the pattern
//     }
//     console.log(pattern); // Print the pattern for the current row
// }

// // Nested for loop to print rows and columns
// for(let i = 1; i <= 5; i++){
// console.log("Row " + i + ":");
//     for(let j = 1; j <= 5; j++){
//         console.log("  Column " + j);
//     }
// }

// // Use of "Break" and "Continue" statements in a for loop
// for(let num = 1; num <= 10; num++){
//     if(num === 5){
//         console.log("Skipping number " + num);
//         continue; // Skip the rest of the loop when num is 5
//     }
//     if(num === 8){
//         console.log("Breaking the loop at number " + num);
//         break; // Exit the loop when num is 8
//     }
//     console.log("Current number is " + num);
// }

// // Use a for loop to print even numbers from 2 to 20
// let evenNumber;
// for(evenNumber = 2; evenNumber <= 20; evenNumber += 2){
//     // code block to be executed   
//     console.log("The even number is " + evenNumber);
// }

// // Use a for loop to print the multiplication table of 5
// let i;
// for(i = 1; i <= 10; i++){
//     // code block to be executed   
//     console.log("5 x " + i + " = " + (5 * i));
// }

// // Use a for loop to print the first 10 Fibonacci numbers
// let a = 0, b = 1, nextTerm;
// console.log("Fibonacci Series:");
// for(let j = 1; j <= 10; j++){
//     console.log(a);
//     nextTerm = a + b;
//     a = b;
//     b = nextTerm;
// }

// // Use a for loop to calculate the factorial of 5
// let factorial = 1;
// for(let k = 1; k <= 5; k++){
//     factorial *= k; // factorial = factorial * k
// }
// console.log("The factorial of 5 is " + factorial);

// // Use multiple counter in single for loop.
// for(let i = 1, j = 10; i <= 10 && j >= 1; i++, j--){
//     console.log("I = " + i, "J = " + j);
    
// }

// // while loop:
// let count = 1;
// while(count <= 10 ){
//       console.log(count++);  
// }

// // Do while loop;
// let num = 1;
// do{
//     console.log("Do while loop: " + num++)
// }while (num <= 5)
//-----------------------------------------------


// TASK FOR DAY _ 5:

// 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:

// *
// * *
// * * *
// * * * *
// * * * * *

let pattern = "";
for (let star = 1; star <= 5; star++){
    // console.log(star);
    for(let Nested_pattern = star; Nested_pattern <= star; Nested_pattern++){
        console.log(pattern+= "* ");
    }
}

// 2. Craete Multiplication Table (Using for loop)
for(let number = 3; number <= 3 ; number ++){
    // console.log(number);
    
    for(let table = 1; table <= 10; table ++){
        let multiplication = number * table 

        console.log(`${number} * ${table} = ${multiplication}`);        
    }
}

//3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.

//##Sudo code_

//Create a sum variable and set it to 0
//loop from 1 to 500
//check, if number is odd, if odd add to sum untill loop end,
//console the total summetion 

let sum = 0;
for(let number = 1; number <= 10; number += 2){
    sum += number
}
console.log(sum); 
