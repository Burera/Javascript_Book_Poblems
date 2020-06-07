console.log("Chapter17-20");


// CHAPTER # 17-20 TASK # 01


// 1. Declare and initialize an empty multidimensional array. (Array of arrays)  

// var arr1 =[[],[]];


// CHAPTER # 17-20 TASK # 02

// 2. Declare and initialize a multidimensional array representing the following matrix:  
 
// var numb = [
//     [0,1,2,3],
//     [1,0,1,2,],
//     [2,1,0,1]
// ]
// for(var i=0;i<4;i++)
// {
//      for(let j =0 ;j<4;j++)
//      {
//          document.write(numb[i][j] + " ")
//     }
//       document.write(  "<br>")
// }



// CHAPTER # 17-20 TASK # 03

// 3. Write a program to print numeric counting from 1 to 10.

// var num;
//  for(var i = 1 ;i<=10;i++)
//  {
//   document.write(i + "<br>");
 

//  }
// document.write("..........................................<br>" )
//  var input = 1;
// while (input <= 10) {
//  document.write(input +"<br>");
//  input++;

// }

// CHAPTER # 17-20 TASK # 04 

// 4.  Write a program to print multiplication table of any number using for loop.
//  Table number & length should be taken as an input from user. 


// var user = +prompt("Enter Any NUmber");
// var len = +prompt("Enter Any Lenght");

// for(var i =1 ;i<=len ; i++)
// {
//     document.write(user + " x " + i  + " = " +user*i + "<br>")
// }

// CHAPTER # 17-20 TASK # 05

// 5. Write a program to print items of the following array using for loop:
//  fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] 



// var fruits = ["apple", "banana", "mango", "orange", "strawberry"] 

// for(var i = 0; i<=fruits.length;i++)
// {

//      document.write(fruits[i]  +"<br>")


// }

// document.write("Element at  index  0 is  "+fruits[0] +"<br>")
// document.write("Element at  index 1 is " +fruits[1] +"<br>")
// document.write("Element at  index  2 is "  +fruits[2] +"<br>")
// document.write("Element at  index  3 is "  +fruits[3] +"<br>")
// document.write("Element at  index 4 is " +fruits[4] +"<br>")


// CHAPTER # 17-20 TASK # 06

// 6. Generate the following series in your browser. See example output.
//  a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
//  b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
//  c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//  d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
//  e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k 


// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 

//  document.write("Counting  : ")    
// for(var i =0 ;i<=15;i++)
// {
   
//     document.write(i +",");
// }


// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 

// document.write("Reverse counting  : ")  
// var count = 10;  
// for(var i =count ;i>=1;i--)
// {
   
//     document.write(i +",");
// }


// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// for(var i = 0;i<=20;i++)
// {
//    if(i%2===0)
//    {
//        document.write(i + " , ")
//    }
//    else
//    {
//        document.write("")
//    }
// }

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 

// for(var i = 0;i<=20;i++)
// {
//    if(i%2!==0)
//    {
//        document.write(i + " , ")
//    }
//    else
//    {
//        document.write("")
//    }
// }


// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k 

// for(var i = 2;i<=20;i++)
// {
//    if(i%2===0)
//    {
//        document.write(i + "k" +",")
//    }
//    else
//    {
//        document.write("")
//    }
// }


// CHAPTER # 17-20 TASK # 07

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:





// var checker = prompt("Welcome to ABC Bakery, What do you want to Order Sir/Ma'am");
//  var Arre = ["cake", "apple pie", "cookie", "chips", "patties"];

//  if(checker===Arre[2])
//  {
//      document.write("COokies are available at index of " +Arre.indexOf("cookie")  +"in Our bakery" )
//  }
//  else if (checker!==Arre)
//  {
//      document.write("WE are Sorry! pastery are not available in our bakery")
//  }



// CHAPTER # 17-20 TASK # 08

//  8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

// var num = [24, 53, 78, 91, 12];
// document.write(Math.max.apply(null, num));


// var larr = [24, 53, 78, 91, 12];
// var larg_value= 0;

// for (i=0; i<=larr.length;i++){
//     if (larr[i]>larg_value) {
//         var larg_value=larr[i];
//     }
  
// }



// document.write("Arrays items : " +larr + "<br>")
// document.write("Largest Number is : " +larg_value);


// CHAPTER # 17-20 TASK # 09

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]



// var larr = [24, 53, 78, 91, 12];
// var larg_value=larr[0];

// for (i=0; i<=larr.length;i++){
//     if (larr[i]<larg_value) {
//         var larg_value=larr[i];
//     }
  
// }



// document.write("Arrays items : " +larr + "<br>")
// document.write("Largest Number is : " +larg_value);


// CHAPTER # 17-20 TASK # 10

// 10. Write a program to print multiples of 5 ranging 1 to 100.


// for (var i =1 ;i<=100;i++)
// {
//     if(i%5===0)
//     {
//         document.write(i +" , ")
//     }
// }