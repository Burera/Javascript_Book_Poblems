console.log("chapter#05")

// CHAPTER # 05 TASK # 01

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.  
 

// var num1 = 6;
// var num2 = 6;
// var rezult = num1+num2;
// document.write("Sum of  " +num1+ " and  " +num2+ " is " +rezult );
               
    // Method two

// var num1 = +prompt("Enter first Number");
// var num2 = +prompt("Enter first Number");

// var rezult = num1+num2;
// console.log(rezult)

// document.write("Sum of  " +num1+ " and  " +num2+ " is " +rezult )


// CHAPTER # 05 TASK # 02


// 2. Repeat task1 for subtraction, multiplication, division & modulus. 
         
//           For Subtraction

// var num1 = +prompt("Enter first Number");
// var num2 = +prompt("Enter first Number");

// var rezult = num1-num2;
// console.log(rezult)

// document.write("Sum of  " +num1+ " and  " +num2+ " is " +rezult );


//           For Multiplication

// var num1 = +prompt("Enter first Number");
// var num2 = +prompt("Enter first Number");

// var rezult = num1*num2;
// console.log(rezult)

// document.write("Sum of  " +num1+ " and  " +num2+ " is " +rezult );

//         FOr Division

// var num1 = +prompt("Enter first Number");
// var num2 = +prompt("Enter first Number");

// var rezult = num1/num2;
// console.log(rezult)

// document.write("Sum of  " +num1+ " and  " +num2+ " is " +rezult )


//                    FOr Modulus

// var num1 = +prompt("Enter first Number");
// var num2 = +prompt("Enter first Number");

// var rezult = num1%num2;
// console.log(rezult)

// document.write("Sum of  " +num1+ " and  " +num2+ " is " +rezult )


// CHAPTER # 05 TASK # 03


// 3. Do the following using JS Mathematic Expressions
//  a. Declare a variable.
//   b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
//    c. Initialize the variable with some number.
//     d. Show the value of variable in your browser like “Initial value: 5”. 
//     e. Increment the variable.
//      f. Show the value of variable in your browser like “Value after increment is: 6”. 
//      g. Add 7 to the variable.
//       h. Show the value of variable in your browser like “Value after addition is: 13”.
//        i. Decrement the variable. 
//        j. Show the value of variable in your browser like “Value after decrement is: 12”. 
//        k. Show the remainder after dividing the variable’s value by 3.
//          l. Output : “The remainder is : 0”. 
 

// var vero;
// document.write("Value after variable declaraction is "  +vero+ "<br>" );
// vero = 5;
// document.write("Initial value :  " +vero+ "<br>");
// vero = 5+1;
// document.write("Value after increment is  :  " +vero+ "<br>");
// vero = vero + 7;
// document.write("Value after addition is  :  " +vero+ "<br>")
// vero = vero-1;
// document.write("Value after decrement is  :  " +vero+ "<br>")
// vero = vero%3;
// document.write("The remainder is  :  " +vero+ "<br>")


// CHAPTER # 05 TASK # 04


// 4. Cost of one movie ticket is 600 PKR. 
// Write a script to store ticket price in
//  a variable & calculate the cost of buying 5 tickets to a movie. Example output: 
 

// var ticketPp = 600;
// var quantity = 5;
// var total = ticketPp*quantity;
// document.write("Total buying of " +quantity+ "  ticket to movie is " +total+ "PKR")
 

// CHAPTER # 05 TASK # 05


// 5. Write a script to display multiplication table of any number in your browser. E.g 

// var num1 = 4;
// document.write(+num1+ "  *   1   =   " +(num1*1)+ "<br>")
// document.write(+num1+ "  *   2   =   " +(num1*2)+ "<br>")
// document.write(+num1+ "  *   3   =   " +(num1*3)+ "<br>")
// document.write(+num1+ "  *   4   =   " +(num1*4)+ "<br>")
// document.write(+num1+ "  *   5   =   " +(num1*5)+ "<br>")
// document.write(+num1+ "  *   6   =   " +(num1*6)+ "<br>")
// document.write(+num1+ "  *   7   =   " +(num1*7)+ "<br>")
// document.write(+num1+ "  *   8   =   " +(num1*8)+ "<br>")
// document.write(+num1+ "  *   9   =   " +(num1*9)+ "<br>")
// document.write(+num1+ "  *   10    =   " +(num1*10)+ "<br>")



// CHAPTER # 05 TASK # 06


// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//  a.  Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//  c. Now store a Fahrenheit temperature into a variable. 
//  d. Convert it to Celsius & output “NNoF is NNoC”. 
  
