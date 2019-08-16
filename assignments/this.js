/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.The value of 'this' will equal the window(console) where you are running the program*
* 2.When proceeded by a dot, the object to the left gets 'this'
* 3.When using a constructor function, 'this' equals the new object that is created and returned
* 4.When call, bind, or apply methods are used, 'this' is directly defined
*
* write out a code example of each explanation above
*/

// Principle 1
function sayName(name) {
    console.log(this);
    return name;
  }

  sayName();

// code example for Window Binding

// Principle 2
const myObj = {
  greeting: 'Hello',
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};

myObj.sayHello('Greg');

// code example for Implicit Binding

// Principle 3
function coach(greeter) {
  this.greeting = 'Hello ';
  this.greeter = greeter;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}
// code example for New Binding
const Greg = new coach('Greg')
const josie = new coach('josie')
const web = new coach('WEBPT9')

Greg.speak();
// Principle 4
Greg.speak.call(josie)
josie.speak.apply(web)
// code example for Explicit Binding
