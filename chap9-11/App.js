console.log("Chapter9-11");

// CHAPTER # 9-11 TASK # 01 

// 1. Write a program to take “city” name as input from user. If user enters “Karachi”,
//  welcome the user like this: “Welcome to city of lights”


// var user_input = prompt("Enter your City ");

// if(user_input==="karachi")
// {
//     document.write("welcome to city of lights")
// }
// else
// {
//     document.write("User doesn't input Karachi")
// }


// CHAPTER # 9-11 TASK # 02 

// 2. Write a program to take “gender” as input from user. 
// If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am. 
 

// var gender="male";

// if(gender==="female")
// {
//     document.write("Good Morning Ma'am");
// }
// else
// {
//     document.write("Good Morning Sir")
// }


// CHAPTER # 9-11 TASK # 03

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table: 



// var check_color = prompt("Enter color");

// if(check_color==="red")
// {
//     document.write("Must Stop")
// }
// else if( check_color==="green")
// {
//     document.write("Move now ")
// }
// else if(check_color==="yellow")
// {
//     document.write("Ready to move")
// }
// else{
//     document.write("you are not putting any essential color")
// }


// CHAPTER # 9-11 TASK # 04

// 4. Write a program to take input remaining fuel in car (in litres) from user. 
// If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”        



// var check_fuel = +prompt("Chhecking the Fuel");
//  if (check_fuel<0.25)
//  {
//      document.write("“Please refill the fuel in your car” ");
//  }
//  else 
//  {
//      document.write("It's Ok");
//  }



// CHAPTER # 9-11 TASK # 05

// 5. Run this script, & check whether alert message would be displayed or not.
//  Record the outputs. a. var a = 4; if (++a === 5){ alert("given condition for variable a is true"); 

// var a = 4;
// if(++a=== 5)
// {
//     alert("given condition for variable a is true");
// }

// b. var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); } 
   
        // {not display alert message}
// var b = 82;
// if (b++ === 83)
// { 
//     alert("given condition for variable b is true"); 
// } 


// c. var c = 12; if (c++ === 13){ alert("condition 1 is true"); }
//  if (c === 13){ alert("condition 2 is true"); } 
//  if (++c < 14){ alert("condition 3 is true"); } 
//  if(c === 14){ alert("condition 4 is true"); } 


//  var c = 12;
//  if (c++ === 13)
// { 
//     alert("condition 1 is true");
//  }
// //  else if (c === 13)
// { 
//     alert("condition 2 is true"); {consition true}
// }   
// //   else if (++c < 14)
// { 
//     alert("condition 3 is true"); 
// } 
// //  else (c === 14)
// {
//      alert("condition 4 is true"); 
//     } 



// d. var materialCost = 20000; var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ alert("The cost equals"); } 
 
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost;

// if (totalCost === laborCost + materialCost)
// {
//      alert("The cost equals");
    
// } 
// else
// {
//     alert("The cost is not  equals");
// }


// e. if (true){ alert("True"); } if (false){ alert("False"); 

// var checko = true;
// if(checko==true)
// { 
//     alert("True"); 

// } 
// else if (checko==false)
// {
//      alert("False"); 
// }



// f. if("car" < "cat"){ alert("car is smaller than cat"); } 
 
// var car = 3;
// var cat = 4;
// if("car" < "cat")
// { 
//     alert("car is smaller than cat"); 
// } 
 
// else{
//     alert("car is larger than cat")
// }


// CHAPTER # 9-11 TASK # 06

// 6. Write a program to take input the marks obtained in three subjects
//  & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table: 
// Show the total marks, marks obtained, percentage, grade & remarks like: 
 

