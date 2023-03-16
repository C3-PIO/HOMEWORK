//////////////////////////////////////
////////////Hamster Class
//////////////////////////////////////
class Hamster {
    constructor(name){
        this.owner = ''
        this.name = name
        this.price = 15
    }
    wheelRun(){
        console.log('squeak squeak')
    }
    eatFood(){
        console.log('nibble nibble')
    }
    getPrice(){
        return this.price
    }
}

//////////////////////////////////////
/////////////Person Class
//////////////////////////////////////
class Person {
    constructor (name){
        this.name = name
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
    getWeight(){
        return this.weight
    }
    greet(){
        console.log(`Hello ${this.name}!`)
    }
    eat(){
        this.weight++
        this.mood++
    }
    exercise(){
        this.weight--
    }
    ageUp(){
        this.age++
        this.height++
        this.mood--
        this.bankAccount+=10
    }
    buyHamster(hamster){
        this.hamsters.push(hamster) 
        this.mood+10
        this.bankAccount-+hamster.getPrice()
    }
}

//////////////////////////////////////
///////////Create a Story
//////////////////////////////////////
const timmy = new Person ('Timmy')
for (i=0;i<5;i++){
    timmy.ageUp()
}
for (i=0;i<5;i++){
    timmy.eat()
}
for (i=0;i<5;i++){
    timmy.exercise()
}
for (i=0;i<9;i++){
    timmy.ageUp()
}
let gus = new Hamster('Gus')
gus.owner = 'Timmy'
timmy.buyHamster(gus)
for (i=0;i<15;i++){
    timmy.ageUp()
}
for (i=0;i<2;i++){
    timmy.eat()
}
for (i=0;i<2;i++){
    timmy.exercise()
}

//////////////////////////////////////
//////////Chef Make Dinners
//////////////////////////////////////
// Chef should be a factory of Dinner
// Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
// Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
// Have the Chef create 3 dinners, log the dinners

class Dinner {
    constructor(appetizer, entree, dessert){
        this.appetizer = appetizer
        this.entree = entree
        this.dessert = dessert
    }
}

class MexicanCuisineChef {
    whipUpSomeDinner(appetizer, entree, dessert){
        const dinners = []
        const newDinner = new Dinner(appetizer, entree, dessert)
        dinners.push(newDinner) 
        console.log(`I hope you enjoyed your ${dinners[0].appetizer}, ${dinners[0].entree}, and ${dinners[0].dessert}`)
    }
}

chef1 = new MexicanCuisineChef
chef2 = new MexicanCuisineChef
chef3 = new MexicanCuisineChef 
chef1.whipUpSomeDinner('Chips & salsa', 'Fajitas', 'Flan')
chef2.whipUpSomeDinner('Nachos', 'Burrito', 'Sopapilla')
chef3.whipUpSomeDinner('Quesadilla', 'Enchiladas', 'Deep Fried Cheesecake')
