
// do additions of 2 variables 
// let num1; //we do not have to tell the data type of it 

// console.log(num1)

// num1 = 30;
// num1 = 'naman';
// num1 = true;




// let num2 = 40;
// num2 = 50; 


/* 
    int num1 = 10;

    num1 = 'naman' //error ->
*/


var name = 'naman';
var name = 'naman2';

console.log(name);

let name1 = 'naman';

// const random = 10;

// random = 20; //will throw error

// const random2;
// random2 = 200; //error - not allwoed -> do at the time of declaration itself


let a = 10;
let b = 20;


//Arithmetic operators 
let c = b - a;
let d = a+b;
let e = a*b;
let f = a/b;
let g = b % a;


let n1 = 100 % 2;
let n2 = 102 % 2;

if(n1 == n2){
    console.log('true value')
}
else{
    console.log('false value')
}

/* 
    == and === -> next lecture 
*/

let personAge = 400;

//handle positive case first 
if(personAge >=18 && personAge < 100){
    console.log('can vote')
}
else{
    console.log('cannot vote')
}


//handle negative case 
// if(personAge < 18 || personAge > 99){
//     console.log('person is not eligible to vote')
// }
// else{
//     console.log('can vote')
// }

// if(personAge >= 18){
//     console.log('can vote')
// }
// else{
//     console.log('cannot vote')
// }

// const output = personAge > 100 ? 'cannot vote' : 'can vote'
// // condition ? truthy value : falsy value.
// console.log(output)


// personAge = 10;
// if(personAge >18 ||personAge <100 ) {
//     console.log ("can vote")
// }
// else{
//     console.log('cannot vote')
// }

// give eligible candy options

// const moneyWithChild = 30;

// const candy1Price = 4;
// const candy2Price = 8;
// const candy3Price = 22;
// const candy4Price = 11;

// let numberOfCandiesTheChildCanBuy = 0;

// // if (Math.min(candy1Price, candy2Price, candy3Price, candy4Price) > moneyWithChild){
// //     console.log('child cannot buy any candy')
// //     console.log('0 candies')
// // }
// // else if(Math.max(candy1Price, candy2Price, candy3Price, candy4Price) < moneyWithChild){
// //     console.log('candy1, candy2, candy3, candy4 can be bought by child')
// //     console.log("4 candies")
// // }
// if(candy1Price <= moneyWithChild){
//     numberOfCandiesTheChildCanBuy = numberOfCandiesTheChildCanBuy + 1;
// }
// if(candy2Price <= moneyWithChild){
//     numberOfCandiesTheChildCanBuy = numberOfCandiesTheChildCanBuy + 1;
// }
// if(candy3Price <= moneyWithChild){
//     numberOfCandiesTheChildCanBuy = numberOfCandiesTheChildCanBuy + 1;
// }
// if(candy4Price <= moneyWithChild){
//     numberOfCandiesTheChildCanBuy = numberOfCandiesTheChildCanBuy + 1;
// }
// console.log(numberOfCandiesTheChildCanBuy)


// if({}/[]){
//     console.log('x')
// }
// else{
//     console.log('y')
// }



// function createIncrement() {
//   let count = 0;
//   function increment() { 
//     count++;
//   }
//   let message = `Count is ${count}`;
//   function log() {
//     console.log(message);
//   }
  
//   return [increment, log];
// }
// const [increment, log] = createIncrement();
// increment(); 
// increment(); 
// increment(); 
// log(); // What is logged?