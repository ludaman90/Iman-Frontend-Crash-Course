// Strings
console.log("ludaman");
console.log("ludaman" + " " + "solutions");

// Extract letter from strings
console.log("ludaman solutions"[16]);

// length of a string
console.log("LAARP".length);

// Get last letter from string
let string = "Opentu";
console.log(string[string.length - 1]);

// Variables
let userName = "Opentu";
let firstName = "David";
let lastname = "Akorly";
let age = 20;

console.log(firstName + " " + lastname);
console.log(age / 5);

const Country = "Ghana";
const City = "Accra";
const Suburb = "Omanjor";

console.log(Suburb + ", " + City + ", " + Country + ".");

// Currency Converter
let USDAmount = 1200;
let USDRateToAUD = 1.5;
let AUDAmount = USDAmount * USDRateToAUD;

console.log(AUDAmount);

// Comparison Operators

let subject = "4" == 4;

console.log(subject);

let subject2 = "5" === 5;

console.log(subject2);

let subject3 = "4" != 4;

console.log(subject3);

let subject4 = "5" !== 5;

console.log(subject4);

// Conditionals
let age2 = 17;

if (age2 > 18) {
  console.log(
    `Qualified. You are ${age2} years old. You may enter the event centre.`
  );
} else if (age2 === 18) {
  console.log(`You just turned ${age2} years. Welcome.`);
} else {
  console.log(`Disqualified. You are ${age2} years old. You are too young.`);
}

// Logical Operator
let age3 = 20;
let hasId = false;

if (age3 >= 20 && hasId === true) {
  console.log("You may enter the club");
} else {
  console.log("You do not meet all requirements to enter the club");
}

let age4 = 20;
let hasId2 = false;

if (age4 >= 20 || hasId2 === true) {
  console.log("You may enter the club");
} else {
  console.log("You do not meet all requirements to enter the club");
}

// Ternary Operator
let isRaining = true;

isRaining ? console.log("it is raining") : console.log("it is not raining");

let age5 = 16;
let hasId3 = true;

let str =
  age5 >= 18 && hasId3 === true
    ? "Qualified. You may enter the club"
    : "Disqualified. You do not meet all requirements to enter the club";

console.log(str);

let loggedIn = true;
let hasMembership = true;

let str2 = loggedIn && !hasMembership ? "Show video" : "Don't show video";

console.log(str2);

// Loop

// while loop
let counter = 1;

while (counter <= 20) {
  console.log(counter);
  counter = counter + 1;
}
console.log("while loop finished running");

// for loop
for (let i = 1; i <= 10; i = i + 1) {
  console.log(i);
}

for (let r = 1; r <= 15; r = r + 1) {
  if (r % 5 === 0) {
    console.log(`${r} - ASAP Frontend`);
  } else if (r % 2 === 1) {
    console.log(`${r} - ASAP`);
  } else if (r % 2 === 0) {
    console.log(`${r} - Frontend`);
  } else {
    console.log("Task Completed");
  }
}

let str3 = "ASAP Frontend";

for (a = 0; a < str3.length; a = a + 1) {
  console.log(str3[a]);
}

// Functions
// function Declaration
function welcomeUser(time, name) {
  console.log(`Good ${time}, ${name}`);
}
// Call the function
welcomeUser("evening", "Luda");

function calc(num1, num2) {
  return num1 / num2;
}
console.log(calc(15, 5));

// Regular Function
function UsdToAud(Usd) {
  return Usd * 1.5;
}
console.log(UsdToAud(100));

// Arrow Function
const UsdToAud2 = (Usd) => {
  return Usd * 1.5;
};
console.log(UsdToAud2(1000));

// Arrays
let array = ["LSMS", "LAARP", "SAMS", "CAHRMS"];
console.log(array);

// Get first element of an array
let array2 = ["LSMS", "LAARP", "SAMS", "CAHRMS"];
console.log(array2[0]);

// Get last element of an array
let array3 = ["LSMS", "LAARP", "SAMS", "CAHRMS"];
console.log(array3[array3.length - 1]);

// Add to array
array3.push("PAYROLL");
console.log(array3);

// filter array
let array4 = [20, 15, 10, 40];
let filteredArray = array4.filter((element) => {
  console.log(element);
  if (element <= 20) {
    return true;
  }
});
console.log(filteredArray);

// alternative filter array
let array5 = [20, 15, 10, 40];
let filteredArray2 = array5.filter((element) => {
  return element <= 10;
});
console.log(filteredArray2);

// alternative 3 filter array
let array6 = [20, 15, 10, 40];
let filteredArray3 = array6.filter((element) => element <= 18);
console.log(filteredArray3);

let array7 = [18, 20, 16, 15, 21];
let array8 = [16, 17, 14, 15, 19];
let array9 = [20, 22, 26, 16, 20];
let filteredArray4 = array7.filter((element) => element >= 18);
let filteredArray5 = array8.filter((element) => element >= 18);
let filteredArray6 = array9.filter((element) => element >= 18);
console.log(filteredArray4);
console.log(filteredArray5);
console.log(filteredArray6);

let array10 = [1, 2, 3, 4, 5];

array10.map((element) => {
  console.log(element);
  return null;
});
console.log(array10);

// Convert USD to GHS
let USD1 = [10, 20, 30, 40];
let GHSRate = 14.5;
let USDtoGHS = USD1.map((element) => element * GHSRate);
console.log(USDtoGHS);

// OBJECTS
let users = [
  {
    email: "ludaman90@gmail.com",
    password: "test",
    name: "ludaman",
    discord: "ludadiscord",
    subscription: "Admin",
    lessonsCompleted: [1, 2, 3],
  },
  {
    email: "confe90@gmail.com",
    password: "test",
    name: "confe",
    discord: "confediscord",
    subscription: "VIP",
    lessonsCompleted: [1, 2, 3, 4, 5],
  },
];

console.log(users[1].email);
console.log(users[1].lessonsCompleted.map((element) => element * 2));

function signUp(user) {
  users.push(user);
}
signUp({
  email: "opentuconfe@gmail.com",
  password: "opentu",
  name: "Opentu Confe",
  discord: "opentuconfe",
  subscription: "Staff Member",
  lessonsCompleted: [1, 2],
});
console.log(users);

// DOM
// Target an Html element from JS
// Method 1
console.log(document.querySelector("#heading"));

// Merhod 2
console.log(document.getElementById("heading"));

// Change Html content using JS
// document.querySelector("h1").innerHTML = "OPENTU SOLUTIONS";

// Add to Html content using JS
// document.querySelector("h1").innerHTML += " OPENTU SOLUTIONS";

// Change CSS using JS
// document.querySelector("h1").style.fontSize = "40px";

function ChangeButtonToBlue() {
  console.log("Change button to blue");
}

function ChangeBackgroundToBlue() {
  document.querySelector("button").style.backgroundColor = "Blue";
}

// Change classnames
function toggleSidebar() {
  document.querySelector("body").classList.toggle("open");
}
