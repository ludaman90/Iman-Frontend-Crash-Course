"use strict";
// Basic Types
let age = 29;
let course = "Ludaman";
let lessoncompleted = true;
let x = false;
let courses = ["HTLM", "CSS"];
let arr = [true, '123', 321];
let stringArr = [['a'], ['b']];
let testing = true;
// Tuples
let person = ["King", 20];
let people = [["David", 25], ["Alice", 32], ["Deborah", 33]];
// Objects
let student = {
    name: "Akorly",
    age: 20,
    isPassing: true
};
let student1 = {
    name: "Samuel",
    age: 38,
    isPassing: true
};
let student2 = {
    name: "Bright",
    age: 38,
    isPassing: false
};
// Unions
let result = "Vandam";
let johnIsPassing = "failed";
// Type Assertion
let y = "hello";
y = 50;
// Functions
function sum(num1, num2) {
    return num1 + num2;
}
sum(1, 2);
// Generic
function getFirstElement(arr) {
    return arr[0];
}
getFirstElement([1, 2, 3]);
getFirstElement(['1', '2', '3']);
getFirstElement([true, false, false]);
// Enumes
var Grade;
(function (Grade) {
    Grade["freshman"] = "First year student in high school";
    Grade["sophomore"] = "Second year student in high school";
    Grade["junior"] = "Third year student in high school";
    Grade["senior"] = "Fourth year student in high school";
})(Grade || (Grade = {}));
function displayStudentInfo(student) {
    const studentInfo = student.name + "\n" + student.age + "\n" + student.grade;
    document.body.innerHTML = studentInfo;
}
displayStudentInfo({
    name: "Bright",
    age: 15,
    grade: Grade.senior
});
