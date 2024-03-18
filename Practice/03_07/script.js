/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const person = {
  name: "Tomoaki Hasegawa",
  sex: "male",
  age: 33,
  family: {
    wife: "Sonoka",
    daughter: {
      olderDaughter: "Yuuri",
      youngerDaughter: "Mahiro",
    },
  },
  job: "Marketing",
};

console.log(person);
console.log(person.age);
console.log(person["family"]);
