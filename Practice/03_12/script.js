/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Smartphone from "./Smartphone.js";

let mySmartphone = new Smartphone("garaxy", 190, 10);
console.log(mySmartphone);
mySmartphone.updatePrice(300);
console.log(mySmartphone.price);

let mySecondSmartphone = new Smartphone("iPhone30", 100000, 119);

console.log(mySecondSmartphone);
