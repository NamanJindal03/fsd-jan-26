// const a = 100;
// const startTime = Date.now();

// setTimeout(()=>{
//     console.log('set time out got called')
// }, 1000)

// setTimeout(()=>{
//     setInterval(()=>{
//         console.log('----------------------------------')
//     }, 500)
// }, 3000)

//exact time se play around -> 

// const timerId = setInterval(()=>{
//     console.log(timerId)
//     const currentTime = Date.now();
//     console.log(currentTime - startTime)
//     if(currentTime - startTime > 5000){
//         clearInterval(timerId)
//     }
//     console.log('interval')
// }, 500)

// const b = 300;

// const c = a +b ;

// console.log(c)

// console.log('end')
const a = fetch('https://jsonplaceholder.typicode.com/todos/1');
// console.log(a)

// setTimeout(()=>{
//     console.log(a) //print??? output?
// }, 1000)

a.then((xyz)=>{
    console.log(xyz)
    return xyz.json();
})
.then((data)=>{
    console.log(data)
})
a.catch((err)=>{
    console.log('in catch')
    console.log(err)
})

// console.log('start')


// function abcd(laptop){
//     console.log(laptop)
// }
// abcd(100)

// [1,2,3,4,5].map((value, index, completeArray)=>{

// })

// const Promise1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // const numberOutput = Math.floor(Math.random()*100)
//         // if(numberOutput % 2 === 0 ){
//             resolve('number is even')
//         // }
//         // else{
//         //     reject('number is odd')
//         // }
//     }, 500)
//     // resolve('clear')
// })
// console.log(Promise1); //output?