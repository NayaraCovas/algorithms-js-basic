/* 8. Number to String

Write a program that takes an array of numbers and turns the negative values to strings. For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing']. */

//PSEUDOCODE
//1-Loop through the number of the  arrayX[1,-4,0,-1]
//2-Remove negative numbers
//3-replace negative numbers with string
//4-print the new array

//CODE

const arrayX = [1,-4,0,-1];

for (i = 0; i < arrayX.length; i++) {
  if (arrayX[i] < 0) {
    arrayX[i] = "Turing";
  }
}
console.log(arrayX);

//DIAGRAM
//1- i=0, result=1
//2- i=1, result=1,"Turing"
//3- i=2, result=1,"Turing",0
//4- i=3, result=1,"Turing",0,"Turing"
// i++ i=4, 4>3(arrayX.lengh)  =>so, loop will stop