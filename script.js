// Alert Chapter 1

// Alert Q1
// alert("Welcome to Our Site", "demo");

// Alert Q2
// document.write("Error! Please enter a valid password.");

// Alert Q3
// document.write("Welcome to JS Land... <br> Happy Coding");

// Alert Q4
// alert("Welcome to JS Land");
// alert("Happy Coding");

// Alert Q5
// console.log("Hello... I can run JS through my web browser's console");

// Alert Q6
// See in html file

// Alert Q7
// b. Body (before your page’s HTML)
// is the correct option


// VARIABLES FOR STRINGS  Chapter 2

// Q1
// var username;

// Q2
// var myName = "Muhammad Shabbir";

// Q3
// var message = "Hello World";
// alert(message);

// Q4
// var fullName = "Muhammad Shabbir";
// var age = "23 Years Old";
// var certificate = "Certified Mobile Application Developement";

// alert(fullName);
// alert(age);
// alert(certificate);

// Q5 Incomplete
// let n = 5;
// let eatPizza = "pizza";

// for (let i = 0; i < n; i++) {
//   // printing star
//   for (let k = 0; k < n - i; k++) {
//     eatPizza += eatPizza[k];
//   }
//   eatPizza  += "\n";
// }
// alert(eatPizza);


// Q6
// var email = "muhammadshabbir4589@gmail.com";

// alert("My Email Address is: " + email);

// Q7
// var book = "A smarter way to learn JavaScript";

// alert("I am trying to learn from the Book " + book);

// Q8
// document.write("Yah! I can write HTML content through JavaScript");

// Q9
// var specialString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";

// alert(specialString);
// document.write(specialString);


// VARIABLES FOR NUMBERS Chapter 3

// Q1
// var age = 23;

// alert("I am " + age + " years old");

// Q2
// var visitorVisit = 14;

// alert("You have visited this site " + visitorVisit + " times");

// Q3
// var birthYear = 1999;

// document.write("My birth year is " + birthYear + "<br>");
// document.write("Data type of my declared variable is number");


// Q4
// var visitorsName = "John Doe";
// var productTittle = "T-shirt(s)";
// var quantity = 5;

// document.write(visitorsName + " ordered " + quantity + " " + productTittle + " on XYZ Clothing store")


// VARIABLE NAMES: LEGAL & ILLEGAL Chapter 4

// Q1
// var $myName, age, country;

// Q2
//Legal Variables
// var $myname, _myname, myName, my_name, my$name;
//Illegal Variables
// var 1myname, -myname, @myname, %myName, var;

// Q3
// document.write("<h1>Rules for naming JS variables</h1>" + "<br>");

// document.write("Variable names can only contain letter, numbers, $ and _ . For example $name, _name or name" + "<br>");

// document.write("Variables must begin with a letter, $ or _. For example $name, _name or name" + "<br>");

// document.write("Variable names are case sensitive" + "<br>");

// document.write(" Variable names should not be JS keywords");



// MATH EXPRESSIONS chapter 5

// Q1
// var firstVal = 3;
// var secondVal = 5;

// document.write("Sum of " + firstVal + " and " + secondVal + " is " + (firstVal + secondVal));

// Q2
// var firstVal = 3;
// var secondVal = 5;

// document.write("Sum of " + firstVal + " and " + secondVal + " is " + (firstVal - secondVal) + "<br>");
// document.write("Sum of " + firstVal + " and " + secondVal + " is " + (firstVal * secondVal) + "<br>");
// document.write("Sum of " + firstVal + " and " + secondVal + " is " + (firstVal / secondVal) + "<br>");
// document.write("Sum of " + firstVal + " and " + secondVal + " is " + (firstVal % secondVal));

// Q3
// var firstString;
// var number = 5;

// document.write("Value after variable declaration is: " + firstString + "<br>");
// document.write("Initial value: " + number + "<br>");
// number++;
// document.write("Value after increment is: " + number + "<br>");
// number += 7;
// document.write("Value after addition is:  " + number + "<br>");
// number--;
// document.write("Value after decrement is:  " + number + "<br>");
// number %= 3;
// document.write("The remainder is : " + number);


// Q4
// var movieTicket = 600;
// movieTicket *= 5;

