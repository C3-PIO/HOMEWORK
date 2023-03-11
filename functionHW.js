//Homework Function Drills

// 1 . ) Write a function that outputs the sum of the first and the last index of an array. // use .pop() and .shift()

// ex => var sampleArray = [1,2,3,4,5] 
// expected output =>  sum = 6
    myArray = [14,82,39,74,20]
    sum = myArray.shift() + myArray.pop()
    console.log(sum)

// 2. Write a JavaScript program to find the leap years in a given range of years. 
function years (a, b){
    a = 1960
    b = 2020
    let leapYears = []
    for (i = a; i <= b; i++){
        if ((a % 4 === 0) && (a % 100 !== 0 || a % 400 === 0)){
            leapYears.push(i)
        }
    }
    return leapYears
}
console.log(years())
// ^^^Every year between 1960 and 2020 is being printed. I can't figure out why the parameters within the if statement aren't working^^^

// 3. Write a JavaScript function to sort the following array of objects by title value. //use .sort()
 var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

function titleSort(){
    let titles = []
    for(i=0; i<library.length; i++){
      titles.push(library[i].title)
    }
    return titles.sort()
}
console.log(titleSort())

 // 4. Write a JavaScript program that takes an array with mixed data type and calculate the sum of all numbers.
 // Test Data :
// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// ([2, 3, 0, 5, 7, 8, true, false]) -> 25
// Expected Output:
// Original array: 2,11,3,a2,false,5,7,1
// Sum all numbers of the said array: 18
mixedArray = [2, "11", 3, "a2", false, 5, 7, 1]

function numSum (){
    let nums = []
    for (i=0; i<mixedArray.length; i++)
    if ( typeof mixedArray[i] === 'number'){
       nums.push(i)
    } 
    return nums
}
console.log(numSum())
// ^^^Function numSum() is returning the index numbers of the new nums array, and not the number value itself. I'd add more to the function to calculate the sum of all the numbers in the new nums array if I could figure out how to get the actual number value read. I feel like there's an easier way to do this opposed to a function within a function but my brain is not braining right now. 


// 5. You will be given an array of drinks, with each drink being an object with two properties: name and price. 
   // Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
   // Assume that the following array of drink objects needs to be sorted:
   drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10},
    {name: 'sprite', price: 30}
  ]
//   example output =>
//   sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
function drinkSort(){
    let prices = []
    for (i=0;i<drinks.length;i++){
        prices.push(drinks[i].price)
    }
    return prices.sort()
}
console.log(drinkSort())

// ^^^I realize this doesn't have the drinks array as an argument. From the discussions in class, I know that I'm supposed to use the compare function but I'm still a little tripped up after reading through it in w3. Hoping we can talk this one further in office  hours next week. 