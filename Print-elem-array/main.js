/* Excercise 4. Print the elements of an array

Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen. Your program should work with arrays of all sizes. */


//PSEUDOCODE
    //1-Loop through the array X = [1,4,2,12] 
    //2-print each number that belongs to the list

//CODE

const arrayX = [1,4,2,12];
let i = 0;

while (i < arrayX.length) {
    console.log(arrayX[i]);
    i++;
}

//DIAGRAM
//1- i=0, result=1
//2- i=1, result=1,4
//3- i=2, result=1,4,2
//4- i=3, result=1,4,2,12
// i++ i=4, 4>3(arrayX.lengh)  =>so, loop will stop
    