// document.write("Total cost to buy " + 5 + " tickets to a movie is " + movieTicket + "PKR");

// Q5
// var table = 9;

// document.write("Table of " + table + " <br> <br>");

// for(i=1; i<=10; i++){
//     var multiply = i*table;
//   document.write(table + " X " + i + " = " + multiply + "<br>");
// }

// Q6
// var cTemp = 25;
// var cToFahr = cTemp * 9 / 5 + 32;
// var cmessage = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';

// var fTemp = 70;
// var fToCel = (fTemp - 32) * 5 / 9;
// var fmessage = fTemp+'\xB0F is ' + fToCel + '\xB0C.';

// document.write(cmessage + "<br>");
// document.write(fmessage);

// Q7
// var pItem1 = 650;
// var pItem2 = 100;
// var oqitem1 = 3;
// var oqitem2 = 7;
// var shipCharges = 100;

// document.write("Price of item 1 is " + pItem1 + "<br>");
// document.write("Quantity of item 1 is " + oqitem1 + "<br>");
// document.write("Price of item 2 is " + pItem2 + "<br>");
// document.write("Quantity of item 2 is " + oqitem2 + "<br>");
// document.write("Shipping Charges " + shipCharges + "<br>");

// var toalItem1 = (pItem1 * oqitem1);
// var toalItem2 = (pItem2 * oqitem2);

// var totalAmount = (toalItem1 + toalItem2 + shipCharges);

// document.write("Total cost of your order is " + totalAmount);

// Q8
// var totalMarks = 980;
// var marksObtained = 804;
// const constNumber = 100;

// var percent = (marksObtained/totalMarks) * constNumber;

// document.write("<h1>Marks Sheet</h1> <br>");
// document.write("Total Marks " + totalMarks + "<br>");
// document.write("Marks Obtained" + marksObtained + "<br>");
// document.write("Percentage " + percent + "%");


// Q9
// document.write("<h1>Currency in PKR</h1>");
// var pkrRupees = (104.80 * 10) + (28 * 25);
// document.write("Total Curren in PKR " + pkrRupees)

// Q10
// var someNumber = ((10 + 5) * 10)/2;
// document.write(someNumber);

// Q11
// document.write("<h1>Age Calculator</h1> <br>")
// var currentYear = 2016;
// var birthYear = 1992;
// var confrimYear = currentYear - birthYear;

// document.write("Current Year: " + currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("Your Age is: " + confrimYear + "<br>");
// document.write("They are either " + confrimYear + " or " + (confrimYear - 1) + " years old");

// Q12
// var radiusValue = 20;
// const pieValue = 3.142;
// var circum = 2 * pieValue * radiusValue;
// var area = pieValue * (radiusValue) * radiusValue;
// document.write("<h1>The Geometrizer</h1> <br>");
// document.write("Radius of a circle: " + radiusValue + "<br>");
// document.write("The Circumference is: " + circum + "<br>");
// document.write("The Area is: " + area + "<br>");

// Q13
// document.write("<h1>The Lifetime Supply Calculator</h1> <br>");
// var favSnack = "Choclate Chip";
// var currentAge = 15;
// var maxAge = 65;
// var ammountPerDay = 3;
// var needChoclate = (maxAge - currentAge) * ammountPerDay;

// document.write("Favourite Snack: " + favSnack + "<br>");
// document.write("Current Age: " + currentAge + "<br>");
// document.write("Estimated Maximum Age: " + maxAge + "<br>");
// document.write("Amount of Snacks per day: " + ammountPerDay + "<br>");
// document.write("You will need " + needChoclate  + " to last you until the ripe old age of " + maxAge);



// MATH EXPRESSIONS Chapter 6-9

// Q1
// var userInput = prompt("Enter any Number: ");

// document.write("Result: <br>");
// document.write("The value of a is: " + userInput + "<br>");
// document.write("..................................... <br> <br>")

// document.write("The value of ++a is: " + ++userInput + "<br>");
// document.write("Now the value of a is: " + userInput + "<br> <br>");


// document.write("The value of a++ is: " + userInput++ + "<br>");
// document.write("Now the value of a is: " + userInput + "<br> <br>");

// document.write("The value of --a is: " + --userInput + "<br>");
// document.write("Now the value of a is: " + userInput + "<br> <br>");


