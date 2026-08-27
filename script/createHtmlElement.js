// todo: topic:  Create HTML elements using Javascript and appendChild.


// hard way : 
//1. create new section.
const  createNewSection = document.createElement ('section');

//2. create new h3 tag and set innerText. 

const createH3 = document.createElement ('h3');
createH3.innerText = 'The BloodLine';

// create ul and li set innerText.

const createUl = document.createElement('ul')
const li1 = document.createElement('li');
li1.innerText = 'Roman Range';

const li2 =document.createElement ('li');
li2.innerText = 'Jay and jimy';


// append child  li1 and li2 in ul

createUl.appendChild(li1);
createUl.appendChild(li2)
console.log(createUl);

// append childNode createNewSection in ul and h3.
createNewSection.appendChild(createH3);
createNewSection.appendChild(createUl);

// get main section and append createNewSection

const mainContainer = document.getElementById('main-container');

// append createNewSection.
mainContainer.appendChild(createNewSection)

// style add in createNewSection.
createNewSection.classList.add('styleElement')


//* easy er way :
// createNewWebsite  section : 
const createNewWebsite =document.createElement('section');

// add inner html : 

createNewWebsite.innerHTML = `
<h3> My created Website </h3>
<ul> 
   <li> portfolio website</li>
   <li> Tea hows</li>
   <li> hary vai </li>
   <li> mobile banking </li>
</ul> `;

// append createNewWebsite in mainContainer 


mainContainer.appendChild(createNewWebsite);

// add style : 
createNewWebsite.classList.add('styleElement');


