// (Book 2) #3 Problem Solving: Deconstruction

/*  Pick something you like to do, or something that you can do well that involves many steps. For me, it would be writing letters to people.

Your job is to deconstruct your hobby, job, or craft into the tasks required.

        Write a function for each task.
    In the function body, just console.log() a description of the task.
    Invoke the tasks in the correct order.

    Make French Press Coffee:
    1. Fill kettle with water
    2. Turn the kettle on to boil
    3. Obtain whole coffee beans
    4. Grind coffee beans to a coarse finish
    5. Measure out four tablespoons of ground coffee
    7. Empty ground coffee into French Press
    8. Pour water slowly to the top of the press
    9. Place the lid of the press onto the cannister
    10. Let sit for 6 minutes to bloom
    11. Press down on the handle 
    12. Pour into a coffee cup for enjoyment
    */

// GOAL:
// 1. break down a large task into small units
// 2. name and code those units in javascript

// define one function for each task
//  *all should NOT be inside a single functions*
// the order does not matter. 
// then each task can be executed in the correct order

    // define the function makeFrenchPress & add steps for each task
 const makeFrenchPress = (obj, frenchPressSteps) => {
    // the obj gets steps added to the frenchPressSteps
    obj.steps = frenchPressSteps;
    // returns/checks the entire obj no just the steps
    return obj;
 } ;
    //  prints the updated makeFrenchPress
console.log(makeFrenchPress);



    // STEP 1: DEFINE the function task (fillKettle) 
const fillKettle = (obj, directionOne) => {
   obj.one === directionOne;
   return obj;
};
const stepOne = fillKettle(makeFrenchPress, `Fill kettle with water`)
console.log(fillKettle);

// // Step 2: defining the function task (boilWater) 
const boilWater = (obj) => {
obj === `Turn the kettle on to boil`;
return obj;
}
console.log(boilWater);

// // STEP 3: defining the function task (obtainBeans) 
const obtainBeans = (obj) => {
    obj === `Obtain whole coffee beans`
    return obj;
}
// STEP 4: defining the function task (grindCoffee) 
const grindCoffee = (obj) => {
    obj === `Grind coffee beans to a coarse finish`
    return obj;
}
// defining the function task (measureGrounds) 
const measureGrounds = (obj) => {
    obj === `Measure out four tablespoons of ground coffee`
    return obj;
}
// defining the function task (emptyGrounds) 
const emptyGrounds = (obj) => {
    obj === `Empty ground coffee into French Press`
    return obj;
}
// defining the function task (pourWater) 
const pourWater = (obj) => {
    obj === `Pour water slowly to the top of the press`
    return obj;
}
// defining the function task (placeLid) 
const placeLid = (obj) => {
    obj === `Place the lid of the press onto the cannister`
    return obj;
}
// defining the function task (letSit) 
const letSit = (obj) => {
    obj === `Let sit for 6 minutes to bloom`
    return obj;
}
// defining the function task (pressDown) 
const pressDown = (obj) => {
    obj === `Press down on the handle `
    return obj;
}
// declaring the function task (pourDrink) 
const pourDrink = (obj) => {
   
   
    console.log("Pour into a coffee cup for enjoyment")
}


console.log (`Make French Press Coffee: 
1. ${obtainBeans}
2. ${grindCoffee}
3. ${measureGrounds}
4. ${emptyGrounds}
5. ${pourWater}
6. ${placeLid}
7. ${letSit}
8. ${pressDown}
9. ${pourDrink}
`)
