// Exercise:2-Write a program using JavaScript that will print all the odd numbers from 1 to 135.

//PSEUDOCODE A

    //1-Loop through numbers from 1 to 135 and making i goes two each time "i+=2"
    //2-Print the result    

//CODE
for(var i=1;i<=135;i+=2){
    console.log(i);
}

//Diagram A:
    //1- i=1, result=1
    //2- i+=2 ... result =1,3
    //3- i+=2 ... result =1,3,5
    // ...
    // i+=2 ... i=135, result=1,3,5, ...,135
    //i+=2 i=137, 137 >135? =>so, loop will stop

            

 //PSEUDOCODE B:
    
     //1-Loop through numbers from 1 until 135
     //2-"iF statement" to check if number is odd.by dividing it by 2.
     //3-if number is odd then print the result 

     //CODE:

     for(var i = 1; i <= 135; i++){
        if(i % 2 !== 0) {//check if it is odd (the rest of de division must be !== 0)
            console.log(i);

        }
    }
    
    //Diagram B:
        //1- i=1, 1%2 => !==0 result=1
        //2- i++, i=2 =>2%2 ===0  result =1
        //3- i++, i=3 =>3%2 !==0  result =1,3
        //4- i++, i=4 =>4%2 ===0  result =1,3  
        //5- i++, i=5 =>5%2 !==0  result =1,3,5
        //6- i++, i=6 =>6%2 ===0  result =1,3,5
        //7- i++, i=7 =>7%2 !==0  result =1,3,5,7
       //...
       // i++ ... i=135, result=1,3,5, ...,135
       //i++ i=137, 137 >135? =>so, loop will stop



