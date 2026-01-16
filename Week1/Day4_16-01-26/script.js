// // const students = {
// //     name : "Kavya",
// //     age : "23",
// //     marks : 94.4
// // };

// // console.log(students.name);

// // students.location = "Jaipur";
// // delete students.age;
// // console.log(students);

// // const multipleStudents = {
// //     Kavya : {
// //         color : "fair",
// //         height : "6"
// //     },
// //     M : {
// //         color : "fair",
// //         height : "6"
// //     },
// //     Kavya : {
// //         color : "fair",
// //         height : "6"
// //     }

// // }

// // // example to see how lexical scope works
// // function outer() {
// //   let x = 10;
// //   let y = 20;
// //   function inner() {
// //     console.log(x);
// //     console.log(y);
// //   }
// //   inner();
// // }

// // outer();

// // const add = function (a, b) {
// //   return a + b;
// // };

// // console.log(add(4, 2));

// // // higher order functions

// // const printHello = function () {
// //   console.log("Hello!!");
// // };

// // function multipleHello(func, n) {
// //   for (let i = 0; i < n; i++) {
// //     func();
// //   }
// // }

// // multipleHello(function () {
// //   console.log("Hello");
// // }, 5);

// // // higher order functions that returns a function

// // function oddOrEvenRequest(request) {
// //   if (request == "odd") {
// //     return function (n) {
// //       console.log(!(n % 2 == 0));
// //     };
// //   } else if(request == "even") {
// //     return function (n) {
// //       console.log(n % 2 == 0);
// //     };
// //   }
// // }

// // let req = "odd";
// // let a = oddOrEvenRequest(req);
// // a(5);

// // // Creating methods for Objects

// // const calc = {
// //   add: function (a, b) {
// //     return a + b;
// //   },
// //   sub : function(a,b){
// //     return a-b;
// //   },
// //   prod(a,b){
// //     return a*b;
// //   }
// // };

// // console.log(calc.prod(5, 6));

// const student = {
//     maths : 90,
//     physics : 80,
//     chemistry : 88,
//     getAvg(){
//         console.log(this);
//         return (this.maths+this.chemistry+this.physics)/3;
//     }
// }
// console.log(student.getAvg());

// const add3 = (a,b) => a+b;
// console.log(add3(6,8));

console.log("Hi there");

setTimeout(() => {
  console.log("Apna College!!!");
}, 1);

let id = setInterval(() => {
  console.log("Kavya");
}, 2000);
setTimeout(() => {
  clearInterval(id);
}, 6000);
