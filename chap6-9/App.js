console.log("Chapter6-9");

// CHAPTER 6-9 TASK # 01

// 1. Write a program to take a number in a variable, 
// do the required arithmetic to display the following result in your browser:  
 
// var a = 5;
// document.write("Result :" +"<br>");
// document.write("The Value of a is : " +a+"<br>");

// document.write(".................................."  +"<br>");

//  var x=++a;
// document.write("The Value of ++a is : " +x+"<br>");
// document.write("Now The Value of a is : " +x+"<br>");

// document.write(".................................."  +"<br>");

// document.write("The Value of a++ is : " +x+"<br>");
// x++;
// document.write("Now The Value of a is : " +x+"<br>");

//  var k = --x;
// document.write(".................................."  +"<br>");

// document.write("The Value of --a is : " +k+"<br>");

// document.write("Now The Value of a is : " +k+"<br>");

// document.write(".................................."  +"<br>");

// document.write("The Value of a-- is : " +k+"<br>");
// k--;

// document.write("Now The Value of a is : " +k+"<br>");


// CHAPTER 6-9 TASK # 02


// 2. What will be the output in variables a, b & result after execution of the following script:
//  var a = 2, b = 1; var result = --a - --b + ++b + b--;
//   Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--; 



var a = 2;
var b = 1;
// var x = --a - --b + ++b + b--;
// document.write(".................................."  +"<br>");
// document.write(" --a - --b + ++b + b- : " +x+ "<br>"  );

//   Explain the output at each stage: 
    //  --a;


     
    // var z = --a;  //pre-increment

    // document.write(".................................."  +"<br>");
    // document.write("decrement before print :  " +z+ "<br>")


    // --a - --b;


    //   var y = --a - --b;
   // document.write(".................................."  +"<br>");
    // document.write(" pre decrement both a and b ...then a -b : " +y+ "<br>" )

   
    // --a - --b + ++b

    // var n = --a - --b + ++b;
    // document.write(".................................."  +"<br>");
    // document.write(" pre decrement both a and b ...then a -b : " +n+ "<br>" )



    //--a - --b + ++b + b--
    

    // var d = --a - --b + ++b + b--;
    // document.write(".................................."  +"<br>");
    // document.write(" pre decrement both a and b ...then a -b : " +d+ "<br>" )

   

    // {--a - --b + ++b + b-- : 1 - 0 + 2 + 0 = 3}

     // CHAPTER 6-9 TASK # 03

    // 3. Write a program that takes input a name from user & greet the user. 

    // var user_name = prompt("Enter Your Name" , "I am greeting Variable");
    // var grre = "Hello Assalam-o-Alaikum";
    // document.write(user_name +"!  " +grre)


     // CHAPTER 6-9 TASK # 05

    // 5. Write a program to take input a number from user & display it’s multiplication table on your browser. 
    // If user does not enter a new number, multiplication table of 5 should be displayed by default. 



    // var user_number = +prompt("Enter ANy number");

    // if (user_number != "") {
    //     for (var i = 1; i <= 10; i++) {
    //         document.write(user_number + "x" + i + "=" + user_number * i + "<br>");
    //     }
    //  }
    // else{
    //     for (var i =1 ;i<=10;i++)
    //  {
    //      document.write("5" + "x" +i+ "=" +5*i +"<br>");
    //  }
    // }


    // CHAPTER 6-9 TASK # 06

    // 6. Take a) Take three subjects name from user and store them in 3 different variables.
    //  b) Total marks for each subject is 100, store it in another variable.
    //  c) Take obtained marks for first subject from user and stored it in different variable. 
    // d) Take obtained marks for remaining 2 subjects from user and store them in variables. 
    // e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table) 


    // var book_name1 = "Chemistry ";
    // var book_name2 = "Phys";
    // var book_name3 ="Eng";
    // var total_mark =100;
    // var sub1 = +prompt("ENter chemistry mark ");
    
    // var sub1_percent = (sub1/total_mark)*100;
    //  document.write(book_name1+ "           "  +total_mark+  "           :         " +sub1+ "       =         " +sub1_percent+"%"+ "<br>")
    //  document.write(",.................................................." +"<br>")


    //  var sub2 = +prompt("ENter phy mark ");
    //  var sub2_percent = (sub2/total_mark)*100;
    //  document.write(book_name2+ "           "  +total_mark+  "           :         " +sub2+ "       =         " +sub2_percent+"%"+ "<br>")
    //  document.write(",.................................................." +"<br>")

    //  var sub3 = +prompt("ENter Eng mark ");
    //  var sub3_percent = (sub3/total_mark)*100;
    //  document.write(book_name3+ "           "  +total_mark+  "           :         " +sub3+ "       =         " +sub3_percent+"%"+ "<br>")
    //  document.write(",.................................................." +"<br>")

    //  var total_obtained_mark = sub1+sub2+sub3;
    //  var total = 300;
    //  var total_percent = (total_obtained_mark/total)*100;

    //  document.write( "    TOTAL PERCENTAGE     "  +total+  "           :         " +total_obtained_mark+ "       =         " +total_percent+"%"+ "<br>")
    //  document.write(",.................................................." +"<br>")
