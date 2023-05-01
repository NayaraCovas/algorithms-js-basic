/* Exercise 7. Eliminate the Negatives

Given an array X, write a program that will remove all negative numbers and replace them with a 0. For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0]. */

//PSEUDOCODE
//1-Loop through the number of the  arrayX[2,-1,4,-3]
//2-Remove negative numbers
//3-replace negative numbers with a 0
//4-print the new array

//CODE
const arrayX = [2, -1, 4, -3];

for (i = 0; i < arrayX.length; i++) {
  if (arrayX[i] < 0) {
    arrayX[i] = 0;
  }
}
console.log(arrayX);

//DIAGRAM
//1- i=0, result=2
//2- i=1, result=2,0
//3- i=2, result=2,0,4
//4- i=3, result=2,0,4,0
// i++ i=4, 4>3(arrayX.lengh)  =>so, loop will stop