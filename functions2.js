// //map is applied over an array -> [], {} no, integer no

// const sampleArr = [1,2,3,4,5];

// // const returnedNewArray = sampleArr.map((val, index, arr)=>{})


// // console.log(returnedNewArray); //? output??



// // sampleArr.randomFunction = function(a){
// //     a();
// //     console.log('I am playing with', a)
// // }

// // sampleArr.randomFunction(()=> {console.log('checking if I am called')})



// //complete the function so that it completely mimics the behaiour of a map -> polyfills
// sampleArr.customMap = function(cb){
//     const ans = [];
//    for(let i=0; i<sampleArr.length; i++){
//     const returnedValue = cb(sampleArr[i], i, sampleArr); //nj(val, index, arr)
//     ans.push(returnedValue)
//    }
// //    console.log(ans)
//    return ans
// }

// const returnedNewArray1 = sampleArr.customMap((val, index, arr)=>{}) //same output as before 
// const returnedNewArray2 = sampleArr.customMap((val, index, arr)=>{return index + val}) //same output as before 
// const returnedNewArray3 = sampleArr.customMap((val, index, arr)=>{return val + 1}) //same output as before 

// console.log(returnedNewArray1)
// console.log(returnedNewArray2)
// console.log(returnedNewArray3)

// function nj(v, i , a){
//     return v + i
// }
// const val = 1;
// const index = 2;
// const arr = [1,2,3,4,5,6,7]
// nj(val, index, arr)


const sampleArr2 = [1,3,4,6,7,8,10]; 

//write a program to filter even values from the array -> 
//expected output - [4,6,8,10]

// const ansArr = [];
// for(let i=0; i<sampleArr2.length; i++){
//     if(sampleArr2[i] % 2 === 0){
//         ansArr.push(sampleArr2[i])
//     }
// }

// sampleArr2.customFilter = function(cb){
//     //code 
//     const ans =[];
//     for(let i=0; i<sampleArr2.length; i++){
//         const returnedValue = cb(sampleArr2[i], i, sampleArr2);
//         if(returnedValue){
//             ans.push(sampleArr2[i]);
//         }
//    }
//    return ans;
// }

// // const ansArr = sampleArr2.filter((val, index) => {return undefined})
// const ansArr = sampleArr2.customFilter((val, index) => {return val % 2 === 0})

// console.log(ansArr) //


const arr1 = [1,2,3];

const arr2 = [5,6,7];

arr1.njFunc2 = function(){
    console.log('i do something')
}

arr2.njFunc2 = function(){
    console.log('i do something')
}

//how can I access the common storage 

Array.prototype.njFunc = function(){
    console.log('i do something')
}

Object.prototype.someNewFunc = function(){
    console.log('I am func defined in the object ')
}

// arr1.()

//prototype chain 

// evverything in JS is an object?? why??? 


