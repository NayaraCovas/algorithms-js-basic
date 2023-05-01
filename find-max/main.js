/* Excercise:5. Find Max

Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero. */


//PSEUDOCODE
    //1-Loop through the array  X = [2,-3,-1,0]  and find the maximum value
    //2-print the maximum number

//CODE

const arrayX = [-2,-1,5,0];
let biggerNumber= arrayX[0]

for (i=1; i<arrayX.length; i++) {
    if (arrayX[i]>biggerNumber){//arrayX[i] =-1
        biggerNumber=arrayX[i]        
    } 

}
console.log(biggerNumber)

//DIAGRAM
//biggerNumber=-2
//1- i=1, biggerNumber=-1
//2- i=2, biggerNumber=5
//3- i=3, biggerNumber=5
//4- i++ i=4, 4>3(arrayX.lengh)  =>so, loop will stop, result =5