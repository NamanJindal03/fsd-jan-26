// const a = 4;
// const b = "";
// const c = undefined

// if( a && b){
//     console.log('1')
// }
// else{
//     console.log("2")
// }

// if(a+b){
//     console.log('1')
// }
// else{
//     console.log('2')
// }

// if(b && c){
//     console.log('1')
// }
// else{
//     console.log('2')
// }

// if(b || c || a){
//     console.log('1')
// }
// else{
//     console.log('2')
// }

//while, for, forEach, map

// for(initialStatement; ending codnition; change after every execution)

// for(let i = 0; i<10 || i%2 ==0; i=i+3){
//     console.log(i)
// }
// for(let i = 0; i < 0 ; i=i+3){
//     console.log(i)
// }

// for(let i = 0; i<10 && i%2 ==0; i=i+2){
//     console.log(i)
// }

// let i = 20;

// while(i < 30){
//     console.log(i)
//     i=i+3
// }

// const namanBioData = {
//         age:  10,
//         school: 'xyz',
//         class: '10th',
//         address: 'delhi'
//     }

//     console.log(namanBioData.age)
//     console.log(namanBioData.school)


// function isEligibleToVote(personAge){
//     //handle positive case first 
//     if(personAge >=18 && personAge < 100){
//         console.log('can vote')
//     }
//     else{
//         console.log('cannot vote')
//     }
// }

// isEligibleToVote(10);
// isEligibleToVote(22);

// function isEligible(purpose, personAge){
    
//     let purposeRequiredAge = -1;
//     switch (purpose){
//         case 'vote': 
//             purposeRequiredAge = 18;
//             break;
//         case 'drivingLicense':
//             purposeRequiredAge = 18;
//             break;
//         case 'panCard':
//             purposeRequiredAge = 16;
//             break;
//         case 'smoking':
//             purposeRequiredAge = 25;
//             break;
//         case 'birthCertificate':
//             purposeRequiredAge = 0;
//             break;
//         // default: 
//         //     console.log('illegal call');
//         //     return;
//     }
//     if(purposeRequiredAge === -1){
//         console.log('illegal call');
//         return;
//     }
//     if(personAge >= purposeRequiredAge){
//         console.log('eligible')
//     }
//     else{
//         console.log('not eligible')
//     }
// }
// isEligible('vote', 14);
// isEligible('drivingLicense', 10)
// isEligible('vote', 20);
// isEligible('panCard', 22);
// isEligible('smoking2', 22); //wrong way ->


// function a(){
//     return 100;

//     let ab = 10;
//     console.log(ab)
// }
// const nj1 = a();
// console.log(nj1)

// function b(){
//     console.log('abcd')

//     let ab = 10;
//     console.log(ab)
// }
// const nj2 = b();
// console.log(nj2)


// function arbitraryNumber(n){
//     return n + n;
// }

// const a = arbitraryNumber(10);
// const b = arbitraryNumber(a);
// const c = arbitraryNumber(b);
// console.log(c)


// function call vs function reference -> 


// function funky(){
//     // console.log('I am a funky person')

//     let a = 100;
//     const b = a+a;

//     // return 100;
// }

// // console.log(funky) //function definition print 
// console.log(funky())

// function C(num1, num2){
//     console.log(num1, num2)
// }

// function B(){
//     const someValue = C(200,300)
//     return someValue;
// }

// function A(){
//     const someValue = B;
//     return someValue
// }
// const ans = A();
// console.log(ans)


//creation of array ->

// const a = []; //created a blank aray
// const b = [1,2,3,4,5] //created a number array
// const c = ['a', 'b', 'c'] //created a alphabatical array
// const d = [1, 'a', 'b', 2] //created a mixed type array

// const e = new Array(); //another way to create array
// const f = new Array(6) //created an array with fixed 6 indexes
// const g = new Array(10).fill('naman') //createed an array of length 10 and filled all the values by 0 value


// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)

// console.log(f[0])


// const arr1 = [1,2,3,4,5];
// const arr2 = [1,2,10,11,12];
// const arr3 = arr1.concat(arr2);
// console.log(arr3)

// console.log(arr1[0]);//1
// console.log(arr1[5]); //??

// create new index with values = 

// arr1[5] = 100;
// console.log(arr1)

// arr1[10] = 200;
// console.log(arr1)

// arr1.push(201) //append a value at the end
// console.log(arr1)