// document.write("The value of a-- is: " + userInput-- + "<br>");
// document.write("Now the value of a is: " + userInput + "<br> <br>");

// Q2 
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("result is " + result + "<br>");


// Q3
// var userInput = prompt("Enter your Full Name:")
// alert("Welcome " + userInput + " to Our Site");

// Q5
// var table = +prompt("Enter Table Number: ");
// var tableDefault = 5;

// if (table) {
//     document.write("Table of " + table + " <br> <br>");
//     for(i=1; i<=10; i++){
//         var multiply = i*table;
//       document.write(table + " X " + i + " = " + multiply + "<br>");
//     }    
// } else {
//     document.write("Table of " + tableDefault + " <br> <br>");
//     for(i=1; i<=10; i++){
//         var multiply = i*tableDefault;
//       document.write(tableDefault + " X " + i + " = " + multiply + "<br>");
//     }
// }

// Q6
// var sub1 = prompt("Enter First Subject Name: ");
// var sub2 = prompt("Enter Second Subject Name: ");
// var sub3 = prompt("Enter Third Subject Name: ");
// var obtainedMarks1 = +prompt("Enter First Subject Marks: ");
// var obtainedMarks2 = +prompt("Enter Second Subject Marks: ");
// var obtainedMarks3 = +prompt("Enter Third Subject Marks: ");
// var subjectMarks = 100;
// var subjectPercentage1 = (obtainedMarks1 / subjectMarks) * 100;
// var subjectPercentage2 = (obtainedMarks2 / subjectMarks) * 100;
// var subjectPercentage3 = (obtainedMarks3 / subjectMarks) * 100;
// var totalObtainedMarks = parseInt(obtainedMarks1 + obtainedMarks2 + obtainedMarks3);
// var totalSubjectMarks = subjectMarks * 3;
// var totalPercentage = (totalObtainedMarks/totalSubjectMarks) * 100;

// document.write("<table>");
// document.write("<tr>");  
// document.write("<th>Subject</th>");
// document.write("<th>Total Marks</th>");
// document.write("<th>Obtained Marks</th>");
// document.write("<th>Percentage</th>");  
// document.write("</tr>"); 

//     document.write("<tr>"); 
//     document.write("<td>" + sub1 + "</td>"); 
//     document.write("<td>" + subjectMarks + "</td>"); 
//     document.write("<td>" + obtainedMarks1 + "</td>"); 
//     document.write("<td>" + subjectPercentage1 + "% </td>"); 
//     document.write("</tr>");

//     document.write("<tr>"); 
//     document.write("<td>" + sub2 + "</td>"); 
//     document.write("<td>" + subjectMarks + "</td>"); 
//     document.write("<td>" + obtainedMarks2 + "</td>"); 
//     document.write("<td>" + subjectPercentage2 + "% </td>"); 
//     document.write("</tr>");


//     document.write("<tr>"); 
//     document.write("<td>" + sub3 + "</td>"); 
//     document.write("<td>" + subjectMarks + "</td>"); 
//     document.write("<td>" + obtainedMarks3 + "</td>"); 
//     document.write("<td>" + subjectPercentage3 + "% </td>"); 
//     document.write("</tr>");

//     document.write("<tr>"); 
//     document.write("<td></td>"); 
//     document.write("<td>" + "<b>" + totalSubjectMarks + "</b>" + "</td>"); 
//     document.write("<td>" + "<b>" + totalObtainedMarks + "</b>" + "</td>"); 
//     document.write("<td>" + "<b>" + totalPercentage + "<b>" + "% </td>"); 
//     document.write("</tr>");


// document.write("</table>"); 

// USER INPUT & CONDITIONAL STATEMENT Chapter 9-11

// Q1

// var cityName = prompt("Enter your City Name");

// if (cityName.toLowerCase() == "karachi") {
//     alert("Welcome to city of lights");
// }
// else{
//     alert("city does not match");
// }

// Q2

// var genderName = prompt("Enter your Gender Name");

// if (genderName.toLowerCase() == "male") {
//     alert("Good Morning Sir");
// }
// else if (genderName.toLowerCase() == "female"){
//     alert("Good Morning Ma'am");
// }

// Q3

