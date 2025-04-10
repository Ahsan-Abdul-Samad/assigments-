//chapter #5
// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

let num1 = +prompt("Enter a 1st Value : ");
let num2 = +prompt("Enter a 2nd Value : ");
let sum = num1 + num2;
document.write(`Sum of ${num1} and ${num2} is ${sum}<br>`);

// 2. Repeat task1 for 
// subtraction,

let num3 = +prompt("Enter a 1st Value : ");
let num4 = +prompt("Enter a 2nd Value : ");
let sub = num3 - num4;
document.write(`Sub of ${num3} and ${num4} is ${sub}<br>`);

//  multiplication, 

let num5 = +prompt("Enter a 1st Value : ");
let num6 = +prompt("Enter a 2nd Value : ");
let mul = num5 * num6;
document.write(`mul of ${num5} and ${num6} is ${mul}<br>`);

// division &

let num7 = +prompt("Enter a 1st Value : ");
let num8 = +prompt("Enter a 2nd Value : ");
let div = num5 / num6;
document.write(`div of ${num7} and ${num8} is ${div}<br>`);

// modulus.

let num9 = +prompt("Enter a 1st Value : ");
let num10 = +prompt("Enter a 2nd Value : ");
let mod = num5 % num6;
document.write(`mod of ${num9} and ${num10} is ${mod}<br>`);


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Valueafter addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

let var1;
document.write(`Value after variable declaration is: ${var1}<br>`);

var1 = 5;
document.write(`Initial Value: ${var1}<br>`);

var1++;
document.write(`Value after Increment is: ${var1}<br>`);

var1 += 7;
document.write(`Value after addition is: ${var1}<br>`);

var1--;
document.write(`Value after Decrement is : ${var1}<br>`);

let remainder = var1 % 3;
document.write(`The remainder is: ${remainder}<br>`)

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store ticket price in a variable & calculate the cost of buying 5
// tickets

let ticket = 600;

let totalticket = 5 * ticket;

document.write(`Total cost to buy 5 tickets to a movie is ${totalticket} <br>`);

//5. Write a script to display multiplication table of any
// number in your browser. E.g

let number = +prompt("Enter any number : ");
document.write(`Table of ${number} <br>`);
for (let i = 1; i <= 10; i++) {
    document.write(`${number} × ${i} = ${number * i} <br>`);
}


//6. converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// Conversion Formulae:
let cel=25;

let Fah = (cel * 9/5) + 32;
document.write(`${cel}°C is ${Fah}°F <br>`);


let Fahrenheit = 70;

let celsius = (Fahrenheit-32) * 5/9;
document.write(`${Fahrenheit}°F is ${celsius}°C <br>`);

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.

// let item1 = 650;
// let item2 = 100;
// let quantityitem1 = 3;
// let quantityitem2 = 7;
// let shippingCharges = 100;

// totalCost= (item1 * quantityitem1) + (item2 *quantityitem2) + shippingCharges;

// document.write(`<h2>Shopping Cart</h2>`);
// document.write(`price of item 1 is ${item1}<br>`);
// document.write(`quantity of item 1 is ${quantityitem1}<br>`);
// document.write(`price of item 2 is ${item2}<br>`);
// document.write(`quantity of item 2 is ${quantityitem2}<br>`);
// document.write(`shipping charges is ${shippingCharges}<br>`);
// document.write(`Total cost of your order is ${totalCost}<br>`);

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

document.write(`<h1>MarkSheet</h1>`)
let totalmarks = 980;
let obtainedMarks = 804;

let percentage = obtainedMarks * 100 / totalmarks;

document.write(`Total Marks : ${totalmarks} <br>`);
document.write(`Obtained Marks : ${obtainedMarks} <br>`);
document.write(`Percentage : ${percentage} <br>`);



// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

let usd = 10;
let riyal = 25;

let Exchange = (10*104.80) + (25*28);
document.write(`Total Currency in PKR is ${Exchange}<br><br>`)




// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

let number1 = ((2+5)*10)/2; 

document.write(`total calculation is ${number1}<br><br>`)



// question 11
// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.
// let currentYear = +prompt("Enter Current Year : ");
// let birthYear = +prompt("Enter Birth Year : ");

// document.write(`<h2>Age Calculator</h2>`);
// document.write(`current year: ${currentYear}<br>`);
// document.write(`Birth Year: ${birthYear}<br>`);
// document.write(`They are either ${currentYear-birthYear-1} or ${currentYear-birthYear} years old<br>`);

// // question 12
// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
//  let radius = 20;

// let circumference = 20*2*3.142

