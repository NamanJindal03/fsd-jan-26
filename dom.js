//selectors -> 

//basic selectors??

// class id tag 
/**
 * 
 * 
 */

// const p1Tag = document.getElementsByClassName('p1');
// const allPTags = document.getElementsByTagName('p');
// const hTag = document.getElementById('singleH')

// console.log(p1Tag);
// console.log(allPTags);
// console.log(hTag)

const p1Tag2 = document.querySelector('.p1');
const allPTags2 = document.querySelectorAll('p');
const hTag2 = document.querySelector('#singleH');
const bodyTag = document.body


console.log(p1Tag2);
console.log(allPTags2);
console.log(hTag2)

const actianableButton = document.querySelector('#act')
console.log(actianableButton)

actianableButton.addEventListener('click', () => {
    p1Tag2.innerHTML = 'HTML has been changed successfully'
})

// const addHTMLBtn = document.querySelector('#addHTMLBtn')
// addHTMLBtn.addEventListener('click', ()=>{
//     //creating an independent span html node 

//     const spanTag = document.createElement('span')
//     spanTag.innerText = 'I am dynamically generated'
//     spanTag.classList.add('red')
//     bodyTag.appendChild(spanTag)
// })


const addHtmlBtn=document.querySelector('#addHTMLBtn')
addHtmlBtn.addEventListener('click', ()=>{
    const sectionTag = document.createElement('section');
    const H1Tag = document.createElement('h1');
    const H2Tag = document.createElement('h2');

    H1Tag.innerText='using h1 tag'
    H2Tag.innerText='using 2 tag'
    sectionTag.classList.add('sectionHandling')

    sectionTag.append(H1Tag, H2Tag)

    bodyTag.append(sectionTag);

})

const addHTMLBtn = document.querySelector("#addHTMLBtn")
addHTMLBtn.addEventListener('click', () => {
    const sectionTag = document.createElement('section');
    const spanElement = document.createElement('span');
    const h1Tag = document.createElement('h1');
    h1Tag.innerText = 'apple';
    const h2Tag = document.createElement('h2');
    h2Tag.innerText = 'mango';
    spanElement.appendChild(h1Tag);
    spanElement.appendChild(h2Tag);
    sectionTag.appendChild(spanElement);
    bodyTag.appendChild(sectionTag);
})