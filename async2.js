// const Promise1 = new Promise((resolve, reject)=>{
//     // setTimeout(()=>{
//     //     const numberOutput = Math.floor(Math.random()*100)
//     //     if(numberOutput % 2 === 0 ){
//     //         resolve('number is even')
//     //     }
//     //     else{
//     //         reject('number is odd')
//     //     }
//     // }, 500)
//     resolve('clear')
// })
// console.log(Promise1); //output?

// Promise1.then((bottle)=>{
//     // console.log(Promise1);
//     console.log(bottle);
// })
// .catch((errMessage)=>{
//     console.log('errrrrrrrorrrr', errMessage)
// })

// console.log('start')
// setTimeout(()=>{
//     console.log('end')
// },4000)


// function randomPromise(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve('random resolve')
//         },2000)
//     })
// }

// const answer = randomPromise()
// // console.log(answer)
// answer.then((x)=>{
//     console.log(x)
// })