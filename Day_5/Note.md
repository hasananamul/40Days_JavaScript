Day _ 5 (Topic: LOOP)

## When use "for" loop?
"The best time to use for loop when we know exactly how many times we need to run a code of block."

## when "While" loop?
" When we don't know how many times it's will run!"

## When "Do while" loop?
"When atlest one time need to run"
_________________________________________

## "for" loop structure.
for(initialization(Where are going to start), condition(bage of which condition run this code), update(Update the variable from the initialization, so that loop can forword and eventually stop)){
    code........
}

## Single loop: 
Single loop normally use to handle single row of data.

## Nestade Loop
----------------
What is nested loop? A loop is in another loop it's called nested loop. nested loop usually used to handle in multi dymentional data.

## Brake and continue: 
** "Breake" for stop exucution the loop.
** "Continue" for skipping the particuler number and continue the next.
Once we need to stop any loop to any number of looping the we can use "Brake" statement to stop imidieatlly the loop.
------------ Example : 
// "Breake":
for( I = 1, I <= 10 , I++){
    console.log(I) //123456
    if(I == 6) breake;
    // Not print untill 10
}

// continue:

for( I = 1, I <= 10 , I++){
    console.log(I) //123456
    if(I == 6) continue;
    // Not print untill 10
}

## Multiple counter for single loop:
for(let i = 1, j = 3; i <= 10 && j >= 1; i++, j--){
    console.log(i,j)
}

## While loop:
When we dont know how many times we need to run the code then we use while loop.
____ Example:
let count = 1;
while(count <= 5){
    console.log(count++) //12345
}

## Do while loop:
When at lest on time need to eucutive the loop ten we need to use do while loop;
_____ Example :
let count = 1;
do{
    console.log(count)
    count++
}while(count <= 5)

## Infinite loop:
When the loops is not meet with condition false then it's keep on looping never stoping.