//// Data Types
//var str = "Hello world!";
//str = 24;
//str = true;
//str = "Hello again!";

//let myVar = "We can declare variables with let";
//myVar = "New string";

//const myConst = "API Key"; // Cannot changable

//console.log(str);
//console.log(myVar);
//console.log(myConst);


// Primitive Data Types
//var str = "String";
//var num = 24;
//var isTrue = true;
//var empty = null;
//var notANum = NaN;
//var notDefined = undefined;

//console.log(str);
//console.log(num);
//console.log(isTrue);
//console.log(empty);
//console.log(notANum);
//console.log(notDefined);

// Reference Type (Complex-Object)
var myObj = {
    name: "Jax Teller",
    age: 28,
    isGangster: true,
}
//console.log(myObj);

//// Reading values from object properties
//console.log(myObj["name"]);
//console.log(myObj.age);

//// Adding a new property to the object
//myObj.country = "USA";
//console.log(myObj.country);

//// Deleting a property
//delete myObj.isGangster;
//console.log(myObj);

// Changing value of a property
//myObj.name = "Jackson Teller";
//console.log(myObj);

// Array Operations
//var myArr = ["Jax", "Teller", 28, true, null, NaN]
//console.log(myArr);

// Reading value
//console.log(myArr[0]);
//console.log(myArr[4]);
//console.log(myArr[24]);

// Changing Elements
//myArr[0] = "Jackson";
//console.log(myArr);

//// Adding Elements
//// -- to last index
//myArr.push("SAMCRO");
////console.log(myArr);

//// -- to first index
//myArr.unshift("President");
////console.log(myArr);

//// Deleting Elements
//// -- from last index
//myArr.pop();
////console.log(myArr);

//// -- from first index
//myArr.shift();
////console.log(myArr);

//// deleting elements
//myArr.splice(4, 2); // start from index 4 and delete 2 items
//console.log(myArr);

/////////////

// Math Operators
//var sum = 24 + 8;
//console.log(sum);

//var sub = 24 - 8;
//console.log(sub);

//var mult = 24 * 8;
//console.log(mult);

//var div = 24 / 8;
//console.log(div);

//var mod = 24 % 8;
//console.log(mod);

//var pov = 2 ** 4;
//console.log(pov);

// Shortcut Math Operators
//var num = 8;
//num += 24;
//console.log(num);

//num -= 8;
//console.log(num);

//num *= 2;
//console.log(num);

//num /= 8;
//console.log(num);

//num++;
//console.log(num);

//num--;
//console.log(num);

// Conditional Operators
//var num1 = 24;
//var num2 = 8;

//var cond1 = num1 > num2;
//console.log(cond1);

//var cond2 = num1 < num2;
//console.log(cond2);

//var cond3 = num1 <= num2;
//console.log(cond3);

//var cond4 = num1 >= num2;
//console.log(cond4);

//var cond5 = num1 == num2;
//console.log(cond5);

//var con = "Hey" == "hey";
//console.log(con);

//var con2 = "25" == 25;
//console.log(con2);

//console.log(24 + "24");
//console.log(24 == "24");
//console.log(24 === "24"); // strict check

//console.log("8" != 8);
//console.log("8" !== 8);
//console.log("hey" !== "hey there");

// If Statements
//if (8 > 24) {
//    console.log("8 is bigger than 24");
//}
//if (8 < 24) {
//    console.log("8 is smaller than 24");
//}

//var msg = "Hey";
//if (msg === "Hey") {
//    console.log("Your message: 'Hey'");
//}

//// If Else
//var age = 20;
//if (age >= 18) {
//    console.log("Above 18");
//} else {
//    console.log("Under 19");
//}

// If - Else If - Else
//var age = 18;
//if (age > 18) {
//    console.log("Above 18");
//} else if (age < 18) {
//    console.log("Under 18");
//} else {
//    console.log("Age: 18");
//}

// Switch Case
//var firstName = "Jax";
//switch (firstName) {
//    case "Jane":
//        console.log("Name: Jane");
//        break;
//    case "Jax":
//        console.log("Name: Jax");
//        break;
//    case "John":
//        console.log("Name: John");
//        break;
//    default:
//        console.log("Who are you?");
//        break;
//}

// LOOPS
// for loop
//var myArr = ["John", "Jax", "Gemma", "Oopie"]
//for (var i = 0; i < myArr.length; i++) {
//    console.log("Name " + (i + 1) + ": " + (myArr[i]));
//}

// var vs let
// var: global veya function scope'ta değişken oluşturmak için kullanılabilir.
// let: block scope'ta değişken oluşturmak için kullanılabilir.

//var x = 3;
//for (let x = 0; x < 5; x++) {
//    console.log("Local x: " + x);
//}
//console.log("Global x: " + x);

// While
//var age = 60;
//while (age < 65) {
//    console.log("Age: " + age + ". You are under 65. You cannot get retired");
//    age++;
//}
//console.log("Now you can get retired");

// Do While
//var age = 18;
//do {
//    console.log("Today is your birthday. You are almost 18.");
//    age++;
//} while(age < 18)

// Functions
//function add() {
//    console.log("Sum: " + (8 + 24));
//}
//add();

//function multiplyByTwo(n) {
//    console.log(n + " * 2: ", n * 2);
//}
//multiplyByTwo(5);
//multiplyByTwo(15);
//multiplyByTwo("Jax");

//function multiply(x, y) {
//    console.log(x + " * " + y + " = " + (x * y));
//}
//multiply(5,4);
//multiply(15, 3);
//multiply("Jax", 2);

function conditionalSum(a, b) {
    console.log("Value a is being checked if it is a number...");

    if (typeof a !== "number") {
        return "a is not a number";
    }

    console.log("Value a is being checked if it is bigger than 8...");
    if (a > 8) {
        return a + b;
    }

    console.log("Value a is smaller than 8...");
    return 8 + a + b;
}
const res1 = conditionalSum("5", 5);
console.log(res1);

const res2 = conditionalSum(10, 5);
console.log(res2);

const res3 = conditionalSum(4, 5);
console.log(res3);