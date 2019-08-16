/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.
* 2.
* 3.
* 4.
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
