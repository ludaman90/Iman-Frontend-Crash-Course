// Basic Types
let age: number=29
let course: string="Ludaman"
let lessoncompleted: boolean=true
let x: any=false

let courses: string[]=["HTLM", "CSS"]
let arr: any[]=[true, '123', 321]
let stringArr: string[][]=[['a'], ['b']]
let testing: boolean=true

// Tuples
let person:[string, number]=["King", 20]
let people:[string, number][]=[["David", 25], ["Alice", 32], ["Deborah", 33]]

// Objects
let student:{
    name: string,
    age: number,
    isPassing: boolean
}={
    name: "Akorly",
    age: 20,
    isPassing: true
}

// Custom Types
type Student={
    name: string,
    age: number,
    isPassing: boolean    
}

let student1: Student={
    name: "Samuel",
    age: 38,
    isPassing: true
}

// Interfaces
interface MainStudent{
    name: string,
    age: number,
    isPassing: boolean 
}

let student2: MainStudent={
    name: "Bright",
    age: 38,
    isPassing: false
}

// Unions
let result: string | number="Vandam"

type isPassing="passed" | "failed"
let johnIsPassing: isPassing="failed"

// Type Assertion
let y: any="hello"
y=<number>50

// Functions
function sum(num1: number, num2: number): number {
    return num1 + num2
}

sum(1, 2)

// Generic
function getFirstElement<ArrType>(arr: ArrType[]) {
    return arr[0]
}

getFirstElement<number>([1, 2, 3])
getFirstElement<string>(['1', '2', '3'])
getFirstElement<boolean>([true, false, false])

// Enumes
enum Grade{
    freshman="First year student in high school",
    sophomore="Second year student in high school",
    junior="Third year student in high school",
    senior="Fourth year student in high school"
}

interface StudentObject{
    name: string,
    age: number,
    grade: Grade
}


function displayStudentInfo(student: StudentObject): void{
    const studentInfo: string=student.name + "\n" + student.age + "\n" + student.grade

    document.body.innerHTML=studentInfo
}

displayStudentInfo({
    name: "Bright",
    age: 15,
    grade: Grade.senior

})
