//Day 16 coding challenge.
//Question 1:Enhanced laptop object:Construct an object for a laptop including properties make,model,year and a method
//describe () that logs a sentence about the laptop.
let laptop = {
    make:"Dell",
    model:"XPS 15",
    year:2021,
    describe: function()  {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }
};
laptop.describe();

//Question 2 Advanced array:Destructuring:Given an array of objects representing different laptops,each with 
//properties make_model,and year,use array destructing to assign the first and second laptop to variables.then log these variable.
let laptops = [
    {make: "Dell",model:"XPS 15", year:2021},
    {make:"Apple", model:"Macbook Pro", year:2020},
    {make:"HP", model:"Spectre x360", year:2021}
];
let[laptop1,laptop2] =  laptops;
console.log(laptop1);
console.log(laptop2);

//Question 3 :Combining array with spread operators
let pricesSet1 = [1200,1500,1100];
let pricesSet2 = [1000,1300,1600];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a,b) => a-b);
console.log(combinedPrices);

//DAY 17 CODING CHALLENGE.
//Question 1 :Function with rest parameters.
//Define a function that accepts multiple hobbies as arguments.
function logHobbies(...hobbies:string[])  {
    hobbies.forEach(hobby => {
        //logs a statement for each hobby
        console.log(`I enjoy ${hobby}.`);
    });
}
//Calls the function with three hobbies.
logHobbies("reading","coding","cycling");


//Question 2:Multiple Template Literals.
//using template literals to define a multiline string.
let myIdealDay = `My ideal day would involve:
1.Waking up early and going for a jog.
2.Spending a few hours coding on a personal projects.
3.Ending the day by reading a good book.`;

//logging the multiline string to the console
console.log(myIdealDay);


//Question 3:Refactoring to arrow function.
//Original function for calculating the area of a rectangle.
function calculateArea(width:number,height:number) : number {
    return width * height;
}
//Refactored into an arrow function.
let calculateAreaArrow = (width:number,height:number) : number =>width * height;

//Example usage of the arrow function.
console.log(calculateAreaArrow(5,7));//logs the area of the rectangle.