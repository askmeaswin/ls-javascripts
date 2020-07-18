console.log("Welcome to Day2 Session");
// let name = prompt("Enter your name");
console.log(name);

// Methods of string
//concat
let bestBrand = "Asus";
let bestPhone = "Apple";
let bestLaptop = "Dell";
console.log(`This is the best brand for long live battery ${bestBrand}. As we see best camera and other options as ${bestPhone} and when compared with other brand as used it looks good ${bestLaptop}.`);
console.log(bestPhone.concat(' Phone is good.'));

// length
let fruits = "Pineapple";
console.log(fruits.length);
// indexof

let str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("ocate"));
console.log(str.lastIndexOf("locate"));
console.log(str.lastIndexOf("Aswin"));
console.log(str.indexOf("locate",15));
console.log(str.lastIndexOf("locate",15));
console.log(str.search('oc'));

//slice
let volume = "welcome back";
console.log(volume.slice(0,7));
console.log(volume.slice(-4,-1));
console.log(volume.slice(2));
console.log(volume.slice(-12));

// substring
console.log(str.substring(7));

//substr
console.log(str.substr(7,6));
console.log(str.substr(7));
console.log(str.substr(-7));
//replace
let val = "Please visit Microsoft and Microsoft!";
console.log(val.replace('Microsoft','Amazon'));    //replaces only the first match
console.log(val.replace('MICROSOFT','Amazon'));    //replace() method is case sensitive.
console.log(val.replace(/MICROSOFT/i,'Amazon'));   //To replace case insensitive
console.log(val.replace(/Microsoft/g,'Amazon'));   //To replace all matches

//Uppercase and Lowercase
let p = "Hey there !! what's up guys ?"
console.log(p.toLowerCase());
console.log(p.toUpperCase());
//trim
// let a = "          Hello World";
// alert(a.trim());
//charAt
console.log(val.charAt(0));
console.log(val.charCodeAt(0));

let d = "x,y,z";
console.log(d.split(','));


// Array Methods

let cars = ["Saab", "Volvo", 'BMW', 'Rolls royce'];
let bikes = ['Bajaj','Yamaha','RE','Hero'];
console.log(typeof(cars));
console.log(cars.toString());
console.log(cars);
console.log(cars.join('*'));
console.log(cars);
console.log(cars.push('Maurti'));
console.log(cars);
console.log(cars.pop());
console.log(cars);
console.log(cars.shift());
console.log(cars);
console.log(cars.unshift('Fiat'));
console.log(cars);
cars[0] = 'Honda'
console.log(cars);
cars[cars.length] = 'MG';
console.log(cars);
delete cars[3];
console.log(cars);
cars.splice(3,1,'volkswagen','GE');
console.log(cars);
cars.splice(0,1);
console.log(cars);
console.log(bikes.concat(cars));
console.log(bikes.slice(1));
console.log(bikes.toString());
console.log(bikes.sort());
console.log(cars.reverse());

//Question3 :

if (prompt("enter his age:") > 21)
{
    console.log("Can Drink")
}
else
console.log("Cannot Drink")
