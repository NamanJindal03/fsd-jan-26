
// function outer2(){
//     const e = 'naman'
//     function outer(a){
//         const b = a+10+e;
//         const c = 200;
//         return function inner(){
//             console.log(b)
//             const d = b +c
//             console.log(e)
//         }
//     }
//     return outer();
// }


// const func = outer2();
// // const func2 = func(20)
// func();


// function createIncrement() {
//   let count = 0;
//   function increment() { 
//     count++;
//     console.log(count)
//   }
// //   let message = `Count is ${count}`;
// //   function log() {
// //     console.log(message);
// //   }
  
//   return increment;
// }
// const increment = createIncrement();
// increment(); 
// increment(); 
// increment(); 
// // log(); // What is logged?



// function createIncrement() {
//   let count = 0;
//   function increment() { 
//     count++;
//   }
//   function log() {
//     let message = `Count is ${count}`;
//     console.log(message);
//   }
  
//   return [increment, log];
// }
// const [increment, log] = createIncrement();
// increment(); 
// increment(); 
// increment(); 
// log(); // What is logged?





// const a = [1,2,3]

// const [val1, val2, val3] = a;
// console.log(val1);
// console.log(val2);
// console.log(val3);


// function test() {
//   let a = 5;
//   return function() {
//     a *= 2;
//     console.log(a);
//   };
// }

// const t = test();
// t();
// t();

function multiply(a,b){
    if(!b && b != 0){
        return function(num){
            console.log(num * a)
        }
    }
    console.log(a*b);
    //complete function
}

multiply(4, 5); // => 20
multiply(3, 3); // => 9
const double = multiply(2);
double(5);  // => 10
double(11); // => 22