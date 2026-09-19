import fs from 'fs/promises'

// fs.readFile('nj.txt', 'utf-8', (err, data) => {
//     if(err){
//         throw Error('something went wrong')
//     }
//     console.log(data)
// })

// fs.writeFile('./generatedFiles/file1.txt', 'lets add the study material', (err) => {
//     if(err){
//         throw new Error('file could not be written', err)
//     }
//     console.log('file writing was successful')
// })




// fs.readFile('nj.txt', 'utf-8', (err, data) => {
//     if(err){
//         throw Error('something went wrong')
//     }
//     fs.appendFile('./generatedFiles/log.txt', 'lets add the study material \n', (err) => {
//         if(err){
//             throw new Error('file could not be written', err)
//         }
//         console.log('file writing was successful')
//     })
// })

const output = fs.readFile('nj.txt', 'utf-8');
output.then((data)=>{
    console.log(data);
    const didAppend = fs.appendFile('./generatedFiles/log.txt', 'lets add the study material \n')
    didAppend.then(()=>{
        console.log('file appended successfully')
    })
    .catch(()=>{
        console.log('error')
    })
})
.catch((err)=>{
    console.log(err)
})


import fs from 'fs/promises';
async function handleFile()   {
    try {
        const data = await fs.readFile('nj.txt', 'utf-8');
        console.log(data);
        await fs.writeFile('log.txt', 'records fetch');
        console.log('Log entry written.');
    } catch (err) {
        console.log('Something went wrong');
    }
}
handleFile();


// if we are able to read the nj.txt successfully then you need to print in a log file that records fetch