// let areaCircle = 400 *3.142
// document.write(`<h2>The Geometrizer</h2>`)
// document.write(`radius of a circle: ${radius}<br>`)
// document.write(`The circumference: ${circumference}<br>`)
// document.write(`The area is: ${areaCircle}<br>`)

// // question 13
// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.
// let favtSnack = "chocalate";
// let currAge = 22;
// let maxAge = 63;
// let perDay = 2;

// let remainingYear = (maxAge - currAge) * 365 * perDay;

// document.write(`<h2>The Life Time Supply Calculator</h2>`)
// document.write(`Favourite Snack: ${favtSnack}<br>`)
// document.write(`current age: ${currAge}<br>`)
// document.write(`Estimated Maximum Age: ${maxAge}<br>`)
// document.write(`Ammount Per Day: ${perDay}<br>`)
// document.write(`You will need ${remainingYear} ${favtSnack} to last you until the ripe old age of ${maxAge}<br>`)


//chapter #6-9


// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// document.write("<h3>Result:</h3>");
// let a = 10;
// document.write(`The value of a is : ${a}<br>`);
// document.write(`...................................................<br>`);

// ++a;
// document.write(`The value of ++a is ${a}<br>`);
// document.write(`Now the value of a is ${a}<br><br>`);

// document.write(`The value of a++ is ${a}<br>`);
// a++;
// document.write(`Now the value of a is ${a}<br><br>`);

// --a;
// document.write(`The value of --a is ${a}<br>`);
// document.write(`Now the value of a is ${a}<br><br>`);

// document.write(`The value of a-- is ${a}<br>`);
// a--;
// document.write(`Now the value of a is ${a}<br>`);



// 2. What will be the output in variables a, b & result after
// execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write(`a is ${a}<br>`);
document.write(`b is ${b}<br>`);
document.write(`Result is ${result}<br>`);
// Explain the output at each stage:
// --a; 2 - 1 = 1
// --a - --b; a = 1 and b = 1 - 1 = 0  so 1 - 0 = 1
// --a - --b + ++b;  --a - --b = 1 now  b = 1 now ++b = 2  so 1 + 2 = 3
// --a - --b + ++b + b--; --a - -- b + ++b = 3 and b = 1 then --b = 1 - 0 so answer is 3

// 3. Write a program that takes input a name from user &
// greet the user.

let name = prompt("Enter Your Name : ");

alert(`welcome ${name}`);

// 4. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

let num = +prompt("enter a number", "5");

num= num?parseInt(num):5;

for (let i = 1; i <= 10; i++) {
    document.write(`${num} x ${i} = ${num*i}<br>`);
}

// 5. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)
    // Input subject names
    let sub1 = prompt("Enter the first subject name:");
    let sub2 = prompt("Enter the second subject name:");
    let sub3 = prompt("Enter the third subject name:");

    let totalMarksPerSubj = 100;
    let totalMarks = totalMarksPerSubj * 3;

    // Input obtained marks
    let sub1Marks = parseInt(prompt("Enter marks for the first subject:"));
    let sub2Marks = parseInt(prompt("Enter marks for the second subject:"));
    let sub3Marks = parseInt(prompt("Enter marks for the third subject:"));

    // Calculate obtained marks and percentage
    let obtainMarks = sub1Marks + sub2Marks + sub3Marks;
    let percentage = (obtainMarks / totalMarks) * 100;

    // Create a table to display results
    document.write(`<table>`);
    document.write(`<tr> 
        <th>Subject</th>
        <th>Total Marks</th>
        <th>Obtained Marks</th>
        <th>Percentage</th>
    </tr>`);

    // Subject 1 row
    document.write(`<tr>
        <td>${sub1}</td>
        <td>${totalMarksPerSubj}</td>
        <td>${sub1Marks}</td>
        <td>${((sub1Marks / totalMarksPerSubj) * 100).toFixed(2)}%</td>
    </tr>`);

    // Subject 2 row
    document.write(`<tr>
        <td>${sub2}</td>
        <td>${totalMarksPerSubj}</td>
        <td>${sub2Marks}</td>
        <td>${((sub2Marks / totalMarksPerSubj) * 100).toFixed(2)}%</td>
    </tr>`);

    // Subject 3 row
    document.write(`<tr>
        <td>${sub3}</td>
        <td>${totalMarksPerSubj}</td>
        <td>${sub3Marks}</td>
        <td>${((sub3Marks / totalMarksPerSubj) * 100).toFixed(2)}%</td>
    </tr>`);

    // Total row
    document.write(`<tr>
        <td><strong>Total</strong></td>
        <td>${totalMarks}</td>
        <td>${obtainMarks}</td>
        <td><strong>${percentage.toFixed(2)}%</strong></td>
    </tr>`);

    document.write(`</table>`);
