// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest




// describe(" ", () => {
//       it("", () => {
//         expect();
//       });
//   });






// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
// a) Create a test with an expect statement using the variable provided.





describe("personCapitalized", () => {
const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }]
      // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
      expect(personCapitalized(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]);
    });
});




// b) Create the function that makes the test pass.


const personCapitalized = (array) => {
  return array.map((object) => `${object.name.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} is ${object.occupation}.`
  );
};




class PersonAndProfession {
  constructor([{name, occupation}]){
    this.name = name.charAt(0).toUpperCase() + name.slice(1)
    this.occupation = occupation
  }

  nameAndOcc(){
   return `${this.name} is ${this.occupation}.`
  }

}

var people = new PersonAndProfession ([
{ name: "ford prefect", occupation: "a hitchhiker" },
{name: "zaphod beeblebrox", occupation: "president of the galaxy"},
{ name: "arthur dent", occupation: "a radio employee"}
])



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.


describe("numbers", () => {
  it(" takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    expect(numbers(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(numbers(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})


// b) Create the function that makes the test pass.

  //create a function, takes in array
  const numbers =(array) =>{
    // targets number  when divided by 3.
    return array.filter(value => typeof value === 'number').map(value => value % 3)

  }



  // --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

  // a) Create a test with an expect statement using the variables provided.



  describe("cube", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
      expect(cube(cubeAndSum1)).toEqual(99)
      expect(cube(cubeAndSum2)).toEqual(1125)
    })
  })



  // b) Create the function that makes the test pass.


  const cube = (array) =>{
    // iterate over the array and cube each value
    return array.map(value => value ** 3)
// reduce to add all the values in the returned array
  .reduce((a,b) => a + b)
  }
