const a = fetch('https://jsonplaceholder.typicode.com/todos/1');


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

// console.log(a)

// setTimeout(()=>{
//     console.log(a) //print??? output?
// }, 1000)

// async await 
// async function convertExisting(){
//     try{
//         console.log('asynchronous code started')
//         const answer = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         await new Promise((resolve, reject)=>{
//             setTimeout(()=>{resolve()}, 10000)
//         })
//     }
//     catch(err){
//         console.log(err)
//     }
    
//     console.log('not reached')
//     // console.log(answer);
//     console.log('not exectuted till above doesnt got completed')

// }
// convertExisting()

// console.log('name')
// console.log('name')
// console.log('name')
// console.log('name')
// console.log('name')
// console.log('name')
// console.log('name')
// console.log('name')
// console.log('name')
// console.log('name')
// console.log('name')
// console.log('name')
// console.log('name')
// console.log('name')
// console.log('name')
// console.log('name')


// //parallelly
// await BreadBaking
// console.log('cake baked') //10
// await FrostingMaking
// console.log(Frosting Prepapared); //12
// await FrostingOnCake
// console.log('cake frosting done')
// await decoratioOnCake
// console.log('cake decoration done')

// function promiseGenerator(){

// }
// await new Promise((resolve, reject)=>{
//     setTimeout(()=>{resolve()}, 10000)
// })

//https://jsonplaceholder.typicode.com/posts
//https://jsonplaceholder.typicode.com/posts/1

// const output = Promise.all([fetch('https://jsonplaceholder.typicode.com/posts/2'), fetch('https://jsonplaceholder.typicode.com/posts/1')]);

// output.then((data)=>{
//     return Promise.all([data[0].json(), data[1].json()])
// })
// .then((data)=>{
//     console.log(data)
// })


// try{

// }
// catch(err){

// }
// finally{

// }

// let data = new Promise((resolve, reject) => {
// 	setTimeout(()=>{
// 		reject('reject')
// 		resolve('resolve')
// 	})
// })
// data.then((data)=>{
// 	console.log(data)
// })
// .catch((data)=>{
// 	console.log(data)
// })

// let data = new Promise((resolve, reject) => {
// 	setTimeout(()=>{
// 		resolve('resolve')
// 		reject('reject')
//         console.log('first')
//         console.log('ewnfewf')
// 	})
// })
// data.then((data)=>{
// 	console.log(data)
// })
// .catch((data)=>{
// 	console.log(data)
// })

//callback starvation || task queue starvation

// .then .catch .finally
// async await -> concepts 

//build -> making skills ->

//errors -> resolve -> learn -> 

//mera, doubt team -> fullstack development -> 12 