// arr1.pop() //remove a value fromt he end
// console.log(arr1)

// arr1.unshift('nj') //append a value in the start of the array
// console.log(arr1) 

// arr1.shift() //remove a value from the start of the array
// console.log(arr1)


// delete arr1[4]
// console.log(arr1)

// console.log(arr1.length)

// //iteration 
// for(let i=0; i< arr1.length; i++){
//     console.log(arr1[i])
// }


// const fruits = ['apple', 'orange', 'pineapple'];
// // fruits.reverse();
// // console.log(fruits)


// const someVal = fruits.join(' and ')
// console.log(someVal)
// console.log(fruits)

//indexOf lastIndexOf
//slice and splice 

// const fruits = ['apple', 'orange', 'pineapple', 'pomegranate', 'litchi', "pineapple"];
// const requiredIndex = fruits.indexOf("naman");
// console.log(requiredIndex) //-1


// const fruits = ['apple', 'orange', 'pineapple', 'pomegranate', 'litchi', "pineapple"];
// const subset = fruits.slice(2, 3);
// console.log(subset)
// console.log(fruits)

// const remaining = fruits.splice(1, 4);
// console.log(remaining);
// console.log(fruits);
const fruits = ['apple', 'orange', 'pineapple', 'pomegranate', 'litchi', "pineapple"];
// const isIncluded = fruits.includes('pineapple');
// console.log(isIncluded)


// const obj1 = {};
// const obj2 = new Object();
// console.log(obj1);
// console.log(obj2)

// for(let fruit of fruits){
//     console.log(fruit)
// }


// const student = {
//     name: 'naman',
//     age: 10,
//     class: '5th',
//     address: 'delhi'
// }

// console.log(student);
// /**
//  * dot operator . 
//  * square bracket
//  * 
//  */

// console.log(student.name)
// console.log(student.class)
// console.log(student["name"])

// student.name = 'Neha'
// console.log(student)

// student["name"] = 'Rahul'
// console.log(student)

// // delete student["name"]
// // console.log(student)

// for(let studentProperties in student){
//     console.log(studentProperties)
//     console.log(student[studentProperties])
// }

//function part 2 -> 

// function check(num){
//     return num + 20;
// }
// let a = 10;
// check(a);
// console.log(a)




// function check2(arr){
//     return arr.push(20)
// }
// let bArray = [1,2,3,4];
// check2(bArray)
// console.log(bArray)

// function higher(fn){
//     // fn();

//     return fn;
//     // console.log(fn)
// }

// function lower(){
//     console.log('I am lower')
// }

// const some = higher(lower);
// console.log(some) //?what will be the output of this line???


// function higher(fn){
//     // fn();

//     return fn();
//     // console.log(fn)
// }

// function lower(){
//     console.log('I am lower')
// }

// const some = higher(lower);
// console.log(some) //?what will be the output of this line???


// function random(a){
//     a.push(100);
// }
// function random2(b){
//     b = b + 100;
// }


// const a = [1,2,3,4]
// const b = 10;
// random(a);
// random2(b);

// console.log(a);
// console.log(b)


// const arr1 = [1,2,3,4];
// const arr2 = arr1;
// arr2.push(100);
// console.log(arr1);
// console.log(arr2);


// let a = [];
// let b = [];
// console.log(a == b);
// console.log(a === b);

// let a = [];
// let b = a;
// console.log(a == b);
// console.log(a === b);


// let a = [20];
// let b = [20];
// console.log(a[0] ==  b[0])
// console.log(a[0] ===  b[0])

// const a = [1,2,3,4];
// // const b = a;


// const b = [...a];

// // for(let i=0; i< a.length; i++){
// //     b[i] = a[i];
// // }

// // console.log(a);
// // console.log(b);

// console.log(a);
// console.log(b);

// a.push(100)
// console.log(a);
// console.log(b)


// const a = [1,2, 3, [5,6,7]] //?
// const b = JSON.parse(JSON.stringify(a))
// // const b = structuredClone(a); //inefficient way -> deep copy 

// console.log(a);
// console.log(b);

// a.push(100);
// console.log(a);
// console.log(b);

// a[3].push(200);

// console.log(a);
// console.log(b);

// function outer(a){
//     const b = a+10;
//     return function inner(){
//         console.log(b)
//     }
// }

// const func = outer(20);
// func();