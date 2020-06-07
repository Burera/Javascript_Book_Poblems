console.log("Chapter14-16");


// CHAPTER # 14-16  TASK # 01

// 1. Declare an empty array using JS literal notation to store student names in future. 

// var student = [];


// CHAPTER # 14-16  TASK # 02


// 2. Declare an empty array using JS object notation to store student names in future. 

// var studentt = {

// }
// var std = new Array();


// CHAPTER # 14-16  TASK # 03


// 3. Declare and initialize a strings array. 


// var stg = ["burera","biya","afera"]


// CHAPTER # 14-16  TASK # 04


// 4.  Declare and initialize a numbers array. 

// var numt = [2,4,5,6,7,];


// CHAPTER # 14-16  TASK # 05


// 5.  Declare and initialize a boolean array.

// var bool = [true,false];

// CHAPTER # 14-16  TASK # 06


// 6. Declare and initialize a mixed array. 

// var mixed = ["burera",2,true,"biya",4];

// CHAPTER # 14-16  TASK # 07


// 7. Declare and Initialize an array and store available education qualifications
//  in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like: 

// let degree = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
//  console.log(degree)
//  document.write(" qualifications" +"<br>")
//  document.write(" (1) " +degree[0]+"<br>")
//  document.write(" (2) " +degree[1]+"<br>")

//  document.write(" (3) " +degree[2]+"<br>")

//  document.write(" (4) " +degree[3]+"<br>")

//  document.write(" (5) " +degree[4]+"<br>")
//  document.write(" (6) " +degree[5]+"<br>")

//  document.write(" (7) " +degree[6]+"<br>")

//  document.write(" (8) " +degree[7]+"<br>")


  // CHAPTER # 14-16  TASK # 08


//  8. Write a program to store 3 student names in an array.
//  Take another array to store score of these three students.
//   Assume that total marks are 500 for each student, display the scores & percentages of students like:  
 
// var stu = ["burera","biya","afera"];
// var mar = [230,250,220];
// var tot = 300;

// document.write("Score of   " +stu[0]+ " is " +mar[0] +" Percentage : " +(mar[0]/tot)*100+ "%"+"<br>")
//  document.write("Score of   " +stu[1]+ " is " +mar[1] +" Percentage : " +(mar[1]/tot)*100+ "%"+"<br>")
//  document.write("Score of   " +stu[2]+ " is " +mar[2] +" Percentage : " +(mar[2]/tot)*100+ "%"+"<br>")


// CHAPTER # 14-16  TASK # 09



// 9. Initialize an array with color names. Display the array elements in your browser. 


//  var color = ["orange","blue","green","white"];
// document.write(color +"<br>");


// a. Ask the user what color he/she wants to add to the beginning & 
// add that color to the beginning of the array. Display the updated array in your browser. 


//  color.unshift("yellow");
//  document.write(color +"<br>");


//  b. Ask the user what color he/she wants to add to the end & add that color to the end of the array.
//   Display the updated array in your browser. 

// color.push("black");
// document.write(color +"<br>");


// c. Add two more color to the beginning of the array. Display the updated array in your browser. 

// color.push("brown","pink");
// document.write(color +"<br>");

// d. Delete the first color in the array. Display the updated array in your browser. 

// color.shift("");
// document.write(color +"<br>");


// e. Delete the last color in the array. Display the updated array in your browser. 

// color.pop();
// document.write(color +"<br>");


// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired 


// color.splice(2,0,"purple");
// document.write(color +"<br>");


// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.
//  Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser. 

// color.splice(4,1);
// document.write(color +"<br>");


// CHAPTER # 14-16  TASK # 10


// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. 

// var studentss = [320,230,480,120]
// document.write("Scores Of STudent  :  " +studentss+ "<br>")
// studentss.sort()
// document.write("Scores Of STudent  :  " +studentss+ "<br>")

// var fruit = ["Orange","Aplle","Mango"]
// document.write("Scores Of STudent  :  " +fruit+ "<br>")
// fruit.sort()
// document.write("Scores Of STudent  :  " +fruit+ "<br>")


// CHAPTER # 14-16  TASK # 11
 

// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. 
 

// var city = ["karachi","hyderabad","mirpurkhas","islamabad","lahore"];

//  var selected_city=city.slice(1,3);
//  document.write(city +"<br>")
//  document.write(selected_city)


// CHAPTER # 14-16  TASK # 12


// 12.  Write a program to create a single string from the below mentioned
//  array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method) 
 

// var cato = ["This " ,"is "  ," my"  ," cat"];
// document.write("Arrrays is : " +"<br>")
// document.write(cato  +"<br>");
// document.write("String is : "  +"<br>")
// document.write(cato.join("")  +"<br>")


// CHAPTER # 14-16  TASK # 13


// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored.
//  (FIFO-First In First Out) 
 
  var arr1 = ["cat","dog","human","whale","seal"];

//  document.write("Animals : " +"<br>");
//  document.write(arr1 +"<br>");
//  document.write("Out : " +"<br>");
//  document.write(arr1[0] +"<br>")
//  document.write("Out : " +"<br>");
//  document.write(arr1[1] +"<br>");
//  document.write("Out : " +"<br>");
//  document.write(arr1[2] +"<br>");
//  document.write("Out : " +"<br>");
//  document.write(arr1[3] +"<br>");
//  document.write("Out : " +"<br>");
//  document.write(arr1[4] +"<br>");



// CHAPTER # 14-16  TASK # 14


// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out) 

// document.write("Animals : " +"<br>");
//  document.write(arr1 +"<br>");
//  document.write("Out : " +"<br>");
//  document.write(arr1[4] +"<br>")
//  document.write("Out : " +"<br>");
//  document.write(arr1[3] +"<br>");
//  document.write("Out : " +"<br>");
//  document.write(arr1[2] +"<br>");
//  document.write("Out : " +"<br>");
//  document.write(arr1[1] +"<br>");
//  document.write("Out : " +"<br>");
//  document.write(arr1[1] +"<br>");


// CHAPTER # 14-16  TASK # 15

//  15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//  Display the following dropdown/select menu in your browser using document.write() method: 


// var select = document.getElementById("select");
// var phones = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];

// for(var i = 0 ;i<phones.length;i++)
// {
   
//     var option = document.createElement("OPTION"),
//     txt = document.createTextNode(phones[i]);
//     option.appendChild(txt);
//     select.insertBefore(option,select.lastChild);
    

// }