// var color1 = prompt("Enter First color Name: ");
// var color2 = prompt("Enter Second color Name: ");
// var color3 = prompt("Enter Third color Name: ");


// document.write("<table>");
// document.write("<tr>");  
// document.write("<th>Signal Color</th>");
// document.write("<th>Message</th>");
// document.write("</tr>"); 

//     document.write("<tr>"); 
//     document.write("<td>" + color1 + "</td>"); 
//     document.write("<td>Must Stop</td>"); 
//     document.write("</tr>");

//     document.write("<tr>"); 
//     document.write("<td>" + color2 + "</td>"); 
//     document.write("<td>Ready to move</td>"); 
//     document.write("</tr>");


//     document.write("<tr>"); 
//     document.write("<td>" + color3 + "</td>"); 
//     document.write("<td>Move now</td>"); 
//     document.write("</tr>");


// document.write("</table>"); 

// Q4
// var remainingFuel = prompt("Enter Your Remaining Fuel");
// var lessFuel = 0.25;

// if (remainingFuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }

// Q5
// a, displayed
// b, not
// c, displayed
// d, displayed
// e, displayed
// f, displayed


// Q6 
// var firstSub = +prompt("Enter First Subject Marks");
// var secondSub = +prompt("Enter Second Subject Marks");
// var thirdSub = +prompt("Enter Third Subject Marks");
// var totalMarks = +prompt("Enter Total Marks");
// var obtainedMarks = (firstSub + secondSub + thirdSub);
// var per = (obtainedMarks/totalMarks) * 100;

// document.write("<h1>Marks Sheet</h1>");

// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + obtainedMarks + "<br>");
// document.write("Percentage: " + per + "%" + "<br>");

// if(per >= 80){
//     document.write("Grade: A-one" + "<br>");
//     document.write("Remarks: Excellent");
// }
// else if(per >= 70){
//     document.write("Grade: A" + "<br>");
//     document.write("Remarks: Good");
// }

// else if(per >= 60){
//     document.write("Grade: B" + "<br>");
//     document.write("Remarks: You Need to improve");
// }

// else if(per < 60){
//     document.write("Grade: Fail" + "<br>");
//     document.write(Remarks: Sorry");
// }

// Q7
// var secretNumber = 7;
// var enterNumber = +prompt("Guess a Secret Number");

// if (enterNumber == secretNumber) {
//     alert("Bingo! Correct answer");
// }
// else{
//     alert("Close enough to the correct answer");    
// }
    
// Q8
// var userNumber = +prompt("Enter a Number");
// var divisibleNumber = userNumber % 3;

// if(divisibleNumber == 0){
//     alert("This is correct Number");
// }

// Q9

// var userNumber = +prompt("Enter a Number");
// var divisibleNumber = userNumber % 2;

// if(divisibleNumber == 0){
//     alert("Even Number");
// }
// else{
//     alert("Odd Number");
// }


// Q10

// var temp = +prompt("Enter a Temperature");

// if (temp > 40) {
//     alert("It is too hot outside.");
// } 
// else if(temp > 30) {
//     alert("The Weather today is Normal.");
// }
// else if(temp > 20) {
//     alert("Today’s Weather is cool.");
// }
// else if(temp > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// }
// else{
//     alert("Enter a Wrong Number");
// }

// Q11

// var firstNumber = +prompt("Enter a First Number");
// var secondNumber = +prompt("Enter a Second Number");
// var operationUser = prompt("Enter a Operation");

// if (operationUser == "+") {
//     alert("Your Result is: " + firstNumber + secondNumber);
// } 
// else if (operationUser == "-") {
//     alert("Your Result is: " + (firstNumber - secondNumber));
// }
// else if (operationUser == "*") {
//     alert("Your Result is: " + firstNumber * secondNumber);
// }
// else if (operationUser == "/") {
//     alert("Your Result is: " + firstNumber / secondNumber);
// }
// else if (operationUser == "%") {
//     alert("Your Result is: " + firstNumber % secondNumber);
// }



// IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS Chapter 12 -13

// Q1
// var charInput = prompt("Enter a Character or Number");

// console.log(charInput);

