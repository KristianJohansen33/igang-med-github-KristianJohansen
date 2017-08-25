hello();

function hello() {
    console.log("hello...");
}

sayHello('hoisting');

function sayHello(who) { 
    console.log('hello', who);
}

sayHello('me');


var sayHey = function sayHey(value) {
    console.log(value);
}   

sayHey('testing shit?')