// var check_score = +prompt("Enter your Marks");
// total_score = 300;
// Percent_score = (check_score/total_score)*100;
// if(Percent_score>=80)
// {
//         document.write("Total Marks :  " +total_score+ "<br>")
//         document.write("Obtained Marks :  " +check_score+ "<br>")
//         document.write("Percentage :  " +Percent_score+ "%"+ "<br>")
//         document.write("your Grade is A-one" +"<br>")
//         document.write("Excellent")
// }
// else if(Percent_score>=70)
// {
//         document.write("Total Marks :  " +total_score+ "<br>")
//         document.write("Obtained Marks :  " +check_score+ "<br>")
//         document.write("Percentage :  " +Percent_score+ "%" + "<br>")
//         document.write("your Grade is A" +"<br>")
//         document.write("Good")
// }
// else if(Percent_score>=60)

// {
//         document.write("Total Marks :  " +total_score+ "<br>")
//         document.write("Obtained Marks :  " +check_score+ "<br>")
//         document.write("Percentage :  " +Percent_score+ "%" +"<br>")
//         document.write("your Grade is B" +"<br>")
//         document.write("You need to improve")
// }
// else if (Percent_score<60)
// {
//         document.write("Total Marks :  " +total_score+ "<br>")
//         document.write("Obtained Marks :  " +check_score+ "<br>")
//         document.write("Percentage :  " +Percent_score+ "%" +"<br>")
//         document.write("your Grade is Fail" +"<br>")
//         document.write("Sorry")
// }
// else
// {
//        document.write("Sorry") 
// }


// CHAPTER # 9-11 TASK # 07

// 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable.
//  Prompt user to guess the secret number. a. If user guesses the same number, 
// show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number,
//  show “Close enough to the correct answer”. 


// var guess_check = 5;
// var user_check =+prompt("Guess the secret numberr");

// if(user_check===guess_check)
// {
//         document.write("“Bingo! Correct answer”")
// }
// else if (user_check===guess_check+1)
// {
//         document.write(" “Close enough to the correct answer”")
// }
// else 
// {
//         document.write("Try again");
// }


// CHAPTER # 9-11 TASK # 08

// 8. Write a program to check whether the given number is divisible by 
// 3. Show the message to the user if the number is divisible by 3. 


// var divisible_check = +prompt("Enter the Number to check DIvisible are nd not")
// var checko = divisible_check%3;
// if(checko===0)
// {
//         document.write("The given number is divisible by three")
// }
// else{
//         document.write("its not divisible by three")
// }



// CHAPTER # 9-11 TASK # 09

// 9. Write a program that checks whether the given input is an even number or an odd number. 

// var check_num  = +prompt("Enter the number to check even are and not");
// if(check_num%2===0)
// {
//          document.write("the number is even");
// }
 
// else
// {
//         document.write("the number is not even")
// }


// CHAPTER # 9-11 TASK # 10

// 10. Write a program that takes temperature as input and shows a message based on following criteria
//  a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.”
//  c. T > 20 then “Today’s Weather is cool.” 
//  d. T > 10 then “OMG! Today’s weather is so Cool.” 

// var temp = +prompt("Enter the temperature")

// if(temp>40)
// {
//         document.write("“It is too hot outside.”");
// }
// else if(temp>30)
// {
//         document.write("“The Weather today is Normal.”");  
// }
// else if(temp>20)
// {
//         document.write("“Today’s Weather is cool.” ");   
// }
// else if(temp>10)
// {
//         document.write("“OMG! Today’s weather is so Cool.” ") ; 
// }
// else
// {
//         document.write("Chill");  
// }



// CHAPTER # 9-11 TASK # 11

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. 
// Take the following input: a. First number b. Second number c. Operation (+, -, *, /, %) Compute & show the calculated result to user. 



// var num1 = prompt("Enter !st number");
// var operator = prompt("Enter operator")
// var num2 = prompt("Enter number two");

// if(operator==='+')
// {
        
//         alert(num1+num2);
// }
// else if(operator==='-')
// {
       
//         alert(num1-num2);
// }
// else if(operator==='*')
// {
       
//         alert(num1*num2);
// }
// else if(operator==='/')
// {
       
//         alert(num1/num2);
// }
// else if(operator==='%')
// {
       
//         alert(num1%num2)
// }
