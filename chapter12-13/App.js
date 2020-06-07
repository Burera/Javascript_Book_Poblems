console.log("Chapter12-13");



// CHAPTER # 12-13  TASK # 01



// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number,
//  uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122). 

// For capital alphabets 65 – 90
// For small alphabets 97 – 122
// For digits 48 – 57

// var carr = prompt("Enter value")

// if(carr.charCodeAt(0) >= 65 &&  carr.charCodeAt(0) <= 90)
// {
//     document.write("Capital letter")
// }
// else if(carr.charCodeAt(0) >= 97 &&  carr.charCodeAt(0) <= 122)
// {
//     document.write("small Letter")
// }
// else if(carr.charCodeAt(0) >= 48 &&  carr.charCodeAt(0) <= 57)
// {
//     document.write("Number")
// }


// CHAPTER # 12-13  TASK # 02


// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal. 
//  var val1 = +prompt("Enter !st number");
//  var val2 = +prompt("Enter 2nd number");
//  if(val1>val2)
//  {
//      document.write("value 1 is larger then value 2");
//  }
//  else if(val1<val2)
//  {
//      document.write("value 2 is larger then value 1");
//  }
//  if(val1=val2)
//  {
//      document.write("both are Equal");
//  }


// CHAPTER # 12-13  TASK # 03

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero. 


// var valu = +prompt("Enter Any Value  ")
// if(valu>0)
// {
//     document.write("the value  positive")
// } 
// else if(valu<0)
// {
//     document.write("the value negative")
// } 
// else if(valu===0)
// {
//     document.write("the value xero")
// } 


// CHAPTER # 12-13  TASK # 04

// 4. Write a program that takes a character
//  (i.e. string of length 1) and returns true if it is a vowel, false otherwise 


// var resu = "aeiouAEIOU"
// var leng = prompt("Enter Any character")

// // if(leng==='a' ||  leng==='e' || leng==='i' || leng==='o' || leng==='u')
// {
//     document.write("It is a vowel")
// }
// else
// {
//     document.write("false")
// }

//    if(leng.length===1 && resu.includes(leng))
//    {
       
//          document.write("It is a vowel")
      
//    }
//    else 
//    {
//      document.write("false")
//    }


// CHAPTER # 12-13  TASK # 05

// 5. Write a program that 
// a. Store correct password in a JS variable. 
// b.  Asks user to enter his/her password 
// c.  Validate the two passwords: 
// i. Check if user has entered password.If not, then give message “ Please enter your password” 
// ii. Check if both passwords are same. If they are same,
//  show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise. 
 
 


//  var Asks_her_pass = prompt("Enter the her password");
//  var Asks_his_pass = prompt("Enter the his password");

//  if(Asks_her_pass==="" && Asks_his_pass==="")
//  {
//      document.write("“ Please enter your password” ");
//  }
// else if(Asks_his_pass===Asks_his_pass)
// {
//     document.write(" “Correct! The password you entered matches the original password” ");
// }
// else if(Asks_his_pass!==Asks_her_pass)
// {
//     document.write("“Incorrect password”   ");
// }



                           // Another Way

//  var pss = "burera";
//  var Asks = prompt("Enter your password");
//  if(Asks==="")
//  {
//     document.write("“ Please enter your password” "); 
//  } 
//  else if (Asks===pss)
//  {
//     document.write(" “Correct! The password you entered matches the original password” ");
//  } 
//  else if(Asks!==pss)
//  {
//     document.write("“Incorrect password”   "); 
//  }
 

// CHAPTER # 12-13  TASK # 06

//  6. This if/else statement does not work.
//   Try to fix it: var greeting; var hour = 13; if (hour < 18) { greeting = "Good day"; else greeting = "Good evening"; } 
 
// var greeting; 
// var hour = 13;
//  if (hour < 18) 
//  {
//     greeting = "Good day";
//       document.write(greeting);

// }
// else
// {
//        greeting = "Good evening"; 
//        document.write(greeting);
       
// } 
 
 
// CHAPTER # 12-13  TASK # 07

// 7. Write a program that takes time as 
// input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements 

// var time_format = 1900;
// var enter_Time = +prompt("Enter time in 24 hours format ");

// if(enter_Time>=0000 && enter_Time<1200)
// {
//     document.write("Good Morning!");
// }
// else if(enter_Time>=1200 && enter_Time<1700)
// {
//     document.write("Good afternoon!!")
// }
// else if(enter_Time>=1700 && enter_Time<2100)
// {
//     document.write("Good evening!!")
// }
// else if(enter_Time>=2100 && enter_Time<2359)
// {
//     document.write("Good Night!!")
// }


