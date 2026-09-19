// allocated to memmory -> num2 -> undefined 
// console.log(multiply(100,5)) //?
// console.log(multiply2(100,5)) //?
// var num1 = 10;

// console.log(num2); //? output?
// // let num2 = 20;

// var multiply2 = function(a,b){
//     a = a + 20;
//     b = b + 10;
//     return a * b;
// }


// function multiply(a, b){
//     a = a + 20;
//     b = b + 10;
//     return a + b;
// }

// var output = multiply(num1, num2);
// var modifiedOutput = output + 4;
// console.log(modifiedOutput)


//scopes ->

// let a = 10;

// a = 20; 

//var -> function scoped -> |||| let and const are block scoped

// var a = 100;

// a = 20;
// console.log(a)

// function random(){
//     a = 600;
//     console.log(a)
//     a = a + 20;
// }

// random(a)
// console.log(a)


// var a = 100;

// a = 20;
// console.log(a)

// function random(){
//     var a;
//     a = 600;
//     console.log(a)
//     a = a + 20;
//     // return a;
// }

// // a = 
// random(a)
// console.log(a)


// let b = 200;
// let c = 10
// console.log(b)

// {
//     let b = 300;
//     b = 500 + c;
//     console.log(b);
// }

// console.log(b)


// var d = 200;
// var e = 10
// console.log(d)

// {
//     var d = 300;
//     d = 500 + e;
//     console.log(d);
// }

// console.log(d)


// let a = 10;
// var b = 20;

// function sample(){
//     // a = 200;
//     // b = 300;
//     // {
//         let a = 500;
//         let b = 400;
//     // }
//     console.log(a)
//     console.log(b)
//     a = a + b;
//     return a
// }

// a = sample()
// console.log(a)
// console.log(b)

// var x = 1;
// function func(){
//     console.log(x); 
//     var x =2;
//     console.log(x); 
// }
// func();

// var x = 10;
 
// function test()
// {
//     if (x > 20) {
//         var x = 50;
//     }
 
//     console.log(x);
// }
 
// test();


// let a = 50;
// var b = 40;
// {
//     console.log(b);
//     // console.log(a);
//     var b = 90;
//     let a = 200;
//     function call(){
//         // console.log(b);
//         console.log(a);
//         let b = 55;
//         var a = 65;
//         console.log(a);
//         console.log(b);
//     }
//     call();
//     console.log(a);
//     console.log(b);
// }
// console.log(a);
// console.log(b);
// {
// 	console.log(a);
// 	console.log(b);
// }