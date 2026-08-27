
// console.log('hello query selector ');
// const getSpanInUl = document.querySelectorAll('div ul span ');
// console.log(getSpanInUl);

// // querySelector --> NodeList dibe.   ar getElementById--> HtmlCollection dibe. 


// // imideate child : 
// const imChild = document.querySelectorAll('div > h2');
// console.log(imChild);

// // 


//todo:  topic :  Dynamic style, getAttribute, setAttribute, innerText, innerHTML

const foodElement = document.getElementById('food-title');

// foodElement.style.backgroundColor ='pink';
foodElement.style.fontSize = '40px';

// foodElement.style.color = 'green';

// class list . 
 foodElement.classList.add('bg');
 foodElement.classList.add('bold');


// get Attribute :

console.log(foodElement.getAttribute('class'));
console.log(foodElement.getAttribute('id'));


// setAttribute: 
// foodElement.setAttribute.add('title', 'this is in tooltip');