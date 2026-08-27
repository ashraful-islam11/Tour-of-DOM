// todo: topic : Styling dom properties, add and remove CSS class using JS



// 1st way.
const getSection = document.getElementsByTagName('section');
console.log(getSection);

for( const section of getSection){
    section.style.backgroundColor = 'lightGreen';
   
    section.style.padding = '20px';
    section.style.margin= '10px';
    section.style.borderRadius = '10px';
}


// 2nd way.
const getId = document.getElementById('game');

getId.style.backgroundColor ='lightBlue';
getId.style.padding = '20px';
getId.style.border= '5px solid green';


// 3rd way. 
const setStyle = document.getElementById('set-style');

setStyle.classList.add('style')

