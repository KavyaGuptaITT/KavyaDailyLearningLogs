// This is day 3 of learning 

// basic function syntax
function add(a,b){
    return a+b;
}

console.log(add(3,4));

const add1 = function(a,b){
    return a+b;
}

console.log(add1(3,4));

const add2 = function sum(a,b){
    return a+b
}

console.log(add2(3,7));

// learning JS object literals
let delhi ={
    latitude : "2.34",
    population : "1000",
    GDP : "20000"
};

//console.log(student.clg);

const student = {
    name : "Kavya Gupta",
    clg : "Poornima University",
    marks : "45"
};

const obj = {
    1 : "a",
    hello : "Kavya",
    null : "Hello"
};

console.log(obj[1]);
//console.log(obj[hello]);
console.log(obj[null]);


//console.log(obj.1); this will not work cause dot operator will not convert a number to string

// Adding and Updating objects

const obj2 = {
    Name : "Kavya",
    Location : "Jaipur Rajasthan"
};

console.log(obj2.Name);
obj2.Name = "Lakshya";
obj2.Surname = "Maharshi";

console.log(obj2);

console.log(delete obj2.Location);

console.log(obj2);


// objects of objects 

const classInfo = {
    aman : {
        grade : "A+",
        city : "Delhi"
    },

    karan :{
        grade : "B",
        city : "Jaipur"
    }
};

console.log(classInfo.karan.city);


// Array of Objects
const temp = [
    {
        name : "Kavya",
        grade : "A+"
    }
]

console.log(temp[0].grade);


// Arrow function
const add = (a, b) => a + b;

console.log(add(4,8));