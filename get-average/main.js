/* Excercise 6. Get Average

Given an array X, write a program that will return the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2. */

//PSEUDOCODE
    //1-Loop through the array  X = [2,1,3]  and sum the values
    //2-Calculate average dividing sum by array length
    //3-print the average value

//CODE 
    const arrayX= [2,9,3];
    let sum= 0
   

    for (i=0; i<arrayX.length; i++) {
        sum =arrayX[i]+sum

    }
    let averageNumber = sum/arrayX.length
    console.log(averageNumber);

//DIAGRAM
//0- initially the value of sum is 0
//1- i=0, result=2 (sum=2 ->(value of the current index that is 2)+ (0 that is the current value of sum)) 
//2- i=1, result=11 (sum=11 ->(value of the current index that is 9)+ (2that is the current value of sum))
//3- i=2, result=14(sum=14 ->(value of the current index that is 3)+ (11 that is the current value of sum))
// i++ i=3, 3>4(arrayX.lengh)  =>so, loop will stop
// averageNumber is printed