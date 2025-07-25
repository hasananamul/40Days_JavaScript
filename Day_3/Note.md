                   ***Day_3*** (Operator and Expression)  
                   --------------------------------------
## Types of operator: 
1. Arithmetic Operator.
2. Assignment Operator.
3. Comparission Operator.
4. Relational Operator.
5. Conditional Operator.
6. Logical Operator.
7. Bitwise Operator.
____________

i. Grouping.
ii. Type of.
iii. instance of.
_____________

** Operator_ (Symbol is operator)__ (+ , - , /, *).
** Operants_ (X + Y) __ X and  Y are operants.
** Expression _ ( x = 2 , 3 + 4).
_____________

## 1. Arrithmetic Operator:
Example : 
let a = 10;
let b = 20;
console.log(a+b) //30
console.log(a-b) //-10
console.log(a*b) //200
console.log(b-a) //10
console.log(a/b) //0.5

** Exponential Operator.
__Example__
console.log(a**b) // becomes 10²⁰
** Reminder Operator.
__Example__
console.log(12 % 5) //2

**Incerment/Decrement Operatopr.
__Example__
let count = 5
console.log(count++) //5 count = count + 1.
console.log(count) //6 post increment.
console.log(++count) //7 pre increment.
also can write : count += 5

console.log(count--) //5 count = count - 1.
console.log(count) //4 post decrement.
console.log(++count) //3 pre decrement.
also can write : count -= 5

## 2. Assignment Operator:
let x = 10;
x += 5 ; x = x + 5 (15)
x -= 5 ; x = x - 5 (5)
x *= 5 ; x = x * 5 (25)
x /= 5 ; x = x / 5 (5)

## 3. Pomparison Operator:
console.log(0 == false) // true;
console.log(3 == "3") // true;
console.log(3 === "3") // false;
console.log(null === null) // true;
console.log(undefined === undefined) // true;
NAN = not a number;

## 4. Logical Operator: ___ &&, ||, ??
i. logical and (AND) &&__(If any one is false result is false with non boleean value both && return first falsy value or last value if all are true.)
__Example__ 
console.log(false && false) // true
console.log(false && true) // false
console.log(true && false) // false
console.log(true && true) // true
console.log("cow" && "horse") // true

ii. Logical OR ||__ (The logical OR (||) operator in JavaScript returns the first truthy value, or the first value is false return scend valiue.)

console.log(true || false);      // true
console.log(false || true);      // true
console.log(false || false);     // false
console.log("" || "hello");      // "hello" ("" is falsy)
console.log(0 || 42);            // 42 (0 is falsy)
console.log("cat" || "dog");     // "cat" ("cat" is truthy)

iii. nullish coalescing operator ??:
If the first value is not null or undefined, it returns the first value.
If the first value is null or undefined, it returns the second value.
__Example__
let a = null ?? "default";    // "default"
let b = 0 ?? 42;              // 0 (because 0 is not null)

iv. Conditional (ternary) Operator: "?"__
__Example__
conditon ? value1 : value2 (Like else.....if condition)