//chapter # 14-16
// // 1. Declare an empty array using JS literal notation
let studentNames = [];

// // 2. Declare an empty array using JS object notation
let studentNamesObj = new Array();

// 3. Declare and initialize a strings array
let stringArray = ["Ali", "Jawwad", "Umar", "Abdullah"];
document.write("<strong>String Array:</strong> " + stringArray.join(", ") + "<br>");

// // 4. Declare and initialize a numbers array
let numbersArray = [10, 20, 30, 40, 50];
document.write("<strong>Numbers Array:</strong> " + numbersArray.join(", ") + "<br>");

// // 5. Declare and initialize a boolean array
let booleanArray = [true, false, true, false];
document.write("<strong>Boolean Array:</strong> " + booleanArray.join(", ") + "<br>");

// // 6. Declare and initialize a mixed array
let mixedArray = ["Jawwad", 25, true, 3.14, "Student"];
document.write("<strong>Mixed Array:</strong> " + mixedArray.join(", ") + "<br>");

// // 7. Declare and Initialize an array for education qualifications in Pakistan
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

document.write("<h3>Educational Qualifications in Pakistan:</h3>");
document.write("<ul>");
for (let i = 0; i < qualifications.length; i++) {
    document.write(`<li>${qualifications[i]}</li>`);
}
document.write("</ul>");

// //8. Write a program to store 3 student names in an array.Take
// // another array to store score of these three students.
// // Assume that total marks are 500 for each student, display
// // the scores & percentages of students like:
let students = ["Ali", "Umar", "Jawwad"];

// Store their scores in another array
let scores = [450, 390, 470];

// Assume total marks for each student
let totalMarks = 500;

// Display the results
document.write("<table>");
document.write("<tr><th>Student Name</th><th>Score</th><th>Percentage</th></tr>");

for (let i = 0; i < students.length; i++) {
    let percentage = (scores[i] / totalMarks) * 100;
    document.write(`<tr><td>${students[i]}</td><td>${scores[i]}</td><td>${percentage.toFixed(2)}%</td></tr>`);
}

document.write("</table>");


// // 9. Initialize an array with color names. Display the array
// // elements in your browser.
// // a. Ask the user what color he/she wants to add to the
// // beginning & add that color to the beginning of the array.
// // Display the updated array in your browser.
// // b. Ask the user what color he/she wants to add to the end
// // & add that color to the end of the array. Display the
// // updated array in your browser.
// // c. Add two more color to the beginning of the array.
// // Display the updated array in your browser.
// // d. Delete the first color in the array. Display the updated
// // array in your browser.
// // e. Delete the last color in the array. Display the updated
// // array in your browser.
// // f. Ask the user at which index he/she wants to add a color
// // & color name. Then add the color to desired
// // position/index. . Display the updated array in your
// // browser.
// // g. Ask the user at which index he/she wants to delete
// // color(s) & how many colors he/she wants to delete. Then

// // Arrays | JAVASCRIPT

// // Page 3 of 6
// // remove the same number of color(s) from user-defined
// // position/index. . Display the updated array in your
// // browser.

let colors = ["Red", "Blue", "Green", "Yellow"];
document.write("<strong>Original Colors:</strong> " + colors.join(", ") + "<br><br>");

let colorStart = prompt("Enter a color to add at the beginning:");
colors.unshift(colorStart);
document.write("<strong>After adding at the beginning:</strong> " + colors.join(", ") + "<br><br>");

let colorEnd = prompt("Enter a color to add at the end:");
colors.push(colorEnd);
document.write("<strong>After adding at the end:</strong> " + colors.join(", ") + "<br><br>");

colors.unshift("Purple", "Orange");
document.write("<strong>After adding two more colors at the beginning:</strong> " + colors.join(", ") + "<br><br>");

colors.shift();
document.write("<strong>After removing the first color:</strong> " + colors.join(", ") + "<br><br>");

colors.pop();
document.write("<strong>After removing the last color:</strong> " + colors.join(", ") + "<br><br>");

let addIndex = prompt("Enter the index where you want to add a new color:");
let addColor = prompt("Enter the color name:");
addIndex = parseInt(addIndex);
if (addIndex >= 0 && addIndex <= colors.length) {
    colors.splice(addIndex, 0, addColor);
}
document.write("<strong>After inserting color at specific index:</strong> " + colors.join(", ") + "<br><br>");