// if (charInput >= "A" && charInput <= "Z") {
//     alert(charInput + " is an UpperCase character");
// }
// else if (charInput >= "a" && charInput <= "z") {
//     alert(charInput + " is an Lowercase character");
// }
// else{
//     alert(charInput + " is an Number");
// }

// Q2

// var firstInt = parseInt(prompt("Enter a First Integer Number", "0"));
// var secondInt = parseInt(prompt("Enter a Second Integer Number", "0"));

// if (firstInt > secondInt) {
//     alert("Display a Larger Number " + firstInt);
// }
// else if (secondInt > firstInt) {
//     alert("Display a Larger Number " + secondInt);
// }
// else if (secondInt == firstInt){
//     alert("First Integer Number " + firstInt + " are equal to Second Integer Number " + secondInt);
// }

// Q3

// var inputUser = +prompt("Enter a Number");

// if (inputUser > 0) {
//     alert("Numer is Positive");
// } else if (inputUser < 0) {
//     alert("Numer is Negative");
// }
// else if (inputUser == 0) {
//     alert("Numer is Zero");
// }

// Q4

// var vowel = prompt("Enter a Character");

// if (vowel.toLowerCase() == 'a' || vowel.toLowerCase() == 'e' || vowel.toLowerCase() == 'i' || vowel.toLowerCase() == 'o' || vowel.toLowerCase() == 'u') {
//     alert("True");
// } else {
//     alert("False");
// }

// Q5
// var correctPass = "Jawan Pakistan";
// var enterPass = prompt("Please Enter your Password");

// if(!enterPass){
//     var enterPass = prompt("Please Enter your Password");
// }
// else if (enterPass == correctPass) {
//     alert("Correct! The password you entered matches the original password")
// }
// else{
//     alert("Incorrect password");
// }

// Q6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     document.write(greeting = "Good day");
// }
// else{
//     document.write(greeting = "Good evening");
// }

// Q7

// var time = +prompt("Enter a Time")

// if (time >= 0000 && time < 1200) {
//     alert("Good Morning");
// }
// else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon");
// }
// else if (time >= 1700 && time < 2100) {
//     alert("Good Evening");
// }
// else if (time >= 2100 && time < 2359) {
//     alert("Good Night");
// }


// ARRAYS Chapter 14-16

// Q1
// var literalArr =[];

// Q2
// var objectArr = new Array();

// Q3
// var stringArr = ["Shabbir","Aqsa","Namal"];

// Q4
// var numberArr = [100, 200, 300, 3];

// Q5
// var myArr = [true,false];

// Q6
// var mixedArr = ["Shabbir", 100, true];

// Q7
// var edu = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
// document.write("<h1>Qualifications</h1> <br>");

// for (let i = 0; i < edu.length; i++) {
//     const element = edu[i];
//     document.write("<ul><li>" + element + "<br></li></ul>");
// }


// Q8 In Compelete
// var studentName = ["Shabbir","Sammer","Mubashir"];
// var studentScore = [320, 230, 480];
// const totalMarks = 500;

// for (let i = 0; i < studentName.length; i++) {
//     for (let j = 0; j < i; j++) {
//         document.write(" is " + studentScore[i] + ". Percentage: " + (studentScore[j]/totalMarks) * 100 + "<br>");
//     }    
//     document.write(studentName[i])
// }

// Q9 Remaining
var colorNames = ["blue", "red", "pink", "purple"];
// var addColor = prompt("Enter color Name");

document.write("My color name array: <br>");
document.write(colorNames + "<br><br>");

// a,
// document.write("Updated Array Start: <br>");
// colorNames.unshift(addColor);
// document.write(colorNames + "<br><br>");

// b,
// document.write("Updated Array End: <br>");
// colorNames.push(addColor);
// document.write(colorNames + "<br><br>");

// c,
// document.write("Updated two Array Start: <br>");
// colorNames.unshift("sky blue","yellow");
// document.write(colorNames + "<br><br>");

// d,
// document.write("Delete first Array Start: <br>");
// colorNames.shift();
// document.write(colorNames + "<br><br>");

// e,
// document.write("Delete first Array Start: <br>");
// colorNames.pop();
// document.write(colorNames + "<br><br>");

// f,

// Q10

// var stuScore = [320, 230, 480, 120];

// document.write("Scores of Students: " + stuScore + "<br>");
// document.write("Scores of Students: " + stuScore.sort());

