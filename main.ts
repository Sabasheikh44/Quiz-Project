#! /usr/bin/env node
import inquirer from "inquirer"


console.log("Welcome To My Adventure Quiz Game:")
console.log("You Are Required To Gain Maximum 4 Points For The Window.")

let points = 0

let question1 = await inquirer.prompt([
    {
    name: "one",
    message: "typescript is a superset of?",
    type: "list",
    choices: ["python","java","javascript","c++"]

}
])
//question1
if (question1.one == "javascript"){
    console.log("your answer is correct")
    points++
}else{
     console.log("incorrect answer")
}
// question2


let question2 = await inquirer.prompt([
    {
    name: "two",
    message: "who is the founder of microsoft?",
    type: "list",
    choices: ["elon musk","bill gates","ali","mark"]

}
])

if (question2.two == "bill gates"){
    console.log("your answer is correct")
    points++
}else{
     console.log("incorrect answer")
}
// question3
let question3 = await inquirer.prompt([
    {
    name: "three",
    message: "capital of pakistan?",
    type: "list",
    choices: ["karachi","islamabad","punjab","kpk"]

}
])

if (question2.three == "islamabad"){
    console.log("your answer is correct")
    points++
}else{
     console.log("incorrect answer")
}
// question4
let question4 = await inquirer.prompt([
    {
    name: "four",
    message: "who is the current govorner of sindh?",
    type: "list",
    choices: ["Ali","Kamran Tessori","Shehbaz Sharif","Imran Khan"]

}
])

if (question4.four == "Kamran Tessori"){
    console.log("your answer is correct")
    points++
}else{
     console.log("incorrect answer")
}
// question5
let question5 = await inquirer.prompt([
    {
    name: "five",
    message: "in which language you are hearing my voic?",
    type: "list",
    choices: ["english","sindhi","urdu","french"]

}
])

if (question2.five == "urdu"){
    console.log("your answer is correct")
    points++
}else{
     console.log("incorrect answer")
}

// output condition
if(points >= 4){
console.log("congratulation!")
console.log(`your point: ${points}`)
}else {
    console.log("you loss! try next time")
    console.log(`your point: ${points}`)
}

