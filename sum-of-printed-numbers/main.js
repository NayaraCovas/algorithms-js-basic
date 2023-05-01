/* Exercise:3. Sum of Printed Numbers

Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this:

Number is: 0 Sum: 0

Number is: 1 Sum: 1

Number is: 2 Sum: 3

Number is: 3 Sum: 6

...

You are NOT allowed to use an array to solve this exercise. */

//PSEUDOCODE
    //1-Loop through numbers from 1 to 135
    //2-print console the number + sum

//CODE A

    let sum = 0;

    for (let i = 0; i <= 135; i++) {
    sum += i; //sum = valor atual mais valor i (sum= actual value + i actual value)
    console.log(`Number is: ${i}; Sum: ${sum}`);
    }
            //OR

  
let i=0;//inicial condition that only exists once
let sum= 0;

 while (i <= 135){//condicao de parada
    sum += i; //sum = valor atual mais valor i (sum= actual value + i actual value)
  console.log(`Number is: ${i}; Sum: ${sum}`);
   i++//final action=increment
   }

    
    
//DIAGRAM A
 

//0- initially the value of sum is 0
//1- i=0, sum=0 (sum=0 ->(value of the current "index" that is 0)+ (0 that is the current value of sum)) 
//2- i=1, sum=1 (sum=1 ->(value of the current "index" that is 1)+ (0 that is the current value of sum))
//3- i=2, sum=3(sum=3 ->(value of the current "index" that is 2)+ (1 that is the current value of sum))
// i++ i=136, 136<135 (arrayX.lengh)  =>so, loop will stop