// Q11

// var city = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];

// var selectedCity = city.slice(2,4);

// document.write("<b>Cities List: </b> <br>")
// document.write(city + "<br><br>")

// document.write("<b>Selected Cities List: </b> <br>")
// document.write(selectedCity)

// Q12
// var arr = ["This ", " is ", " my ", " cat"];

// document.write("<b>Array:</b> <br> ");
// document.write(arr + "<br> <br>");

// document.write("<b>String:</b> <br>");
// document.write(arr.join(' '));

// Q13
// var partsArr = ["keyboard","mouse","printer","monitor"];

// document.write("<b>Device:</b> <br>");
// document.write(partsArr + "<br><br>");

// for (let i = 0; i < partsArr.length; i++) {
//     const element = partsArr[i];
//     document.write("Out: <br>")
//     document.write(element + "<br>")
// }

// Q14
// var partsArr = ["keyboard","mouse","printer","monitor"];

// document.write("<b>Device:</b> <br>");
// document.write(partsArr + "<br><br>");
// partsArr.reverse()

// for (let i = 0; i < partsArr.length; i++) {
//     const element = partsArr[i];
//     document.write("Out: <br>")
//     document.write(element + "<br>")
// }

// Q15
// var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony & Haier"];
// document.write("<select>");

// for (let i = 0; i < phone.length; i++) {
//     const element = phone[i];
//     document.write("<option> " + element + " </option>")
// }
// document.write("</select>");



// ARRAYS AND LOOP Chapter 17-20
// Q1
// var decArr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// Q2
// var matrixArr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

// for (let i = 0; i <= matrixArr.length; i++) {
//     for (let j = 0; j <= matrixArr.length; j++) {
//         const element = matrixArr[i][j];
//         document.write(element);
//     }
//     document.write("<br>");
// }

// Q3
// var numericCounting = [1,2,3,4,5,6,7,8,9,10];

// for (let i = 0; i < numericCounting.length; i++) {
//     const element = numericCounting[i];
//     document.write(element + "<br>");
// }

// Q4
// var table = +prompt("Enter a number to show its multiplication table: ");
// var lengthTable = +prompt("Enter length multiplication table: ");
// var tableDefault = 5;

// if (table) {
//     document.write("Table of " + table + " <br>");
//     document.write("Table of " + lengthTable + " <br> <br>");
//     for(i=1; i<=lengthTable; i++){
//         var multiply = i*table;
//       document.write(table + " X " + i + " = " + multiply + "<br>");
//     }    
// }

// Q5
// var fruits = ["apple", "banana", "mango", "orange","strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//     const element = fruits[i];
//     document.write(element + "<br>");    
// }
// document.write("<br>");

// for (let i = 0; i < fruits.length; i++) {
//     const element = fruits[i];
//     document.write("Element at index " + fruits.indexOf(element) + " is " + element + "<br>");    
// }

// Q6 Remaining


// Q7
// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What to do you want order sir/ma'am?");

// for (let i = 0; i < bakery.length; i++) {
//     if (userInput == bakery[i]) {
//         var element = bakery[i];
//         // element + " is availabe at index " + bakery.indexOf(element) + " in our bakery";
//     }
// }
// if (userInput == element) {
//     document.write(element + " is availabe at index " + bakery.indexOf(element) + " in our bakery");    
// }
// else{
//     document.write("We are sorry. " + userInput + " is not available in our bakery");    
// }

// Q8
// var array = [24, 53, 78, 91, 12];
// var largest= 0;

// document.write("Array Items: " + array + "<br>")
// for (i=0; i<array.length; i++){
//     if (array[i]>largest) {
//         largest = array[i];
//     }
// }
// document.write("The Largest Number is: " + largest);

// Q9
// var array = [24, 53, 78, 91, 12];
// var smallest= array[0];

// document.write("Array Items: " + array + "<br>")
// for (i=0; i<array.length; i++){
//     if (array[i]<smallest) {
//         smallest = array[i];
//         console.log(array[i]);
//     }
// }
// document.write("The Largest Number is: " + smallest);

// Q10
// var table = 5;

// for(i=1; i<=20; i++){
//     var multiply = i*table;
//   document.write( multiply + ", ");
// }


    