let delIndex = prompt("Enter the index from where you want to delete color(s):");
let delCount = prompt("Enter how many colors you want to delete:");
delIndex = parseInt(delIndex);
delCount = parseInt(delCount);
if (delIndex >= 0 && delIndex < colors.length) {
    colors.splice(delIndex, delCount);
}
document.write("<strong>After deleting color(s) at specific index:</strong> " + colors.join(", ") + "<br><br>");


//10 Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

let score = [320, 230, 480, 120];
document.write(`Scores of Student ${score} <br>`);
score.sort((a, b) => a - b);
document.write(`Ordered Scores of Student ${score}<br>`);


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("Cities: <br>");
for (let i = 0; i < cities.length; i++) {
    document.write(cities[i] + " \,  ");
}
document.write("<br><br>");
let selectedCities = cities.splice(2, 3);
document.write("Selected Cities: <br>");
for (let i = 0; i < selectedCities.length; i++) {
    document.write(selectedCities[i] + " \,  ");
}

// 12. Write a program to create a single string from the
// below mentioned array:
// (Use array’s join method)

let arr = ["This ", " is ", " my ", " cat"];

document.write(arr.join(""));

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

let queue = [];
queue.push("Keyboard");
queue.push("Mouse");
queue.push("Printer");
queue.push("Monitor");

for (let i = 0; i < queue.length; i++) {
    document.write("Out: <br>" + queue[i] + "<br>")
}

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

let stack = [];
stack.push("Keyboard");
stack.push("Mouse");
stack.push("Printer");
stack.push("Monitor");

for (let i = stack.length - 1; i >= 0; i--) {
    document.write("Out: <br>" + stack[i] + "<br>")
}

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>");

for (let i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}

document.write("</select>");

//chapter # 17-20


// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

let arr = [[], [], []];
// console.log("Empty Multidimensional Array:", multiArray);

//Q2 Declare and initialize a multidimensional array
//representing the following matrix:

//ANS
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
console.log("Matrix:", matrix);

// 3. Write a program to print numeric counting from 1 to 10.

document.write("Counting 1 to 10:<br>");
for (let i = 1; i <= 10; i++) {
    document.write(`${i} <br>`);
}

//Q4 Write a program to print multiplication table of any
//number using for loop. Table number & length should be
//taken as an input from user. 

let number = parseInt(prompt("Enter number for multiplication table:"));
let length1 = parseInt(prompt("Enter table length:"));
document.write(`Multiplication Table of ${number}:<br>`);
for (let i = 1; i <= length1; i++) {
    document.write(`${number} × ${i} = ${number * i} <br>`);
}

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

document.write("<h2>Fruits:</h2>");
for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}

// Q6 Generate the following series in your browser. See
//example output.
//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//ans
document.write("<h2>Counting:</h2>");
for (let i = 1; i <= 15; i++) {
    document.write(i + (i < 15 ? ", " : ""));
}

// b. Reverse counting: 10 to 1
document.write("<h2>Reverse Counting:</h2>");
for (let i = 10; i >= 1; i--) {
    document.write(i + (i > 1 ? ", " : ""));
}

// c. Even: 0 to 20
document.write("<h2>Even Numbers:</h2>");
for (let i = 0; i <= 20; i += 2) {
    document.write(i + (i < 20 ? ", " : ""));
}

// d. Odd: 1 to 19
document.write("<h2>Odd Numbers:</h2>");
for (let i = 1; i < 20; i += 2) {
    document.write(i + (i < 19 ? ", " : ""));
}

// e. Series: 2k to 20k
document.write("<h2>Series:</h2>");
for (let i = 2; i <= 20; i += 2) {
    document.write((i * 2) + "k" + (i < 20 ? ", " : ""));
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Enter an item to search in the list:");
if (A.includes(userInput)) {
    document.write(`<br> ${userInput} is found in the list. <br>`);
} else {
    document.write(`<br> ${userInput} is not found in the list. <br>`);
} 

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

   let array = [24, 53, 78, 91, 12];

   let largest = array[0]; 
   for (let i = 1; i < array.length; i++) {
       if (array[i] > largest) {
           largest = array[i]; 
       }
   }
   document.write(`<h2>The largest number in the array is: ${largest}</h2>`);   

//    9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
let array1 = [24, 53, 78, 91, 12];

let smallest = array1[0];
for (let i = 1; i < array1.length; i++) {
    if (array1[i] < smallest) {
        smallest = array1[i]; 
    }
}
document.write(`<h2>The smallest number in the array is: ${smallest}</h2>`);


// 10. Write a program to print multiples of 5 ranging 1 to 100.

document.write("Multiples of 5 (1-100):");
for (let i = 5; i <= 100; i += 5) {
    document.write(i + ",");
}

