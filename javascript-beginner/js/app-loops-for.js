// Loops
// running same block of code with different values each time
// for , while, do-while - general loops
// array specific iteration - for each , map
// for in - used for interating through objects

//for loop
// usually i or x is used. you can use anything
// takes three parameters
// first - initialization
// second - condition
// third - increment or decrement
// i ++ is same ias i = i + 1

// for(let i = 0; i < 10; i++){
//   console.log('Number ' + i);  
//   // this block is run for all i's that satisfy condition.
// }

// continue and break
// continue
for(let i = 0; i < 10; i++){
  if(i === 2){
    console.log('2 is my favorite number');
    continue; // check what happens if you take out continue
    // try to uncomment continue again and see the difference.
    // continue stops loop execution at that point and goes to next iteration.
  }
  if(i === 5){
    console.log('stop the loop');
    break;
  }
  console.log('Number ' + i);  
  // this block is run for all i's that satisfy condition.
}