// a:...

// // var cels = +prompt("Enter the celsius temperature");
// // var tofarhen = (cels * 9/5)+32;
// // document.write(cels+"C is "+ tofarhen+"F");

// b:...

// var farhen = +prompt("Enter the Farhenheit temperature");
// var toCelsius = (farhen-32)*5/9;
// document.write(farhen+"F is "+ toCelsius+"C");


// CHAPTER # 05 TASK # 07


// 7.  Write a program to implement checkout process of a shopping cart system
//  for an e-commerce website. Store the following in variables 
// MATH EXPRESSIONS | JAVASCRIPT 
 
// a. Price of item 1
//  b. Price of item 2
//   c. Ordered quantity of item 1
//    d. Ordered Quantity of item 2 
//    e. Shipping charges 
// Compute the total cost & show the receipt in your browser. 
 



// var item1 = 33;
// var item2 = 44;
// var quan_item1 = 3;
// var quan_item2 = 8;
// var DC = 250;
// var total_amount = item1+item2+quan_item1+quan_item2+DC;
// document.write( "Price of item 1 is " +item1+ "<br>");
// document.write( "Price of item 2 " +item2+ "<br>");
// document.write( "Ordered quantity of item 1 " +quan_item1+ "<br>");
// document.write( "Ordered quantity of item 2 " +quan_item2+ "<br>");
// document.write( "Shipping charges " +DC+ "<br>");
// document.write( "Total cost of your order is " +total_amount+ "<br>");



// 8. Store total marks & marks obtained by a student in 2 variables.
//  Compute the percentage & show the result in your browser 


// var obtained_mark = 450;
// var total_marks = 850;
// var total_percent = obtained_mark/total_marks*100;
// document.write("Obrained Marks is :  "  +obtained_mark+ "<br>")
// document.write("Total Marks is :  "  +total_marks+ "<br>")
// document.write("Total percentage is  :  "  +total_percent+ "<br>")




// 9. Assume we have 10 US dollars & 25 Saudi Riyals.
//  Write a script to convert the total currency to Pakistani Rupees.
//   Perform all calculations in a single expression. 
//   (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 
 


// var hveUS_dollars = 10 , dolr_in_pk=104.8;
// var hvesaudia_riyal =25 ,riyl_in_pk=28;
// var total_currency_pk = (hveUS_dollars*dolr_in_pk)+(hvesaudia_riyal*riyl_in_pk);
// document.write("Total currency PkR =  "  +total_currency_pk)




// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10
//  c. Divide the result by 2 Perform all calculations in a single expression


// var initializer = 8;
// var singal_expo = ((initializer+5)*10)/2;

// document.write("the three steps rezult is " +singal_expo);


// 11. The Age Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable.
//  b. Store their birth year in a variable.
//   c. Calculate their 2 possible ages based on the stored values. 
// Output them to the screen like so: “They are either NN or NN years old”. 



// var current_year = 2020;
// var birth_year = +prompt("Enter your birth year here");
// var age = current_year-birth_year;
// document.write("Current year is  " +current_year+ "<br>");
// document.write("your birth year is " +birth_year+ "<br>")
// document.write("your Age is " +age+ "<br>")
 



// 12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable. 
 
// b. Calculate the circumference based on the radius, and output “The circumference is NN”. 
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
//  Calculate the area based on the radius, and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 


// var radius = 30;
// var circum_calcu =  2*3.14*radius;
// var area_Circle = 3.14 * radius*radius;

// document.write("Radius of a CIrcle :  " +radius+ "<br>");
// document.write("The circumference is " +circum_calcu+ "<br>");
// document.write("The area is  " +area_Circle+ "<br>")

// 13. The Lifetime Supply Calculator: 
// Ever wonder how much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
//  a. Store your favorite snack into a variable
//   b. Store your current age into a variable. 
//   c. Store a maximum age into a variable. 
//   d. Store an estimated amount per day (as a number). 
//   e. Calculate how many would you eat total for the rest of your life. 
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.


// var fav_Snack = prompt("Enter Amount of Snack");
// var curr_age = 22;
// var max_Age = 65;
// var est_amount = 3;
// var lat_year = (max_Age-curr_age)*3
// document.write("Favorite snack is  " +fav_Snack+ "<br>");
// document.write("your current age  " +curr_age+ "<br>");
// document.write("maximum age is  " +max_Age+ "<br>");
// document.write(" estimated amount per day  " +est_amount+ "<br>");
// document.write("You will need  " +lat_year+" to last you until the ripe old age of " +max_Age);

