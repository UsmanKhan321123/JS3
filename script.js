//              chapter 7

//7.1

let username = prompt("What is your name?");
alert(`Hello Mr ${username}.`);
document.getElementById("greet").innerHTML = `Hello Mr ${username}`;

// 7.2
var defaultnum = 5;
let num = parseInt(prompt("Please enter a number", defaultnum));
alert(` ${num} * 1 = ${num * 1}\n
        ${num} * 2 = ${num * 2}\n
        ${num} * 3 = ${num * 3}\n
        ${num} * 4 = ${num * 4}\n
        ${num} * 5 = ${num * 5}\n
        ${num} * 6 = ${num * 6}\n
        ${num} * 7 = ${num * 7}\n
        ${num} * 8 = ${num * 8}\n
        ${num} * 9 = ${num * 9}\n
        ${num} * 10 = ${num * 10}\n`);
document.getElementById("table").innerText = `${num} * 1 = ${num * 1}\n
        ${num} * 2 = ${num * 2}\n
        ${num} * 3 = ${num * 3}\n
        ${num} * 4 = ${num * 4}\n
        ${num} * 5 = ${num * 5}\n
        ${num} * 6 = ${num * 6}\n
        ${num} * 7 = ${num * 7}\n
        ${num} * 8 = ${num * 8}\n
        ${num} * 9 = ${num * 9}\n
        ${num} * 10 = ${num * 10}\n`;
document.querySelector("#tableheading").innerText = `Table of ${num}`;

//7.3

let sub1 = prompt("Enter Subject 1", "English");
let sub2 = prompt("Enter Subject 1", "Math");
let sub3 = prompt("Enter Subject 1", "Urdu");
let totalMarks = 100;
let sub1Marks = parseInt(prompt(`Enter obtained marks of ${sub1}`, 54));
let sub2Marks = parseInt(prompt(`Enter obtained marks of ${sub2}`, 54));
let sub3Marks = parseInt(prompt(`Enter obtained marks of ${sub3}`, 48));
let sub1Percentage = parseInt(`${(sub1Marks / totalMarks) * 100}%`);
let sub2Percentage = parseInt(`${(sub2Marks / totalMarks) * 100}%`);
let sub3Percentage = parseInt(`${(sub3Marks / totalMarks) * 100}%`);
let total_Marks = totalMarks * 3;
let total_Obtained_marks = sub1Marks + sub2Marks + sub3Marks;
let total_Percentage = (sub1Percentage + sub2Percentage + sub3Percentage) / 3;

document.getElementById("sub1").innerText = `${sub1}`;
document.getElementById("sub2").innerText = `${sub2}`;
document.getElementById("sub3").innerText = `${sub3}`;
document.getElementById("sub1marks").innerText = `${sub1Marks}`;
document.getElementById("sub2marks").innerText = `${sub2Marks}`;
document.getElementById("sub3marks").innerText = `${sub3Marks}`;
document.getElementById("sub1percentage").innerText = `${sub1Percentage}`;
document.getElementById("sub2percentage").innerText = `${sub2Percentage}`;
document.getElementById("sub3percentage").innerText = `${sub3Percentage}`;
document.querySelector(".bold").style.fontWeight = `bold`;
document.getElementById("totalmarks1").innerText = `${totalMarks}`;
document.getElementById("totalmarks2").innerText = `${totalMarks}`;
document.getElementById("totalmarks3").innerText = `${totalMarks}`;
document.getElementById("tm").innerText = `${total_Marks}`;
document.getElementById("tom").innerText = `${total_Obtained_marks}`;
document.getElementById("tp").innerText = `${total_Percentage}`;
document.getElementById("Bold").style.fontWeight = `bold`;
document.getElementById("Bold").style.textAlign = `center`;
