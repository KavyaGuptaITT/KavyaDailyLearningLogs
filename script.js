console.log("Hello This is Kavya Learning JS");

// learning Strings 

let a = "Kavya Gupta";
a[0] = "N"; // this does nothing cause strings are immutable in Js
console.log(a[0]); 

console.log(a.trim());
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.indexOf("G"));
console.log(a.trim().toLowerCase());
console.log(a.slice(3));
console.log(a.slice(3,19));
console.log(a.slice(-3));

let b = "I love coding";

console.log(b.replace(" ","do"));
console.log(b.replaceAll(" ","do"));
console.log(b.repeat(2));


//using Arrays 

let arr = [1,2,3,4];
let mixedArr = ["Kavya",23,81.3];

let arr1 = [];
console.log(typeof arr1);

console.log(mixedArr[0][0]);

// Array Methods
arr.push(5);
console.log(arr);

console.log(arr.pop(),arr);


console.log(arr);

arr.unshift(5);
console.log(arr);

console.log(arr.shift(),arr);


console.log(arr.includes(3));
let arr2 = [5,6,7,8];
let newArr = arr.concat(arr2);

console.log(newArr);

console.log(newArr[4]);

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let i = 6;
do {
  console.log(i);
  i++;
} while (i <= 5);

for (let value of arr) {
  console.log(value);
}

