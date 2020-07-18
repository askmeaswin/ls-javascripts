console.log("Objects")
let num = +prompt("Enter a Number is :");
console.log(num, typeof num);
if (num%2==0) 
{
 console.log(`The number entered is ${num} and Number is even`)   
}
else
{
    console.log(`The number entered is ${num} and Number is odd`)
}

let val = prompt("Enter the OS Name and version");
const str = String(val);
if (!!str.length) {
    let res = val.split(/ /g);
    console.log(`The OS Nmae is ${res[0]} and Version is ${res[1]}`);
}

let input = +prompt("Enter the Marks");
console.log(input<=50 ? `Marks are ${input} and grade is B`: `Marks are ${input} and grade is A`);


